"use client";

import {
  PencilSimpleIcon,
  PlusIcon,
  XIcon,
  DotsSixVerticalIcon,
} from "@phosphor-icons/react";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { Button } from "@/components/ui/button";
import { TeamSlotProps } from "../types/props";

export function DraggableTeamSlot({
  index,
  slot,
  selected,
  editable,
  onSelect,
  onClear,
}: TeamSlotProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
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
        <DotsSixVerticalIcon />
      </div>

      {slot.company ? (
        <PencilSimpleIcon weight="duotone" />
      ) : (
        <PlusIcon weight="bold" />
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
          <XIcon size={12} />
        </button>
      )}
    </Button>
  );
}
