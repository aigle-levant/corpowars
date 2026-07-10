"use client";

import { Item } from "@/types/item-types";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  items: Item[];
  onSelect(item: Item): void;
}

export function ItemPicker({ items, onSelect }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-display">Choose Item</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {items.map((item) => (
          <Button
            key={item.id}
            variant="outline"
            className="h-auto w-full justify-between p-4"
            onClick={() => onSelect(item)}
          >
            <div className="text-left">
              <p className="font-semibold">{item.name}</p>

              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>

            <span>{item.category}</span>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
