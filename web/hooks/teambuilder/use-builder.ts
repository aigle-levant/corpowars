"use client";

import { useState } from "react";

import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";
import type { BuilderMode, BuilderStep } from "@/types/builder-types";

import { createEmptyTeam } from "@/utils/create-empty-team";
import { findNextEmptySlot } from "@/utils/find-next-empty-slot";
import { getSelectedCompanyIds } from "@/utils/get-selected-companies-ids";
import { updateTeamSlot } from "@/utils/update-team-slot";

export function useBuilder() {
  const [team, setTeam] = useState(createEmptyTeam);

  const [selectedSlot, setSelectedSlot] = useState(0);

  const [step, setStep] = useState<BuilderStep>("company");

  const [mode, setMode] = useState<BuilderMode>("building");

  function selectSlot(slot: number) {
    setSelectedSlot(slot);
    setMode("editing");
    setStep("company");
  }

  function selectCompany(company: Company) {
    setTeam((prev) =>
      updateTeamSlot(prev, selectedSlot, {
        company,
      }),
    );

    setStep("items");
  }

  function selectItem(item: Item) {
    const updated = updateTeamSlot(team, selectedSlot, {
      item,
    });

    setTeam(updated);

    if (mode === "editing") {
      setMode("building");
      setStep("review");
      return;
    }

    const nextSlot = findNextEmptySlot(updated);

    if (nextSlot === -1) {
      setStep("review");
      return;
    }

    setSelectedSlot(nextSlot);
    setStep("company");
  }

  function reset() {
    setTeam(createEmptyTeam());
    setSelectedSlot(0);
    setStep("company");
    setMode("building");
  }

  return {
    // state
    team,
    selectedSlot,
    step,
    mode,

    // derived state
    selectedCompanyIds: getSelectedCompanyIds(team),

    // actions
    selectSlot,
    selectCompany,
    selectItem,
    reset,
    setStep,
    setMode,
  };
}
