import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { TeamNameInputProps } from "../types/props";

export function TeamNameInput({
  value,
  onChange,
  disabled = false,
}: TeamNameInputProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="team-name">Team Name</Label>

      <Input
        id="team-name"
        value={value}
        disabled={disabled}
        placeholder="Enter a team name..."
        maxLength={30}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}