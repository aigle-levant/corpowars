"use client";

import { Plus } from "@phosphor-icons/react";

import { TEAM_SIZE } from "@/constants/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TeamSlot } from "@/types/team-types";

interface Props {
  team: TeamSlot[];
  currentSlot: number;
}

export function TeamSidebar({ team, currentSlot }: Props) {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-display">
          Current Team ({team.filter((x) => x.company).length}/{TEAM_SIZE})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {team.map((slot, index) => (
          <Button
            key={index}
            variant={currentSlot === index ? "default" : "outline"}
            className="h-16 w-full justify-start gap-4"
          >
            <Plus />

            <div className="flex flex-col items-start">
              <span>{slot.company?.name ?? `Company ${index + 1}`}</span>

              <span className="text-xs text-muted-foreground">
                {slot.item?.name ?? "No Item"}
              </span>
            </div>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
