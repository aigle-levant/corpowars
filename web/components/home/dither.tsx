import { DitherShader } from "../ui/dither-shader";

export default function DitherShaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <DitherShader
        src="https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        gridSize={3}
        ditherMode="bayer"
        colorMode="original"
        threshold={0.3}
        className="h-full w-full"
      />
    </div>
  );
}
