// apps/client/context/child-selection-context.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useCanteenStudentsByParentQuery } from "@/hooks/use-students";
import { CanteenStudent } from "@workspace/ui/types/student"; // Assurez-vous d'avoir ce type
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
  } = useCanteenStudentsByParentQuery(parentId || ""); // Passer un ID vide si parentId n'est pas prêt

  const [selectedChild, setSelectedChild] = useState<CanteenStudent | null>(
    null
  );

  // Initialiser selectedChild une fois que les données sont chargées ou si parentId change
  useEffect(() => {
    if (canteenStudents && canteenStudents.length > 0 && !selectedChild) {
      setSelectedChild(canteenStudents[0] || null);
    } else if (canteenStudents && canteenStudents.length === 0) {
      setSelectedChild(null); // Aucun enfant si la liste est vide
    }
  }, [canteenStudents, selectedChild]);

  // Permet de changer l'enfant sélectionné par son ID
  const setSelectedChildId = (childId: string | null) => {
    if (childId === null) {
      setSelectedChild(null);
      return;
    }
    const foundChild = canteenStudents?.find((child) => child.id === childId);
    if (foundChild) {
      setSelectedChild(foundChild);
    }
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
