type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  sm: { word: "text-[17px]", sub: "text-[7px]", line: "w-4", gap: "gap-1.5", mt: "mt-0.5" },
  md: { word: "text-2xl", sub: "text-[9px]", line: "w-6", gap: "gap-2", mt: "mt-1" },
  lg: { word: "text-5xl sm:text-6xl", sub: "text-xs sm:text-sm", line: "w-10 sm:w-14", gap: "gap-3", mt: "mt-2" },
  xl: { word: "text-[13vw] sm:text-7xl lg:text-[104px]", sub: "text-sm sm:text-base lg:text-xl", line: "w-10 sm:w-20", gap: "gap-3 sm:gap-5", mt: "mt-2 sm:mt-3" },
};

/** Woordmerk: GRONINGEN met ÉLITE tussen twee fijne lijnen. */
export default function Logo({ size = "md", className = "" }: Props) {
  const s = sizes[size];
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} aria-label="Groningen Élite">
      <span className={`font-serif font-medium tracking-[0.04em] ${s.word}`}>GRONINGEN</span>
      <span className={`flex items-center ${s.gap} ${s.mt}`} aria-hidden="true">
        <span className={`h-px bg-current opacity-70 ${s.line}`} />
        <span className={`font-serif tracking-merk ${s.sub} pl-[0.42em]`}>ÉLITE</span>
        <span className={`h-px bg-current opacity-70 ${s.line}`} />
      </span>
    </span>
  );
}
