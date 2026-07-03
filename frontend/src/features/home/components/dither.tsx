
import { DitherShader } from "@/components/ui/dither-shader";

export default function DitherShaderInteractive() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-xl dark:border-neutral-800">
      <DitherShader
        src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=3432&auto=format&fit=crop"
        gridSize={3}
        ditherMode="bayer"
        colorMode="original"
        invert={false}
        animated={false}
        animationSpeed={0.025}
        primaryColor="#0a0a0a"
        secondaryColor="#fafafa"
        threshold={0.3}
        className="h-[300px] w-[400px] sm:h-[350px] sm:w-[500px] md:h-[400px] md:w-[600px]"
      />
    </div>
  );
}
