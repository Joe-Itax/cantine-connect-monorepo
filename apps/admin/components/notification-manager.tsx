"use client";
import { Notification } from "./notification";
import { useNotification } from "@workspace/ui/hooks/use-notification";

export function NotificationManager() {
  const { type, message, clear } = useNotification();

  if (!type || !message) return null;

  return <Notification type={type} message={message} onClose={clear} />;
}
