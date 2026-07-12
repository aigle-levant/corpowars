"use client";

import { PencilSimple, Plus } from "@phosphor-icons/react";

import { TEAM_SIZE } from "@/constants/config";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { TeamSlot } from "@/types/team-types";

interface Props {
  team: TeamSlot[];
  selectedSlot: number;
  onSelectSlot: (slot: number) => void;
}

export function TeamSidebar({ team, selectedSlot, onSelectSlot }: Props) {
  const filledSlots = team.filter((slot) => slot.company).length;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-display">
          Current Team ({filledSlots}/{TEAM_SIZE})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {team.map((slot, index) => {
          const isSelected = selectedSlot === index;

          // Allow editing completed slots and the next empty slot.
          const isEditable = slot.company !== null || index === filledSlots;

          return (
            <Button
              key={index}
              variant={isSelected ? "default" : "outline"}
              className="h-16 w-full justify-start gap-4"
              disabled={!isEditable}
              onClick={() => onSelectSlot(index)}
            >
              {slot.company ? (
                <PencilSimple weight="duotone" />
              ) : (
                <Plus weight="bold" />
              )}

              <div className="flex flex-col items-start text-left">
                <span className="font-medium">
                  {slot.company?.name ?? `Company ${index + 1}`}
                </span>

                <span className="text-xs text-muted-foreground">
                  {slot.item?.name ??
                    (slot.company ? "Choose an item" : "Empty Slot")}
                </span>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}
