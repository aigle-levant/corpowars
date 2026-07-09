import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/server";

export const metadata: Metadata = {
  title: "Profile | CorpoWars",
  description: "Overview of your corporate battles and performance",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  if (error || !data?.claims) {
    redirect("/auth/login");
  }

  return (
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">{children}</div>
        </main>
      </div>
  );
}
