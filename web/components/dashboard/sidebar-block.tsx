"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/constants/navlinks";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <SidebarProvider defaultOpen className="min-h-svh">
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex h-9 items-center gap-2 px-2">
            <span className="grid grid-cols-2 gap-0.5" aria-hidden="true">
              <span className="size-2 bg-primary" />
              <span className="size-2 bg-primary" />
              <span className="size-2 bg-primary" />
              <span className="size-2 bg-primary" />
            </span>

            <span className="text-sm font-bold tracking-tight group-data-[collapsible=icon]:hidden">
              CorpoWars
            </span>

            <Badge
              variant="outline"
              className="ml-auto group-data-[collapsible=icon]:hidden"
            >
              Beta
            </Badge>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label} className="p-2">
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      tooltip={item.label}
                    >
                      <Link href={item.href}>
                        <item.icon size={20} weight="duotone" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
