"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface PlayerProfile {
  id: string;
  username: string;
  email: string;
  rating: number;
  wins: number;
  losses: number;
}

interface ProfileCardProps {
  profile: PlayerProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card className="mx-auto w-full max-w-2xl">
      <CardHeader className="items-center text-center">

        <CardTitle className="mt-4 text-2xl">{profile.username}</CardTitle>

        <p className="text-muted-foreground">{profile.email}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg border p-4 text-center">
            <p className="text-muted-foreground text-sm">Rating</p>
            <p className="text-2xl font-bold">{profile.rating}</p>
          </div>

          <div className="rounded-lg border p-4 text-center">
            <p className="text-muted-foreground text-sm">Wins</p>
            <p className="text-2xl font-bold">{profile.wins}</p>
          </div>

          <div className="rounded-lg border p-4 text-center">
            <p className="text-muted-foreground text-sm">Losses</p>
            <p className="text-2xl font-bold">{profile.losses}</p>
          </div>
        </div>

        <Button className="w-full">Edit Profile</Button>
      </CardContent>
    </Card>
  );
}
