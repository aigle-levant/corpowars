import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { CompanyPicker } from "./company-picker";
import { ItemPicker } from "./item-picker";

import type { CompanyEditorProps } from "../types/props";

export function CompanyEditor({
  slot,
  companies,
  items,
  onSelectCompany,
  onSelectItem,
}: CompanyEditorProps) {
  if (!slot) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-display">Team Slot Editor</CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Select a slot to begin editing.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Team Slot Editor</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <section className="space-y-2">
          <h3 className="font-semibold">Company</h3>

          <p className="text-sm text-muted-foreground">
            {slot.company?.name ?? "No company selected"}
          </p>

          <CompanyPicker companies={companies} onSelect={onSelectCompany} />
        </section>

        <section className="space-y-2">
          <h3 className="font-semibold">Item</h3>

          <p className="text-sm text-muted-foreground">
            {slot.item?.name ?? "No item selected"}
          </p>

          <ItemPicker items={items} onSelect={onSelectItem} />
        </section>
      </CardContent>
    </Card>
  );
}
