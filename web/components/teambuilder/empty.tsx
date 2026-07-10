"use client";

import { Cards } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { TEAM_SIZE } from "@/constants/config";

interface EmptyStateProps {
  onCreate: () => void;
}

export default function EmptyState({ onCreate }: EmptyStateProps) {
  return (
    <div className="flex h-[calc(100vh-8rem)] items-center justify-center">
      <div className="flex max-w-lg flex-col items-center text-center">
        <Cards size={72} weight="duotone" className="text-muted-foreground" />

        <h1 className="font-display mt-6 text-3xl">No Team Found</h1>

        <p className="font-body mt-3 text-muted-foreground">
          Create your first corporate team by selecting up to {TEAM_SIZE}{" "}
          companies.
        </p>

        <div className="mt-8 flex gap-3">
          <Button onClick={onCreate}>Create Team</Button>

          <Button variant="outline">Import Team</Button>
        </div>
      </div>
    </div>
  );
}
