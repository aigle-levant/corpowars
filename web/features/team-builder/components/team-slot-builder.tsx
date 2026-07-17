import { DraggableTeamSlot } from "./team-slot";

import type { TeamSlotsProps } from "../types/props";

export function TeamSlots({
  slots,
  selectedSlot,
  editable = true,
  onSelectSlot,
  onClearSlot,
}: TeamSlotsProps) {
  return (
    <div className="space-y-3">
      {slots.map((slot, index) => (
        <DraggableTeamSlot
          key={index}
          index={index}
          slot={slot}
          selected={selectedSlot === index}
          editable={editable}
          onSelect={() => onSelectSlot(index)}
          onClear={() => onClearSlot(index)}
        />
      ))}
    </div>
  );
}
