import { MoonStarsIcon, SunHorizonIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <SunHorizonIcon size={20} weight="duotone" />
      ) : (
        <MoonStarsIcon size={20} weight="duotone" />
      )}
    </Button>
  );
}
