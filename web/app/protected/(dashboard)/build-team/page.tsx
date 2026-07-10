"use client";

import { Plus } from "@phosphor-icons/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TEAM_SIZE } from "@/constants/config";

const team = Array.from({ length: TEAM_SIZE }, () => null);

export default function TeamBuilderPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      {/* Left Panel */}
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="font-display">
            Current Team ({TEAM_SIZE}/{TEAM_SIZE})
          </CardTitle>
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
                <span className="font-body font-medium">
                  {company ?? `Company ${index + 1}`}
                </span>

                <span className="text-xs text-muted-foreground">
                  {company ? "Selected" : "Empty Slot"}
                </span>
              </div>
            </Button>
          ))}
        </CardContent>
      </Card>

      {/* Right Panel */}
      <Card className="min-h-[500px]">
        <CardHeader>
          <CardTitle className="font-display">Company Database</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <input
            placeholder="Search companies..."
            className="w-full rounded-md border bg-background px-4 py-2"
          />

          <div className="flex h-[420px] items-center justify-center rounded-lg border border-dashed text-muted-foreground">
            Select a company to view its details.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
