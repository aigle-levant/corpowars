import DitherShaderBackground from "./dither";
import { TrendingUp } from "lucide-react";
import { AllTimeChart } from "./alltimechart";

export default function Landing() {
  return (
    <main className="relative isolate overflow-hidden border-t border-primary">
      {/* Background */}
      <div className="absolute inset-0 -z-30">
        <DitherShaderBackground />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-20 bg-[#050806]/75" />

      {/* Vignette */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,transparent_0%,rgba(5,8,6,0.15)_35%,rgba(5,8,6,0.85)_100%)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-20 px-6 py-16 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <section>
          <h1 className="font-display text-6xl leading-[0.9] uppercase sm:text-7xl md:text-8xl">
            <span className="font-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
              Corpo
            </span>

            <br />

            <span className="text-amber-400 drop-shadow-[0_0_20px_rgba(251,191,36,0.35)]">
              Wars
            </span>
          </h1>

          <div className="mt-8 border-l-4 border-primary pl-5">
            <p className="font-display text-lg uppercase tracking-wider text-primary">
              Line must go up.
            </p>

            <p className="font-display mt-2 text-lg uppercase tracking-wider text-emerald-300/70">
              Everything else secondary.
            </p>
          </div>

          <p className="font-body mt-8 max-w-xl text-base leading-8 text-zinc-300">
            Build your corporation. Wage hostile takeovers. Sabotage your
            competitors. Manipulate markets. Outgrow every rival in a real-time
            multiplayer strategy game where corporations are your weapons and
            profit is the only objective.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="font-body rounded-none border border-primary bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-emerald-500">
              Play Now
            </button>

            <button className="font-body rounded-none border border-white/10 bg-black/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-zinc-200 backdrop-blur hover:border-primary hover:text-primary">
              Login as Dev
            </button>
          </div>
        </section>

        {/* Right */}
        <section className="border-2 border-amber-400/70 bg-[#0B0F0C]/80 p-6 backdrop-blur">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-primary" size={18} />

              <span className="font-display text-xs uppercase tracking-widest text-primary">
                Your Corp
              </span>
            </div>

            <span className="font-display text-xs uppercase tracking-widest text-zinc-500">
              ▲ All Time
            </span>
          </div>

          <div className="mt-6">
            <AllTimeChart />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-body text-xs uppercase tracking-widest text-zinc-500">
              Founded
            </span>

            <span className="font-display text-xs uppercase tracking-widest text-primary">
              Now
            </span>
          </div>
        </section>
      </div>
    </main>
  );
}
