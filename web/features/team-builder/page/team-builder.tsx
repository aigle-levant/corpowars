"use client";

import { useState } from "react";

import { EmptyTeamState } from "../components/blank-state";
import { TeamBuilder } from "./team-builder-page";

export default function TeamBuilderPage() {
  const [isCreating, setIsCreating] = useState(false);

  function openBuilder() {
    setIsCreating(true);
  }

  function closeBuilder() {
    setIsCreating(false);
  }

  if (!isCreating) {
    return (
      <EmptyTeamState
        hasSavedTeams={false}
        onCreateTeam={openBuilder}
        onLoadTeam={() => {}}
      />
    );
  }

  return <TeamBuilder onSave={closeBuilder} onCancel={closeBuilder} />;
}
