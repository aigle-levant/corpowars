"use client";

import { useEffect, useMemo, useReducer } from "react";

import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";

import type { TeamBuilderState } from "../types/teams";

import { EMPTY_TEAM } from "../constants/const";

import { teamBuilderReducer } from "../services/reducer";


export function useTeamBuilder(initialTeam?: TeamBuilderState) {
  const [team, dispatch] = useReducer(
    teamBuilderReducer,
    initialTeam ?? EMPTY_TEAM,
  );

  const [selectedSlot, setSelectedSlot] = useReducer(
    (_: number | null, value: number | null) => value,
    null,
  );

  useEffect(() => {
    if (!initialTeam) return;

    dispatch({
      type: "SET_TEAM",
      payload: initialTeam,
    });

    setSelectedSlot(null);
  }, [initialTeam]);

  const currentSlot = useMemo(() => {
    if (selectedSlot === null) return null;

    return team.slots[selectedSlot];
  }, [team, selectedSlot]);

  function selectSlot(index: number) {
    setSelectedSlot(index);
  }

  function updateTeamName(name: string) {
    dispatch({
      type: "UPDATE_NAME",
      payload: name,
    });
  }

  function updateCompany(company: Company) {
    if (selectedSlot === null) return;

    dispatch({
      type: "UPDATE_COMPANY",
      payload: {
        index: selectedSlot,
        company,
      },
    });
  }

  function updateItem(item: Item) {
    if (selectedSlot === null) return;

    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        index: selectedSlot,
        item,
      },
    });
  }

  function clearSlot(index: number) {
    dispatch({
      type: "CLEAR_SLOT",
      payload: index,
    });

    if (selectedSlot === index) {
      setSelectedSlot(null);
    }
  }

  function reset() {
    dispatch({
      type: "RESET",
      payload: initialTeam ?? EMPTY_TEAM,
    });

    setSelectedSlot(null);
  }

  return {
    team,
    selectedSlot,
    currentSlot,

    actions: {
      selectSlot,
      updateTeamName,
      updateCompany,
      updateItem,
      clearSlot,
      reset,
    },
  };
}
