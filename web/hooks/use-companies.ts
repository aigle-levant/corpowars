"use client";

import { useEffect, useState } from "react";

import { api } from "@/lib/api";
import type { Company } from "@/types/company-types";

export function useCompanies() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await api<Company[]>("/companies");
        setCompanies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return {
    companies,
    loading,
    error,
  };
}
