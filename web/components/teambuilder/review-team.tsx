"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TeamSlot } from "@/types/team-types";

interface Props {
  team: TeamSlot[];
}

export function Review({ team }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Review Team</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {team.map((slot, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md border p-4"
          >
            <div>
              <p className="font-semibold">{slot.company?.name}</p>

              <p className="text-sm text-muted-foreground">{slot.item?.name}</p>
            </div>
          </div>
        ))}

        <Button className="w-full">Save Team</Button>
      </CardContent>
    </Card>
  );
}
