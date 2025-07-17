"use client";

import Image from "next/image";

import { LoginForm } from "./components/login-form";
import { useAuthRedirect } from "@/hooks/use-auth-redirect";
import DataStatusDisplay from "@workspace/ui/components/data-status-display";
import Logo from "@/components/logo";

export default function Login() {
  const { isPending, error } = useAuthRedirect({
    ifAuthenticatedParent: "/parent",
    ifAuthenticatedAgent: "/agent",
  });

  if (isPending || error) {
    return <DataStatusDisplay isPending={isPending} hasError={error} />;
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src={`/placeholder.svg`}
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={800}
          height={1200}
        />
      </div>
    </div>
  );
}
