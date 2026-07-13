"use client";

import { PencilSimple, Plus, X, DotsSixVertical } from "@phosphor-icons/react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Button } from "@/components/ui/button";

import type { TeamSlot } from "@/types/team-types";

interface Props {
  index: number;

  slot: TeamSlot;

  selected: boolean;

  editable: boolean;

  onSelect(): void;

  onClear(): void;
}

export function DraggableTeamSlot({
  index,
  slot,
  selected,
  editable,
  onSelect,
  onClear,
}: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: index,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Button
      ref={setNodeRef}
      style={style}
      variant={selected ? "default" : "outline"}
      className="group relative h-16 w-full justify-start gap-4"
      disabled={!editable}
      onClick={onSelect}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      >
        <DotsSixVertical />
      </div>

      {slot.company ? (
        <PencilSimple weight="duotone" />
      ) : (
        <Plus weight="bold" />
      )}

      <div className="flex flex-col items-start">
        <span>{slot.company?.name ?? `Company ${index + 1}`}</span>

        <span className="text-xs text-muted-foreground">
          {slot.item?.name ?? (slot.company ? "Choose Item" : "Empty Slot")}
        </span>
      </div>

      {slot.company && (
        <button
          type="button"
          className="absolute right-2 top-2 rounded p-1 opacity-0 transition group-hover:opacity-100 hover:bg-destructive/10"
          onClick={(e) => {
            e.stopPropagation();
            onClear();
          }}
        >
          <X size={12} />
        </button>
      )}
    </Button>
  );
}
