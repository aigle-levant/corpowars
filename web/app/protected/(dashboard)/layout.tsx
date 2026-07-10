import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/server";
import SidebarLayout from "@/components/dashboard/sidebar-block";

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

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }
  return (
      <SidebarLayout>
          {children}
      </SidebarLayout>
  );
}