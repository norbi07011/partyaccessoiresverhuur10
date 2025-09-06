export type Theme = {
  neonPink?: string;
  neonPurple?: string;
  neonCyan?: string;
  neonIntensity?: number; // 0.5–2
  flowSpeed?: number;     // 0–5
};

export function applyThemeFromMetadata(metadata: any) {
  const t: Theme = metadata?.theme ?? {};
  const root = document.documentElement;

  const pink  = t.neonPink  ?? '#ff00ff';
  const purple= t.neonPurple?? '#9e00ff';
  const cyan  = t.neonCyan  ?? '#00e5ff';
  const intensity = Math.max(0.5, Math.min(2, t.neonIntensity ?? 1));
  const speed     = Math.max(0, Math.min(5, t.flowSpeed ?? 1));

  root.style.setProperty('--c-neon-pink', pink);
  root.style.setProperty('--c-neon-purple', purple);
  root.style.setProperty('--c-neon-cyan', cyan);
  root.style.setProperty('--neon-intensity', String(intensity));
  root.style.setProperty('--flow-speed', String(speed));

  const outer = (0.2 * intensity).toFixed(3);
  const inner = (0.15 * intensity).toFixed(3);
  root.style.setProperty('--neon-alpha-outer', outer);
  root.style.setProperty('--neon-alpha-inner', inner);
}
