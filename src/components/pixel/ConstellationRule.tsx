/** Thin constellation trail used beside section badges */
export function ConstellationRule({
  tone = "ube",
  className = "",
}: {
  tone?: "ube" | "gold" | "pink";
  className?: string;
}) {
  const from =
    tone === "gold"
      ? "from-[#FCE7B8]/55"
      : tone === "pink"
        ? "from-[#F1BCF5]/55"
        : "from-[#8387C3]/55";

  return (
    <span
      aria-hidden
      className={`inline-flex max-w-[140px] flex-1 items-center gap-1.5 ${className}`}
    >
      <span className={`h-px flex-1 bg-gradient-to-r ${from} via-[#8387C3]/35 to-transparent`} />
      <span className="h-1 w-1 shrink-0 rounded-sm bg-[#FCE7B8]/80" />
      <span className="h-1.5 w-1.5 shrink-0 rounded-sm bg-[#F1BCF5]/70" />
      <span className="h-1 w-1 shrink-0 rounded-sm bg-[#8387C3]/80" />
    </span>
  );
}
