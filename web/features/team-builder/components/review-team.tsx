import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { ReviewProps } from "../types/props";

export function Review({ team }: ReviewProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Review Team</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {team.map((slot, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-md border p-4"
          >
            <div>
              <p className="font-semibold">
                {slot.company?.name ?? `Company ${index + 1}`}
              </p>

              <p className="text-sm text-muted-foreground">
                {slot.item?.name ?? "No item"}
              </p>
            </div>
          </div>
        ))}

        <Button className="w-full">Save Team</Button>
      </CardContent>
    </Card>
  );
}
