"use client";

import { useState } from "react";

import type {
  BuilderMode,
  BuilderStep,
} from "@/types/builder-types";
import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";

import { createEmptyTeam } from "@/utils/create-empty-team";
import { findNextEmptySlot } from "@/utils/find-next-empty-slot";
import { getSelectedCompanyIds } from "@/utils/get-selected-companies-ids";
import { removeTeamSlot } from "@/utils/remove-team-slot";
import { updateTeamSlot } from "@/utils/update-team-slot";

export function useBuilder() {
  const [team, setTeam] =
    useState(createEmptyTeam);

  const [selectedSlot, setSelectedSlot] =
    useState(0);

  const [step, setStep] =
    useState<BuilderStep>("company");

  const [mode, setMode] =
    useState<BuilderMode>("building");

  function selectSlot(slot: number) {
    setSelectedSlot(slot);
    setMode("editing");
    setStep("company");
  }

  function selectCompany(company: Company) {
    setTeam((prev) =>
      updateTeamSlot(prev, selectedSlot, {
        company,
        item: null,
      }),
    );

    setStep("items");
  }

  function selectItem(item: Item) {
    const updated =
      updateTeamSlot(
        team,
        selectedSlot,
        {
          item,
        },
      );

    setTeam(updated);

    if (mode === "editing") {
      setMode("building");
      setStep("review");
      return;
    }

    const next =
      findNextEmptySlot(updated);

    if (next === -1) {
      setStep("review");
      return;
    }

    setSelectedSlot(next);
    setStep("company");
  }

  function clearSlot(slot: number) {
    const updated =
      removeTeamSlot(team, slot);

    setTeam(updated);

    const next =
      findNextEmptySlot(updated);

    setSelectedSlot(
      next === -1
        ? updated.length - 1
        : next,
    );

    setMode("building");
    setStep("company");
  }

  function reset() {
    setTeam(createEmptyTeam());

    setSelectedSlot(0);

    setStep("company");

    setMode("building");
  }

  return {
    team,

    selectedSlot,

    step,

    mode,

    selectedCompanyIds:
      getSelectedCompanyIds(team),

    selectSlot,

    selectCompany,

    selectItem,

    clearSlot,

    reset,
  };
}