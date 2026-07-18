"use client";

import { TeamNameInput } from "../components/team-name";
import { TeamSlots } from "../components/team-slot-builder";
import { CompanyEditor } from "../components/company-editor";
import { Review } from "../components/review-team";

import { Button } from "@/components/ui/button";

import { useCompanies } from "../hooks/use-companies";
import { useItems } from "../hooks/use-items";
import { useCreateTeam } from "../hooks/use-create-team";
import { useTeamBuilder } from "../hooks/use-team-builder";

interface TeamBuilderProps {
  onSave(): void;
  onCancel(): void;
}

export function TeamBuilder({ onSave, onCancel }: TeamBuilderProps) {
  const { data: companies = [], isLoading: companiesLoading } = useCompanies();
  const { data: items = [], isLoading: itemsLoading } = useItems();

  const { team, currentSlot, selectedSlot, actions } = useTeamBuilder();

  const createTeam = useCreateTeam();

  async function handleSave() {
    await createTeam.mutateAsync({
      name: team.name,
      members: team.slots
        .filter((slot) => slot.company)
        .map((slot, index) => ({
          position: index + 1,
          companyId: slot.company!.id,
          itemId: slot.item?.id ?? null,
        })),
    });
    onSave();
  }

  if (companiesLoading || itemsLoading) {
    return <div className="flex justify-center py-20">Loading...</div>;
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[360px_1fr]">
      <aside className="space-y-6">
        <TeamNameInput value={team.name} onChange={actions.updateTeamName} />

        <TeamSlots
          slots={team.slots}
          selectedSlot={selectedSlot}
          onSelectSlot={actions.selectSlot}
          onClearSlot={actions.clearSlot}
        />
      </aside>

      <main className="space-y-6">
        <CompanyEditor
          slot={currentSlot}
          companies={companies}
          items={items}
          onSelectCompany={actions.updateCompany}
          onSelectItem={actions.updateItem}
        />

        <Review team={team.slots} />

        <div className="flex gap-3">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>

          <Button
            className="flex-1"
            disabled={createTeam.isPending}
            onClick={handleSave}
          >
            {createTeam.isPending ? "Creating..." : "Create Team"}
          </Button>
        </div>
      </main>
    </section>
  );
}
