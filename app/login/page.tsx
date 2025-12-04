export async function generateMetadata() {
  return {
    title: "Login - CineNext",
    description:
      "Faça login para acessar sua conta CineNext e descobrir novos filmes.",
    openGraph: {
      title: "Login - CineNext",
      description:
        "Faça login para acessar sua conta CineNext e descobrir novos filmes.",
      url: "https://yourdomain.com/login",
    },
    alternates: {
      canonical: "https://yourdomain.com/login",
    },
  };
}
import { Suspense } from "react";
import { LoginContent } from "@/components/login/login-content";

function LoginSkeleton() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="h-64 bg-gray-200 animate-pulse rounded" />
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginContent />
    </Suspense>
  );
}
