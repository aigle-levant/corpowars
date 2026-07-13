"use client";

import {
  DndContext,
  PointerSensor,
  type DragEndEvent,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { TEAM_SIZE } from "@/constants/config";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DraggableTeamSlot } from "./draggable-team-slot";

import type { TeamSlot } from "@/types/team-types";

interface Props {
  team: TeamSlot[];

  selectedSlot: number;

  onSelectSlot: (slot: number) => void;

  onClearSlot: (slot: number) => void;

  onReorder: (from: number, to: number) => void;
}

export function TeamSidebar({
  team,
  selectedSlot,
  onSelectSlot,
  onClearSlot,
  onReorder,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const filledSlots = team.filter((slot) => slot.company).length;

  function handleDragEnd({ active, over }: DragEndEvent) {
    if (!over || active.id === over.id) {
      return;
    }

    onReorder(Number(active.id), Number(over.id));
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="font-display">
          Current Team ({filledSlots}/{TEAM_SIZE})
        </CardTitle>
      </CardHeader>

      <CardContent>
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext
            items={team.map((_, index) => index)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {team.map((slot, index) => (
                <DraggableTeamSlot
                  key={index}
                  index={index}
                  slot={slot}
                  selected={selectedSlot === index}
                  editable={slot.company !== null || index === filledSlots}
                  onSelect={() => onSelectSlot(index)}
                  onClear={() => onClearSlot(index)}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </CardContent>
    </Card>
  );
}
