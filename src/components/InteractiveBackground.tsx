/**
 * Ambient page background — a static brand wash plus the signature hairline
 * grid. Deliberately NOT interactive: a 600px `blur(120px)` layer that follows
 * the cursor repaints the whole viewport on every mouse move, which costs far
 * more than it communicates. The wash is anchored behind the first viewport
 * instead, so it reads as depth without ever moving.
 *
 * All colour comes from theme tokens, so it renders correctly in both modes
 * (a faint brand tint on light paper, a luminous wash on dark navy).
 */
export default function InteractiveBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-background"
    >
      {/* Static brand wash behind the first viewport */}
      <div
        className="absolute inset-x-0 top-0 h-[75vh]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, var(--glow-color) 0%, transparent 70%)",
        }}
      />

      {/* Architectural hairline grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
    </div>
  );
}
