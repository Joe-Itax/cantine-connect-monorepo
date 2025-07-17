"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { useCanteenStudentsByParentQuery } from "@/hooks/use-students";
import { CanteenStudent } from "@workspace/ui/types/student";
import { authClient } from "database/auth-client";

interface ChildSelectionContextType {
  selectedChild: CanteenStudent | null;
  setSelectedChildId: (childId: string | null) => void;
  children: CanteenStudent[] | undefined;
  isLoadingChildren: boolean;
  isErrorChildren: boolean;
}

const ChildSelectionContext = createContext<
  ChildSelectionContextType | undefined
>(undefined);

export const ChildSelectionProvider = ({
  children: propChildren,
}: {
  children: ReactNode;
}) => {
  const { data: session } = authClient.useSession();
  const parentId = session?.user?.id;

  const {
    data: canteenStudents,
    isLoading: isLoadingChildren,
    isError: isErrorChildren,
  } = useCanteenStudentsByParentQuery(parentId || "");

  const [selectedChildId, setSelectedChildIdState] = useState<string | null>(
    null
  );
  const selectedChild = useMemo(() => {
    if (!canteenStudents || !selectedChildId) {
      return null;
    }
    return (
      canteenStudents.find((child) => child.id === selectedChildId) || null
    );
  }, [canteenStudents, selectedChildId]);

  // Initialiser selectedChildId ou le mettre à jour si l'enfant précédemment sélectionné n'existe plus
  useEffect(() => {
    if (canteenStudents && canteenStudents.length > 0) {
      if (
        !selectedChildId ||
        !canteenStudents.some((child) => child.id === selectedChildId)
      ) {
        // Si aucun enfant n'est sélectionné, ou si l'enfant sélectionné n'est plus dans la liste,
        // sélectionnez le premier.
        setSelectedChildIdState(canteenStudents[0]?.id || null);
      }
    } else {
      setSelectedChildIdState(null); // Aucun enfant si la liste est vide
    }
  }, [canteenStudents, selectedChildId]);

  // Cette fonction permet de changer l'enfant sélectionné par son ID
  // Elle met à jour l'état selectedChildId
  const setSelectedChildId = (childId: string | null) => {
    setSelectedChildIdState(childId);
  };

  return (
    <ChildSelectionContext.Provider
      value={{
        selectedChild,
        setSelectedChildId,
        children: canteenStudents,
        isLoadingChildren,
        isErrorChildren,
      }}
    >
      {propChildren}
    </ChildSelectionContext.Provider>
  );
};

export const useChildSelection = () => {
  const context = useContext(ChildSelectionContext);
  if (context === undefined) {
    throw new Error(
      "useChildSelection doit être dans un ChildSelectionProvider"
    );
  }
  return context;
};
