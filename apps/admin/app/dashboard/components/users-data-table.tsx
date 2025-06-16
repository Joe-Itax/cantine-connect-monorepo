/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  ChevronDownIcon,
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleAlertIcon,
  CircleXIcon,
  Columns3Icon,
  EllipsisIcon,
  FilterIcon,
  ListFilterIcon,
  TrashIcon,
} from "lucide-react";

import { cn } from "@workspace/ui/lib/utils";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Input } from "@workspace/ui/components/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@workspace/ui/components/pagination";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover";
import { Spinner } from "@workspace/ui/components/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@workspace/ui/components/table";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";
import {
  useUsersQuery,
  useSearchUsersMutation,
  useDeleteUserMutation,
  useDeactivateUserMutation,
} from "@/hooks/use-users";
import LoadingDataTable from "./loading";
import ErrorThenRefresh from "./error";

import type { User } from "@workspace/ui/types/user";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@workspace/ui/components/alert-dialog";
import AddUser from "../users/add-user";

const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => {
      // Déterminer le nombre de lignes actives sélectionnables
      const activeRows = table
        .getRowModel()
        .rows.filter((row) => row.original.isActive);
      const allActiveRowsSelected =
        activeRows.length > 0 && activeRows.every((row) => row.getIsSelected());
      const someActiveRowsSelected = activeRows.some((row) =>
        row.getIsSelected()
      );

      // Déterminer l'état de la checkbox du header
      let headerCheckedState: boolean | "indeterminate";
      if (allActiveRowsSelected) {
        headerCheckedState = true;
      } else if (someActiveRowsSelected) {
        headerCheckedState = "indeterminate";
      } else {
        headerCheckedState = false;
      }

      return (
        <Checkbox
          checked={headerCheckedState}
          onCheckedChange={(value) => {
            if (value === true) {
              // Si l'utilisateur coche la case "Select All"
              // Nous sélectionnons uniquement les lignes actives
              activeRows.forEach((row) => {
                row.toggleSelected(true);
              });
            } else if (value === false) {
              // Si l'utilisateur décoche la case "Select All"
              // Nous désélectionnons TOUTES les lignes (y compris celles qui étaient actives)
              table.toggleAllPageRowsSelected(false);
            } else if (value === "indeterminate") {
              activeRows.forEach((row) => {
                row.toggleSelected(true);
              });
            }
          }}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) =>
      row.original.isActive ? (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ) : null,
    size: 28,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Nom",
    cell: ({ row }) => (
      <div className={`font-medium ${!row.original.isActive && "bg-red-500"}`}>
        {row.original.name}
      </div>
    ),
    size: 150,
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div>{row.original.email}</div>,
    size: 200,
  },
  {
    accessorKey: "role",
    header: "Rôle",
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as string;
      return (filterValue as string[]).includes(value);
    },
    cell: ({ row }) => (
      <Badge
        variant="outline"
        className={cn(
          "capitalize",
          row.original.role === "ADMIN" && "bg-green-400",
          row.original.role === "AGENT" && "bg-blue-300",
          row.original.role === "PARENT" && "bg-white/10"
        )}
      >
        {row.original.role}
      </Badge>
    ),
    size: 100,
  },
  {
    accessorFn: (row) => new Date(row.createdAt),
    id: "createdAt",
    header: "Date de création",
    cell: ({ row }) => (
      <div>{new Date(row.original.createdAt).toLocaleDateString()}</div>
    ),
    size: 120,
  },
  {
    accessorFn: (row) => new Date(row.updatedAt),
    id: "updatedAt",
    header: "Date de mise à jour",
    cell: ({ row }) => (
      <div>{new Date(row.original.updatedAt).toLocaleDateString()}</div>
    ),
    size: 120,
  },
  {
    id: "actions",
    cell: ({ row }) => <RowActions row={row} />,
    size: 40,
    enableSorting: false,
  },
];

