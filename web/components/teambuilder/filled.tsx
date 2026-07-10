"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus } from "@phosphor-icons/react";

import { api } from "@/lib/api";
import { TEAM_SIZE } from "@/constants/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Company {
  id: string;
  name: string;
  ticker: string;
  description: string;
  sector: string;
  passive: string;
  tags: string[];
}

const team = Array.from({ length: TEAM_SIZE }, () => null);

export default function BuilderState() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCompanies() {
      try {
        const data = await api<Company[]>("/companies");
        setCompanies(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadCompanies();
  }, []);

  const filteredCompanies = useMemo(() => {
    const q = search.toLowerCase();

    return companies.filter(
      (company) =>
        company.name.toLowerCase().includes(q) ||
        company.ticker.toLowerCase().includes(q) ||
        company.sector.toLowerCase().includes(q),
    );
  }, [companies, search]);

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Current Team */}
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="font-display">Current Team</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {team.map((company, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-16 w-full justify-start gap-4"
            >
              <Plus weight="bold" />

              <div className="flex flex-col items-start">
                <span>{company ?? `Company ${index + 1}`}</span>

                <span className="text-xs text-muted-foreground">
                  {company ? "Selected" : "Empty Slot"}
                </span>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Company Database */}
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Company Database</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies..."
            className="w-full rounded-md border bg-background px-4 py-2"
          />

          {loading ? (
            <p className="text-muted-foreground">Loading companies...</p>
          ) : (
            <div className="max-h-[500px] space-y-2 overflow-y-auto">
              {filteredCompanies.map((company) => (
                <Button
                  key={company.id}
                  variant="outline"
                  className="h-auto w-full justify-between p-4"
                >
                  <div className="text-left">
                    <p className="font-display text-lg">{company.name}</p>

                    <p className="text-s text-muted-foreground">
                      {company.ticker} • {company.sector}
                    </p>

                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                      {company.description}
                    </p>
                  </div>

                  <Plus size={20} />
                </Button>
              ))}

              {!filteredCompanies.length && (
                <p className="py-6 text-center text-muted-foreground">
                  No companies found.
                </p>
              )}
            </div>
          )}

          <div className="flex justify-end">
            <Button>Finalize Team</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
