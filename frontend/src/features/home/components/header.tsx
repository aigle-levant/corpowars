
import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/common/components/ui/navigation-menu";

import { Button } from "@/common/components/ui/button";

const NAV_ITEMS = [
  {
    label: "Companies",
    href: "/companies",
  },
  {
    label: "Battle",
    href: "/battle",
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
  },
];

export default function Navbar() {
  // TODO: Replace with your auth state
  const isAuthenticated = false;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold tracking-tight"
        >
          Corpowars
        </NavLink>

        {/* Center Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<NavLink to={item.href} />}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Button variant="ghost">Profile</Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <NavLink to="/login">Login</NavLink>
              </Button>

              <Button asChild>
                <NavLink to="/signup">Sign Up</NavLink>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}