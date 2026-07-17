import { api } from "@/lib/api";
import type { Company } from "@/types/company-types";

export function getCompanies() {
  return api<Company[]>("/companies");
}
