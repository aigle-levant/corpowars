import {
  UserCircle,
  Cards,
  ChatsCircle,
  Sword,
  Gear,
} from "@phosphor-icons/react";

export const navItems = [
  {
    label: "Profile",
    href: "/protected",
    icon: UserCircle,
  },
  {
    label: "Teambuilder",
    href: "/protected/build-team",
    icon: Cards,
  },
  {
    label: "Chat Room",
    href: "/protected/chat",
    icon: ChatsCircle,
  },
  {
    label: "Battles",
    href: "/protected/battle",
    icon: Sword,
  },
  {
    label: "Settings",
    href: "/protected/settings",
    icon: Gear,
  },
];
