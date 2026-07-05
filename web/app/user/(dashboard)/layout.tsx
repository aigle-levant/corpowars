import type { Metadata } from "next";
import { redirect } from "next/navigation";

import AppShellBlock from "@/components/ui/app-shell-block";
import { createClient } from "@/lib/server"; // your server client

export const metadata: Metadata = {
  title: "Dashboard | CorpoWars",
  description: "Overview of your corporate battles and performance",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Redirect if not authenticated
  if (!session) {
    redirect("/auth/login?message=Please sign in to access the dashboard");
  }

  return (
    <AppShellBlock>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          <div className="mx-auto w-full max-w-6xl px-6 py-8">{children}</div>
        </main>
      </div>
    </AppShellBlock>
  );
}
