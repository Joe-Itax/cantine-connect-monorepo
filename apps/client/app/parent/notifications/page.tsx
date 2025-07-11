"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { useChildSelection } from "@/context/child-selection-context";
import {
  useNotificationsQuery,
  useMarkAllNotificationsMutation,
  useMarkOneNotificationMutation,
} from "@/hooks/use-students";
import { Bell, Loader2, MailCheck, MailOpen, XCircle } from "lucide-react";
import { toast } from "sonner";

export default function ParentNotificationsPage() {
  const { selectedChild } = useChildSelection();

  const {
    data: notifications,
    isLoading,
    isError,
    error,
    refetch,
  } = useNotificationsQuery(selectedChild?.id || "");

  const markAllMutation = useMarkAllNotificationsMutation();
  const markOneMutation = useMarkOneNotificationMutation();

  if (!selectedChild) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-600 py-20">
        <Loader2 className="h-16 w-16 animate-spin text-blue-500 mb-4" />
        <p className="text-lg">Chargement de l'enfant sélectionné...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <p className="mt-4 text-lg text-gray-600">
          Chargement des notifications...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-red-600">
        <XCircle className="h-12 w-12 mb-4" />
        <p className="text-lg">
          Erreur lors du chargement des notifications: {error?.message}
        </p>
        <Button onClick={() => refetch()} className="mt-4">
          Réessayer
        </Button>
      </div>
    );
  }

  const handleMarkAllAsRead = async () => {
    if (selectedChild) {
      try {
        await markAllMutation.mutateAsync(selectedChild.id);
        toast.success("Toutes les notifications marquées comme lues !");
      } catch (err: any) {
        toast.error(err.message || "Échec du marquage des notifications.");
      }
    }
  };

  const handleMarkOneAsRead = async (notificationId: number) => {
    if (selectedChild) {
      try {
        await markOneMutation.mutateAsync({
          canteenStudentId: selectedChild.id,
          notificationId,
        });
        toast.success("Notification marquée comme lue !");
      } catch (err: any) {
        toast.error(err.message || "Échec du marquage de la notification.");
      }
    }
  };

  const sortedNotifications = [...(notifications || [])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">
        Notifications de {selectedChild.enrolledStudent.name}
      </h2>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Vos Notifications</CardTitle>
          {notifications && notifications.some((n) => !n.read) && (
            <Button
              onClick={handleMarkAllAsRead}
              disabled={markAllMutation.isPending}
              variant="outline"
              className="flex items-center gap-2"
            >
              {markAllMutation.isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MailCheck className="h-4 w-4" />
              )}
              Marquer tout lu
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {sortedNotifications.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              Vous n'avez aucune notification pour{" "}
              {selectedChild.enrolledStudent.name} pour le moment.
            </p>
          ) : (
            <ul className="space-y-4">
              {sortedNotifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`flex items-start p-4 rounded-lg shadow-sm border ${
                    notification.read
                      ? "bg-gray-50 text-gray-600"
                      : "bg-blue-50 text-blue-800 font-medium border-blue-200"
                  }`}
                >
                  <Bell
                    className={`h-5 w-5 mr-3 ${notification.read ? "text-gray-400" : "text-blue-600"}`}
                  />
                  <div className="flex-1">
                    <p className="text-base">{notification.message}</p>
                    <p className="text-xs mt-1">
                      {new Date(notification.createdAt).toLocaleDateString(
                        "fr-FR",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </p>
                  </div>
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleMarkOneAsRead(notification.id)}
                      disabled={markOneMutation.isPending}
                      className="ml-4 text-blue-600 hover:text-blue-800"
                    >
                      {markOneMutation.isPending ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <MailOpen className="h-4 w-4" />
                      )}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
