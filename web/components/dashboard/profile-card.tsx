"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface PlayerProfile {
  id: string;
  username: string;
  email: string;
  rating: number;
  wins: number;
  losses: number;
  avatarUrl?: string;
}

interface ProfileCardProps {
  profile: PlayerProfile;
}

function getRank(rating: number) {
  if (rating >= 3000) {
    return {
      title: "Legendary CEO",
      color: "text-red-500",
    };
  }

  if (rating >= 2400) {
    return {
      title: "Corporate Master",
      color: "text-orange-500",
    };
  }

  if (rating >= 1800) {
    return {
      title: "Senior Manager",
      color: "text-violet-500",
    };
  }

  if (rating >= 1400) {
    return {
      title: "Manager",
      color: "text-blue-500",
    };
  }

  return {
    title: "Intern",
    color: "text-muted-foreground",
  };
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const rank = getRank(profile.rating);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          {/* Left */}
          <div>
            <p className={`font-display text-2xl ${rank.color}`}>
              {rank.title}
            </p>

            <h1 className="font-display mt-2 text-5xl tracking-tight">
              {profile.username}
            </h1>

            <p className="font-body mt-2 text-muted-foreground">
              {profile.email}
            </p>

            <div className="mt-10 space-y-7 font-body">
              <div className="flex items-center gap-4">
                <div>
                  <span className="text-muted-foreground">Rating:</span>{" "}
                  <span className="font-body">{profile.rating}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="text-muted-foreground">Wins:</span>{" "}
                  <span className="font-body">{profile.wins}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <span className="text-muted-foreground">Losses:</span>{" "}
                  <span className="font-body">{profile.losses}</span>
                </div>
              </div>
            </div>

            <Button
              variant="link"
              className="font-body mt-10 px-0 font-body text-base"
            >
              Edit Profile
            </Button>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="overflow-hidden rounded-md border bg-muted">
              <Image
                src={profile.avatarUrl ?? "/default-avatar.png"}
                alt={profile.username}
                width={320}
                height={320}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
