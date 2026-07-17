import { api } from "@/lib/api";
import type { Item } from "@/types/item-types";

export function getItems() {
  return api<Item[]>("/items");
}