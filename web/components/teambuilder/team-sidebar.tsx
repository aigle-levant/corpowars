"use client";

import {
  PencilSimple,
  Plus,
  X,
} from "@phosphor-icons/react";

import { TEAM_SIZE } from "@/constants/config";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import type { TeamSlot } from "@/types/team-types";

interface Props {
  team: TeamSlot[];
  selectedSlot: number;

  onSelectSlot: (slot: number) => void;
  onClearSlot: (slot: number) => void;
}

export function TeamSidebar({
  team,
  selectedSlot,
  onSelectSlot,
  onClearSlot,
}: Props) {
  const filledSlots = team.filter(
    (slot) => slot.company,
  ).length;

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-display">
          Current Team ({filledSlots}/{TEAM_SIZE})
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {team.map((slot, index) => {
          const isSelected =
            selectedSlot === index;

          const isEditable =
            slot.company !== null ||
            index === filledSlots;

          return (
            <Button
              key={index}
              variant={
                isSelected
                  ? "default"
                  : "outline"
              }
              className="group relative h-16 w-full justify-start gap-4"
              disabled={!isEditable}
              onClick={() =>
                onSelectSlot(index)
              }
            >
              {slot.company && (
                <button
                  type="button"
                  className="absolute right-2 top-2 rounded p-1 opacity-0 transition group-hover:opacity-100 hover:bg-destructive/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClearSlot(index);
                  }}
                >
                  <X
                    size={12}
                    weight="bold"
                  />
                </button>
              )}

              {slot.company ? (
                <PencilSimple
                  weight="duotone"
                />
              ) : (
                <Plus weight="bold" />
              )}

              <div className="flex flex-col items-start text-left">
                <span className="font-medium">
                  {slot.company?.name ??
                    `Company ${index + 1}`}
                </span>

                <span className="text-xs text-muted-foreground">
                  {slot.item?.name ??
                    (slot.company
                      ? "Choose Item"
                      : "Empty Slot")}
                </span>
              </div>
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
}