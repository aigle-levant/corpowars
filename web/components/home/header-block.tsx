"use client";

import Link from "next/link";
import { useState } from "react";
import { RiArrowRightLine, RiMenuLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Battle", href: "/battle" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Companies", href: "/companies" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-xl font-bold tracking-tighter text-foreground">
            CorpoWars
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">
            <Link href="/auth/login">Sign In</Link>
          </Button>

          <Button size="sm">
            <Link href="/auth/sign-up">
              Get Started
              <RiArrowRightLine className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <RiMenuLine className="h-5 w-5" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-70 sm:w-80">
            <SheetHeader>
              <SheetTitle className="text-left">CorpoWars</SheetTitle>
            </SheetHeader>

            <nav className="mt-8 flex flex-col gap-1">
              {navLinks.map((link) => (
                <SheetClose key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>

            <SheetFooter className="mt-8 gap-3">
              <SheetClose>
                <Button variant="outline" className="w-full">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </SheetClose>

              <SheetClose>
                <Button className="w-full">
                  <Link href="/auth/sign-up">
                    Get Started
                    <RiArrowRightLine className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
