// "use client";

// import { useEffect, useState } from "react";
// import {
//   ArrowUpRightIcon,
//   CircleFadingPlusIcon,
//   FileInputIcon,
//   FolderPlusIcon,
//   SearchIcon,
// } from "lucide-react";

// import {
//   CommandDialog,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
//   CommandShortcut,
// } from "@workspace/ui/components/command";

// export default function SearchInput() {
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault();
//         setOpen((open) => !open);
//       }
//     };

//     document.addEventListener("keydown", down);
//     return () => document.removeEventListener("keydown", down);
//   }, []);

//   return (
//     <>
//       <button
//         className="border-input w-full focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 text-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] cursor-pointer"
//         onClick={() => setOpen(true)}
//       >
//         <span className="peer/menu-button flex w-full items-center justify-between gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0">
//           <div className="flex items-center gap-2">
//             <SearchIcon className="" size={16} aria-hidden="true" />
//             <span className="l">Recherche</span>{" "}
//           </div>

//           <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
//             ⌘K
//           </kbd>
//         </span>
//       </button>
//       <CommandDialog open={open} onOpenChange={setOpen}>
//         <CommandInput placeholder="Type a command or search..." />
//         <CommandList>
//           <CommandEmpty>No results found.</CommandEmpty>
//           <CommandGroup heading="Quick start">
//             <CommandItem>
//               <FolderPlusIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>New folder</span>
//               <CommandShortcut className="justify-center">⌘N</CommandShortcut>
//             </CommandItem>
//             <CommandItem>
//               <FileInputIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>Import document</span>
//               <CommandShortcut className="justify-center">⌘I</CommandShortcut>
//             </CommandItem>
//             <CommandItem>
//               <CircleFadingPlusIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>Add block</span>
//               <CommandShortcut className="justify-center">⌘B</CommandShortcut>
//             </CommandItem>
//           </CommandGroup>
//           <CommandSeparator />
//           <CommandGroup heading="Navigation">
//             <CommandItem>
//               <ArrowUpRightIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>Go to dashboard</span>
//             </CommandItem>
//             <CommandItem>
//               <ArrowUpRightIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>Go to apps</span>
//             </CommandItem>
//             <CommandItem>
//               <ArrowUpRightIcon
//                 size={16}
//                 className="opacity-60"
//                 aria-hidden="true"
//               />
//               <span>Go to connections</span>
//             </CommandItem>
//           </CommandGroup>
//         </CommandList>
//       </CommandDialog>
//     </>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRightIcon,
  SearchIcon,
  UserIcon,
  FileTextIcon,
} from "lucide-react";
import {
  IconLayoutDashboard,
  IconUsers,
  IconFileText,
  IconUsersGroup,
  IconTag,
  IconMessage,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@workspace/ui/components/command";

interface UserSearchResult {
  id: string;
  name: string;
  email: string;
}

interface canteenStudentsSearchResult {
  slug: string;
  id: string;
  enrolledStudent: {
    name: string;
    matricule: string;
    class: string;
  };
  createdAt: string;
}

interface SearchResults {
  users: UserSearchResult[];
  canteenStudents: canteenStudentsSearchResult[];
}

const navigationLinks = [
  { label: "Tableau de bord", href: "/dashboard", icon: IconLayoutDashboard },

  { label: "Utilisateurs", href: "/dashboard/users", icon: IconUsers },
  { label: "Elèves", href: "/dashboard/students", icon: IconUsersGroup },
  // { label: "Message", href: "/dashboard/message", icon: IconMessage },
  // { label: "Catégories", href: "/dashboard/categories", icon: IconTag },
];

export default function SearchInput() {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResults>({
    users: [],
    canteenStudents: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const debouncedSearchTerm = useDebounce(searchTerm, 700);

  useEffect(() => {
    const fetchResults = async () => {
      if (!open && !searchTerm) {
        setSearchResults({ users: [], canteenStudents: [] });
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      try {
        const url = `/api/dashboard/search${
          debouncedSearchTerm ? `?q=${debouncedSearchTerm}` : ""
        }`;
        // console.log("Fetching from URL:", url);
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: SearchResults = await res.json();
        // console.log("API Response data:", data);
        setSearchResults(data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setSearchResults({ users: [], canteenStudents: [] });
      } finally {
        setIsLoading(false);
      }
    };

    // Déclenche la recherche seulement si la boîte est ouverte ou si le terme de recherche n'est pas vide (pour capter les changements de debouncedSearchTerm)
    if (open || debouncedSearchTerm !== "") {
      fetchResults();
    } else if (!open && searchTerm === "") {
      setSearchResults({ users: [], canteenStudents: [] });
      setIsLoading(false);
    }
  }, [debouncedSearchTerm, open, searchTerm]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleNavigate = (path: string) => {
    router.push(path);
    setOpen(false); // Close the dialog after navigation
    setSearchTerm(""); // Clear search term after navigation
  };

  const filteredNavigationLinks = useMemo(() => {
    if (!searchTerm) {
      return navigationLinks;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return navigationLinks.filter((link) =>
      link.label.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [searchTerm]);

  const hasAnyResults =
    searchResults.users.length > 0 ||
    searchResults.canteenStudents.length > 0 ||
    filteredNavigationLinks.length > 0;

  return (
    <>
      <button
        className="border-input w-full focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-9 text-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] cursor-pointer"
        onClick={() => {
          setOpen(true);
        }}
      >
        <span className="peer/menu-button flex w-full items-center justify-between gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0">
          <div className="flex items-center gap-2">
            <SearchIcon className="" size={16} aria-hidden="true" />
            <span className="l">Recherche</span>{" "}
          </div>

          <kbd className="bg-background text-muted-foreground/70 ms-12 -me-1 inline-flex h-5 max-h-full items-center rounded border px-1 font-[inherit] text-[0.625rem] font-medium">
            ⌘K
          </kbd>
        </span>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Rechercher des utilisateurs ou des élèves..."
          value={searchTerm}
          onValueChange={setSearchTerm}
        />

        <CommandList>
          {isLoading && (
            <CommandEmpty>Chargement des résultats...</CommandEmpty>
          )}

          {!isLoading && !hasAnyResults && (
            <CommandEmpty>Aucun résultat trouvé.</CommandEmpty>
          )}

          {/* Navigation Links - filtrés par votre logique useMemo */}
          {filteredNavigationLinks.length > 0 && (
            <CommandGroup heading="Navigation">
              {filteredNavigationLinks.map((link) => (
                <CommandItem
                  key={link.href}
                  onSelect={() => handleNavigate(link.href)}
                  value={link.label.toLowerCase()}
                >
                  <link.icon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>{link.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* Users Results */}
          {searchResults.users.length > 0 && (
            <CommandGroup heading="Utilisateurs">
              {searchResults.users.map((user) => (
                <CommandItem
                  key={user.id}
                  onSelect={() => handleNavigate(`/dashboard/users/${user.id}`)}
                  value={`${user.name} ${user.email}`.toLowerCase()}
                >
                  <UserIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>
                    {user.name} ({user.email})
                  </span>
                  <CommandShortcut>
                    <ArrowUpRightIcon size={12} />
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {/* canteenStudents Results */}
          {searchResults.canteenStudents.length > 0 && (
            <CommandGroup heading="Elèves">
              {searchResults.canteenStudents.map((student) => (
                <CommandItem
                  key={student.slug}
                  onSelect={() =>
                    handleNavigate(`/dashboard/students/${student.id}`)
                  }
                  value={student.enrolledStudent.name.toLowerCase()}
                >
                  <IconUsersGroup
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>
                    {student.enrolledStudent.name} (
                    {student.enrolledStudent.class} -{" "}
                    {student.enrolledStudent.matricule})
                  </span>
                  <CommandShortcut>
                    <ArrowUpRightIcon size={12} />
                  </CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

// Custom hook for debouncing a value
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
