"use client";

import { useEffect, useState } from "react";
import { createClient } from '@/lib/client'
import { api } from "@/lib/api";
import { ProfileCard, type PlayerProfile } from "./profile-card";
import { CurrentTeam } from "./current-team";

export default function ProfilePage() {
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadProfile() {
    try {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) throw error;

      setProfile(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  loadProfile();
}, []);

  if (loading) {
    return (
      <main className="container mx-auto max-w-4xl py-10">Loading...</main>
    );
  }

  if (!profile) {
    return (
      <main className="container mx-auto max-w-4xl py-10">
        Failed to load profile.
      </main>
    );
  }

  return (
    <main className="container mx-auto max-w-4xl space-y-8 py-10">
      <ProfileCard profile={profile} />

      <CurrentTeam
        companies={[
          {
            id: "envida",
            name: "Envida",
            ticker: "ENVA",
          },
          {
            id: "pear",
            name: "Pear",
            ticker: "PEAR",
          },
          {
            id: "sigma",
            name: "Sigma",
            ticker: "SIGM",
          },
          {
            id: "tabx",
            name: "TabX",
            ticker: "TABX",
          },
          {
            id: "daintree",
            name: "Daintree",
            ticker: "DNTR",
          },
          {
            id: "ringring",
            name: "RingRing",
            ticker: "RING",
          },
        ]}
      />
    </main>
  );
}
