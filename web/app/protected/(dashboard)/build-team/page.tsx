"use client";

import { useEffect, useState } from "react";

import { api } from "@/lib/api";
import { TEAM_SIZE } from "@/constants/config";

import type { Company } from "@/types/company-types";
import type { Item } from "@/types/item-types";
import type { TeamSlot } from "@/types/team-types";

import { TeamSidebar } from "@/components/teambuilder/team-sidebar";
import { CompanyPicker } from "@/components/teambuilder/company-picker";
import { ItemPicker } from "@/components/teambuilder/item-picker";
import { Review } from "@/components/teambuilder/review-team";

const initialTeam: TeamSlot[] = Array.from({ length: TEAM_SIZE }, () => ({
  company: null,
  item: null,
}));

type BuilderStep = "company" | "items" | "review";

export default function TeamBuilderPage() {
  const [team, setTeam] = useState<TeamSlot[]>(initialTeam);

  const [companies, setCompanies] = useState<Company[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const [loading, setLoading] = useState(true);

  const [currentSlot, setCurrentSlot] = useState(0);

  const [step, setStep] = useState<BuilderStep>("company");

  useEffect(() => {
    async function load() {
      try {
        const [companies, items] = await Promise.all([
          api<Company[]>("/companies"),
          api<Item[]>("/items"),
        ]);

        setCompanies(companies);
        setItems(items);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function handleCompanySelect(company: Company) {
    setTeam((prev) => {
      const next = [...prev];

      next[currentSlot] = {
        ...next[currentSlot],
        company,
      };

      return next;
    });

    setStep("items");
  }

  function handleItemSelect(item: Item) {
    setTeam((prev) => {
      const next = [...prev];

      next[currentSlot] = {
        ...next[currentSlot],
        item,
      };

      return next;
    });

    if (currentSlot === TEAM_SIZE - 1) {
      setStep("review");
    } else {
      setCurrentSlot((slot) => slot + 1);
      setStep("company");
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <TeamSidebar team={team} currentSlot={currentSlot} />

      {step === "company" && (
        <CompanyPicker
          companies={companies.filter(
            (company) => !team.some((slot) => slot.company?.id === company.id),
          )}
          onSelect={handleCompanySelect}
        />
      )}

      {step === "items" && (
        <ItemPicker items={items} onSelect={handleItemSelect} />
      )}

      {step === "review" && <Review team={team} />}
    </div>
  );
}
