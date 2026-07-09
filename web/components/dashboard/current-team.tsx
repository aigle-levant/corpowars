"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface TeamCompany {
  id: string;
  name: string;
  ticker: string;
}

interface CurrentTeamProps {
  companies: TeamCompany[];
}

export function CurrentTeam({ companies }: CurrentTeamProps) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Current Team</CardTitle>

        <Button variant="outline">Team Builder</Button>
      </CardHeader>

      <CardContent>
        {companies.length === 0 ? (
          <p className="text-muted-foreground text-center py-6">
            No companies selected.
          </p>
        ) : (
          <div className="space-y-3">
            {companies.map((company, index) => (
              <div
                key={company.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div>
                  <p className="font-semibold">
                    {index + 1}. {company.name}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {company.ticker}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
