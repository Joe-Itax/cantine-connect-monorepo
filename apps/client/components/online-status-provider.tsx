"use client";

import { useOnlineStatus } from "@/hooks/use-online-status";
import React from "react";
import { NoInternetOverlay } from "./no-internet-overlay";

export const OnlineStatusProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isOnline = useOnlineStatus();

  return (
    <>
      {children}
      {!isOnline && <NoInternetOverlay />}
    </>
  );
};
