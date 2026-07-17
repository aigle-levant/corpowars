
// icon
import { EmptyStateIcon } from "../utils/empty-state-icon-function";

// shadcn components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// types
import type { EmptyTeamStateProps } from "../types/props";

// const
import { COPY } from "../constants/const";

export function EmptyTeamState({
  onCreateTeam,
  onLoadTeam,
  hasSavedTeams = false,
}: EmptyTeamStateProps) {
  const canLoadTeam = hasSavedTeams;

  return (
    <Card className="mx-auto mt-16 max-w-2xl">
      <CardContent className="flex flex-col items-center py-20 text-center">
        <EmptyStateIcon />

        <h1 className="font-display text-3xl font-bold">{COPY.title}</h1>

        <p className="mt-3 max-w-md text-muted-foreground">
          {COPY.description}
        </p>

        <div className="mt-10 flex gap-4">
          <Button onClick={onCreateTeam}>Create Team</Button>

          <Button
            variant="outline"
            disabled={!canLoadTeam}
            onClick={onLoadTeam}
          >
            Load Team
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
