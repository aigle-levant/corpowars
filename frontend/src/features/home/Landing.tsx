import HeaderBlock from "@/components/header-block";
import FooterBlock from "@/components/footer-block";
import DitherShaderBackground from "@/components/dither-shader-bg";
import { TrendingUp } from "lucide-react";
import { AllTimeChart } from "./AllTimeChart";

export default function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderBlock />

      <main className="relative isolate overflow-hidden border-t border-[#22C55E]">
        {/* Background */}
        <div className="absolute inset-0 -z-30">
          <DitherShaderBackground />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 -z-20 bg-[#050806]/75" />

        {/* Vignette */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,transparent_0%,rgba(5,8,6,0.15)_35%,rgba(5,8,6,0.85)_100%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
          {/* Left */}
          <section>
            <h1 className="logo-text text-6xl leading-[0.92] sm:text-7xl md:text-8xl">
              <span className="text-[#22C55E] drop-shadow-[0_0_18px_rgba(34,197,94,0.35)]">
                corpo
              </span>

              <br />

              <span className="text-[#FBBF24] drop-shadow-[0_0_18px_rgba(251,191,36,0.3)]">
                WARS
              </span>
            </h1>

            <div className="mt-8 border-l-4 border-[#22C55E] pl-5">
              <p className="pixel-text text-lg text-[#22C55E]">LINE GOES UP.</p>

              <p className="pixel-text mt-1 text-lg text-[#5E8E6C]">
                EVERYTHING ELSE IS SECONDARY.
              </p>
            </div>

            <p className="font-body mt-8 max-w-lg text-base leading-8 text-neutral-300">
              Build your corporation. Wage hostile takeovers. Sabotage your
              competitors. Manipulate markets. Outgrow every rival in a
              real-time multiplayer strategy game where corporations are your
              weapons and profit is the only objective.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#play"
                className="font-body rounded-none border border-[#22C55E] bg-[#22C55E] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-[0_0_18px_rgba(34,197,94,0.25)] transition-all hover:bg-[#1CA84E]"
              >
                Play Now
              </a>

              <a
                href="#rules"
                className="font-body rounded-none border border-white/15 bg-black/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.2em] text-neutral-200 backdrop-blur-sm transition-all hover:border-[#22C55E] hover:text-[#22C55E]"
              >
                Read Rules
              </a>
            </div>
          </section>

          {/* Right */}
          <section className="border-2 border-[#FBBF24]/70 bg-[#0B0F0C]/80 p-6 shadow-[0_0_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp
                  size={16}
                  className="text-[#22C55E]"
                  aria-hidden="true"
                />

                <span className="ticker text-xs text-[#22C55E]">YOUR CORP</span>
              </div>

              <span className="ticker text-xs text-[#69746D]">▲ ALL TIME</span>
            </div>

            <div className="mt-5">
              <AllTimeChart />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-body text-xs uppercase tracking-widest text-[#69746D]">
                Founded
              </span>

              <span className="ticker text-xs text-[#22C55E]">NOW</span>
            </div>
          </section>
        </div>
      </main>

      <FooterBlock />
    </div>
  );
}