export default function UsersDataTable() {
  const id = useId();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 1000);
  const searchUsersMutation = useSearchUsersMutation();

  useEffect(() => {
    if (debouncedQuery) {
      searchUsersMutation.mutate(debouncedQuery);
    } else {
      searchUsersMutation.reset();
    }
  }, [debouncedQuery]);

  const inputRef = useRef<HTMLInputElement>(null);
  const [sorting, setSorting] = useState<SortingState>([
    { id: "name", desc: false },
  ]);

  const {
    data: usersData,
    isLoading,
    isError,
    pagination,
    setPage,
    setPageSize,
  } = useUsersQuery();

  const totalItems =
    (searchUsersMutation.data?.totalItems ?? usersData?.totalItems) || 0;
  const totalPages =
    (searchUsersMutation.data?.totalPages ?? usersData?.totalPages) || 1;

  const users = usersData?.data || [];
  const displayedUsers = searchUsersMutation?.data?.data ?? users;

  const table = useReactTable({
    data: displayedUsers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    enableSortingRemoval: false,
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: (updater) => {
      const next =
        typeof updater === "function" ? updater(pagination) : updater;
      setPage(next.pageIndex);
      setPageSize(next.pageSize);
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: true,
    pageCount: totalPages,
    state: {
      sorting,
      pagination,
      columnFilters,
      columnVisibility,
    },
  });

  // Filtres pour le rôle
  const roleOptions = useMemo(() => ["ADMIN", "AGENT", "PARENT"], []);

  const selectedRoles = useMemo(() => {
    const filterValue = table.getColumn("role")?.getFilterValue() as string[];
    return filterValue ?? [];
  }, [table.getColumn("role")?.getFilterValue()]);

  const handleFilterChange = (
    columnId: string,
    checked: boolean,
    value: string
  ) => {
    const filterValue = table.getColumn(columnId)?.getFilterValue() as string[];
    const newFilterValue = filterValue ? [...filterValue] : [];

    if (checked) {
      newFilterValue.push(value);
    } else {
      const index = newFilterValue.indexOf(value);
      if (index > -1) {
        newFilterValue.splice(index, 1);
      }
    }

    table
      .getColumn(columnId)
      ?.setFilterValue(newFilterValue.length ? newFilterValue : undefined);
  };

  if (isLoading && users.length === 0) {
    return <LoadingDataTable />;
  }

  if (isError) {
    return <ErrorThenRefresh />;
  }

  const deactivateUserMutation = useDeactivateUserMutation();

  const handleDeactivateRows = async () => {
    const selectedIds = table
      .getSelectedRowModel()
      .rows.map((row) => row.original.id);
    if (selectedIds.length === 0) return;

    try {
      await deactivateUserMutation.mutateAsync(selectedIds);
      table.resetRowSelection();
    } catch (error) {
      console.error(
        "Erreur lors de la désactivation multiple des users.",
        error
      );
    }
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center flex-wrap gap-3">
          {/* Filter by name or email */}
          <div className="relative">
            <Input
              id={`${id}-input`}
              ref={inputRef}
              className={cn(
                "peer min-w-60 ps-9",
                Boolean(table.getColumn("name")?.getFilterValue()) && "pe-9"
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrer par nom ou email..."
              type="text"
              aria-label="Filtrer par nom ou email"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <ListFilterIcon size={16} aria-hidden="true" />
              {searchUsersMutation.isPending && (
                <div
                  className="absolute inset-y-0 start-2 top-1/2
              -translate-y-1/2 focus:z-10 pointer-events-none size-6 animate-spin rounded-full border-3 border-primary border-t-transparent"
                ></div>
              )}
            </div>

            {searchQuery && (
              <button
                className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => {
                  setSearchQuery("");
                  if (inputRef.current) inputRef.current.focus();
                }}
                aria-label="Effacer la recherche"
              >
                <CircleXIcon size={16} aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Filter by role */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <FilterIcon
                  className="-ms-1 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
                Rôle
                {selectedRoles.length > 0 && (
                  <span className="bg-background text-muted-foreground/70 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    {selectedRoles.length}
                  </span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto min-w-36 p-3" align="start">
              <div className="space-y-3">
                <div className="text-muted-foreground text-xs font-medium">
                  Rôle
                </div>
                <div className="space-y-3">
                  {roleOptions.map((role) => (
                    <div key={role} className="flex items-center gap-2">
                      <Checkbox
                        id={`${id}-role-${role}`}
                        checked={selectedRoles.includes(role)}
                        onCheckedChange={(checked) =>
                          handleFilterChange("role", !!checked, role)
                        }
                      />
                      <label
                        htmlFor={`${id}-role-${role}`}
                        className="text-sm capitalize"
                      >
                        {role}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Column visibility */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <Columns3Icon
                className="-ms-1 opacity-60"
                size={16}
                aria-hidden="true"
              />
              Colonnes
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Afficher les colonnes</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id === "createdAt"
                      ? "Date de création"
                      : column.id === "role"
                        ? "Rôle"
                        : column.id === "email"
                          ? "Email"
                          : column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center gap-3">
          {/* Delete button */}
          {table.getSelectedRowModel().rows.length > 0 && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="ml-auto" variant="outline">
                  <TrashIcon
                    className="-ms-1 opacity-60"
                    size={16}
                    aria-hidden="true"
                  />
                  Désactiver
                  <span className="bg-background text-muted-foreground/70 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
                    {table.getSelectedRowModel().rows.length}
                  </span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
                  <div
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border"
                    aria-hidden="true"
                  >
                    <CircleAlertIcon className="opacity-80" size={16} />
                  </div>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Etes-vous sûr de vouloir les désactiver?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action désactivera temporairement{" "}
                      {table.getSelectedRowModel().rows.length}{" "}
                      {table.getSelectedRowModel().rows.length === 1
                        ? "utilisateur"
                        : "utilisateurs"}{" "}
                      {table.getSelectedRowModel().rows.length === 1
                        ? "sélectionné"
                        : "sélectionnés"}
                      .
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <Button
                    onClick={handleDeactivateRows}
                    disabled={deactivateUserMutation.isPending}
                  >
                    {deactivateUserMutation.isPending
                      ? "En cours"
                      : "Désactiver"}
                    {deactivateUserMutation.isPending && <Spinner />}
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          {/* Add User button */}
          <AddUser />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{
                        width: header.getSize(),
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: cn(
                              "flex items-center gap-1",
                              header.column.getCanSort() &&
                                "cursor-pointer select-none"
                            ),
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: (
                              <ChevronUpIcon
                                className="ml-1"
                                size={14}
                                aria-hidden="true"
                              />
                            ),
                            desc: (
                              <ChevronDownIcon
                                className="ml-1"
                                size={14}
                                aria-hidden="true"
                              />
                            ),
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Aucun utilisateur trouvé.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-4 items-stretch @sm:flex-row @sm:items-center @sm:justify-between">
        {/* Results per page */}
        <div className="flex items-center justify-between gap-3 w-full">
          <Label htmlFor={id} className="max-sm:sr-only">
            Lignes par page
          </Label>
          <Select
            // className="w-fit"
            value={table.getState().pagination.pageSize.toString()}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger
              id={id}
              className="w-fit whitespace-nowrap  cursor-pointer"
            >
              <SelectValue placeholder="Sélectionner le nombre de résultats" />
            </SelectTrigger>
            <SelectContent className="[&_*[role=option]]:ps-2 [&_*[role=option]]:pe-8 [&_*[role=option]>span]:start-auto [&_*[role=option]>span]:end-2">
              {[10].map((pageSize) => (
                <SelectItem
                  key={pageSize}
                  value={pageSize.toString()}
                  className="cursor-pointer"
                >
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Page number information */}
          <div className="text-muted-foreground flex grow justify-end text-sm whitespace-nowrap">
            <p
              className="text-muted-foreground text-sm whitespace-nowrap"
              aria-live="polite"
            >
              <span className="text-foreground">
                {table.getState().pagination.pageIndex *
                  table.getState().pagination.pageSize +
                  1}
                -
                {Math.min(
                  Math.max(
                    table.getState().pagination.pageIndex *
                      table.getState().pagination.pageSize +
                      table.getState().pagination.pageSize,
                    0
                  ),
                  totalItems
                )}
              </span>{" "}
              sur <span className="text-foreground">{totalItems}</span>
            </p>
          </div>
        </div>

        {/* Pagination buttons */}
        <div>
          <Pagination>
            <PaginationContent>
              {/* First page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Aller à la première page"
                >
                  <ChevronFirstIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              {/* Previous page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                  aria-label="Page précédente"
                >
                  <ChevronLeftIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              {/* Next page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                  aria-label="Page suivante"
                >
                  <ChevronRightIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
              {/* Last page button */}
              <PaginationItem>
                <Button
                  size="icon"
                  variant="outline"
                  className="disabled:pointer-events-none disabled:opacity-50"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                  aria-label="Aller à la dernière page"
                >
                  <ChevronLastIcon size={16} aria-hidden="true" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}

function RowActions({ row }: { row: Row<User> }) {
  const deactiveUsersMutation = useDeactivateUserMutation();
  const router = useRouter();

  const handleDeleteUsers = async () => {
    try {
      await deactiveUsersMutation.mutateAsync([row.original.id]);
    } catch (error) {
      console.error("Erreur lors de la suppression des utilisateurs:", error);
    }
  };

  const openUserDetails = () => {
    router.push(`/dashboard/users/${row.original.id}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex justify-end">
          <Button
            size="icon"
            variant="ghost"
            className="shadow-none"
            aria-label="Actions"
          >
            <EllipsisIcon size={16} aria-hidden="true" />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={openUserDetails}>
            <span>Voir les détails</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        {row.original.isActive ? (
          <>
            <DropdownMenuSeparator />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="text-destructive focus:text-destructive"
                  onSelect={(e) => e.preventDefault()}
                >
                  <span>Désactiver l&apos;utilisateur</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Confirmer la désactivation
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Êtes-vous sûr de vouloir désactiver cet utilisateur de la
                    cantine ?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteUsers}
                    disabled={deactiveUsersMutation.isPending}
                  >
                    {deactiveUsersMutation.isPending
                      ? "En cours..."
                      : "Confirmer"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        ) : (
          <>
            <DropdownMenuSeparator />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem
                  className="text-blue-500 focus:text-blue-500"
                  onSelect={(e) => e.preventDefault()}
                >
                  <span>Réactiver l&apos;utilisateur</span>
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirmer la réactivation</AlertDialogTitle>
                  <AlertDialogDescription>
                    Êtes-vous sûr de vouloir réactiver cet utilisateur à la
                    cantine ?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDeleteUsers}
                    disabled={deactiveUsersMutation.isPending}
                  >
                    {deactiveUsersMutation.isPending
                      ? "En cours..."
                      : "Confirmer"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
