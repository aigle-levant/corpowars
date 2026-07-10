"use client";

import { useState } from "react";

import EmptyState from "@/components/teambuilder/empty";
import BuilderState from "@/components/teambuilder/filled";

export default function TeamBuilderPage() {
  // Later replace with:
  // const hasTeam = fetchedTeam !== null;
  const [hasTeam, setHasTeam] = useState(false);

  return hasTeam ? (
    <BuilderState />
  ) : (
    <EmptyState onCreate={() => setHasTeam(true)} />
  );
}
