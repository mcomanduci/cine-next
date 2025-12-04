import { LoginForm } from "@/components/login/login-form";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Logout from "@/components/login/logout";

export async function LoginContent() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user) {
    return (
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <h1 className="text-2xl font-bold">
          Você já está logado como {session.user.email}
        </h1>
        <Logout />
      </div>
    );
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
