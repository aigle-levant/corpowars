"use client";

import { useBuilder } from "@/hooks/teambuilder/use-builder";
import { useCompanies } from "@/hooks/teambuilder/use-companies";
import { useItems } from "@/hooks/teambuilder/use-items";

import { filterAvailableCompanies } from "@/utils/filter-available-companies";

import { TeamSidebar } from "@/components/teambuilder/team-sidebar";
import { CompanyPicker } from "@/components/teambuilder/company-picker";
import { ItemPicker } from "@/components/teambuilder/item-picker";
import { Review } from "@/components/teambuilder/review-team";

export default function TeamBuilderPage() {
  const builder = useBuilder();

  const {
    data: companies = [],
    isLoading: companiesLoading,
    error: companiesError,
  } = useCompanies();

  const {
    data: items = [],
    isLoading: itemsLoading,
    error: itemsError,
  } = useItems();

  if (companiesLoading || itemsLoading) {
    return <div>Loading...</div>;
  }

  if (companiesError || itemsError) {
    return <div>Failed to load data.</div>;
  }

  const availableCompanies = filterAvailableCompanies(companies, builder.team);

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
      <TeamSidebar
        team={builder.team}
        selectedSlot={builder.selectedSlot}
        onSelectSlot={builder.selectSlot}
        onClearSlot={builder.clearSlot}
        onReorder={builder.reorder}
      />

      {builder.step === "company" && (
        <CompanyPicker
          companies={availableCompanies}
          onSelect={builder.selectCompany}
        />
      )}

      {builder.step === "items" && (
        <ItemPicker items={items} onSelect={builder.selectItem} />
      )}

      {builder.step === "review" && <Review team={builder.team} />}
    </div>
  );
}
