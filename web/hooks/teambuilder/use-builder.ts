"use client";

import { useState } from "react";

import type { BuilderMode, BuilderStep } from "@/types/builder-types";
import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";

import { createEmptyTeam } from "@/utils/create-empty-team";
import { findNextEmptySlot } from "@/utils/find-next-empty-slot";
import { getSelectedCompanyIds } from "@/utils/get-selected-companies-ids";
import { moveTeamSlot } from "@/utils/move-team-slot";
import { removeTeamSlot } from "@/utils/remove-team-slot";
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
        item: null,
      }),
    );

    setStep("items");
  }

  function selectItem(item: Item) {
    const updated = updateTeamSlot(team, selectedSlot, { item });

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

  function clearSlot(slot: number) {
    const updated = removeTeamSlot(team, slot);

    setTeam(updated);

    const nextSlot = findNextEmptySlot(updated);

    setSelectedSlot(nextSlot === -1 ? updated.length - 1 : nextSlot);

    setMode("building");
    setStep("company");
  }

  function reorder(from: number, to: number) {
    if (from === to) return;

    setTeam((prev) => moveTeamSlot(prev, from, to));

    setSelectedSlot((prev) => {
      if (prev === from) return to;

      if (from < prev && to >= prev) {
        return prev - 1;
      }

      if (from > prev && to <= prev) {
        return prev + 1;
      }

      return prev;
    });
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

    // derived
    selectedCompanyIds: getSelectedCompanyIds(team),

    // actions
    selectSlot,
    selectCompany,
    selectItem,
    clearSlot,
    reorder,
    reset,
  };
}
