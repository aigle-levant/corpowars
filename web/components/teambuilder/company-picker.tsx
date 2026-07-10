"use client";

import { Company } from "@/types/company-types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  companies: Company[];
  onSelect(company: Company): void;
}

export function CompanyPicker({ companies, onSelect }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Choose Company</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {companies.map((company) => (
          <Button
            key={company.id}
            variant="outline"
            className="h-auto w-full justify-between p-4"
            onClick={() => onSelect(company)}
          >
            <div className="text-left">
              <p className="font-semibold">{company.name}</p>

              <p className="text-sm text-muted-foreground">{company.ticker}</p>
            </div>

            <span>{company.sector}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
