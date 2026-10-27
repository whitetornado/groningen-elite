import type { GarmentType } from "@/lib/products";

type Props = {
  type: GarmentType;
  color: string;
  ink: string;
  className?: string;
};

const SERIF = { fontFamily: "var(--font-serif), Georgia, serif" };

/** Klein borstlogo: GRONINGEN + ÉLITE tussen lijntjes */
function ChestLogo({ x, y, ink, scale = 1 }: { x: number; y: number; ink: string; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={ink}>
      <text textAnchor="middle" fontSize="9.5" letterSpacing="0.4" style={SERIF} fontWeight={500}>
        GRONINGEN
      </text>
      <line x1="-21" y1="5.2" x2="-11" y2="5.2" stroke={ink} strokeWidth="0.45" opacity="0.8" />
      <line x1="11" y1="5.2" x2="21" y2="5.2" stroke={ink} strokeWidth="0.45" opacity="0.8" />
      <text y="7" textAnchor="middle" fontSize="4.4" letterSpacing="1.7" style={SERIF}>
        ÉLITE
      </text>
    </g>
  );
}

function Shading({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-shade`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity="0.22" />
      </linearGradient>
    </defs>
  );
}

export default function GarmentMockup({ type, color, ink, className = "" }: Props) {
  const id = `g-${type}-${color.replace("#", "")}`;
  const stroke = "rgba(0,0,0,0.28)";
  const seam = "rgba(0,0,0,0.18)";

  if (type === "cap") {
    return (
      <svg viewBox="0 0 300 300" className={className} role="img" aria-label="Pet">
        <Shading id={id} />
        <ellipse cx="150" cy="232" rx="96" ry="10" fill="#000" opacity="0.08" />
        <path d="M58 182 Q56 76 150 70 Q244 76 242 182 Z" fill={color} stroke={stroke} />
        <path d="M58 182 Q56 76 150 70 Q244 76 242 182 Z" fill={`url(#${id}-shade)`} />
        <path d="M150 70 Q132 120 128 182 M150 70 Q168 120 172 182" stroke={seam} fill="none" />
        <circle cx="150" cy="71" r="5" fill={color} stroke={stroke} />
        <path d="M62 180 Q150 206 238 180 Q252 194 236 206 Q150 230 64 206 Q48 194 62 180 Z" fill={color} stroke={stroke} />
        <path d="M62 180 Q150 206 238 180 Q252 194 236 206 Q150 230 64 206 Q48 194 62 180 Z" fill="#000" opacity="0.12" />
        <ChestLogo x={150} y={142} ink={ink} scale={1.35} />
      </svg>
    );
  }

  const body: Record<Exclude<GarmentType, "cap">, string> = {
    tee: "M98 40 L60 54 L22 104 L56 132 L78 116 L78 292 L222 292 L222 116 L244 132 L278 104 L240 54 L202 40 Q190 64 150 64 Q110 64 98 40 Z",
    sweater:
      "M98 40 L58 54 L38 130 L28 280 L62 284 L78 150 L78 292 L222 292 L222 150 L238 284 L272 280 L262 130 L242 54 L202 40 Q190 62 150 62 Q110 62 98 40 Z",
    hoodie:
      "M98 44 L58 58 L38 134 L28 282 L62 286 L78 154 L78 294 L222 294 L222 154 L238 286 L272 282 L262 134 L242 58 L202 44 Q190 64 150 64 Q110 64 98 44 Z",
  };

  return (
    <svg viewBox="0 0 300 310" className={className} role="img" aria-label={type}>
      <Shading id={id} />
      <ellipse cx="150" cy="300" rx="96" ry="7" fill="#000" opacity="0.08" />

      {type === "hoodie" && (
        <path d="M98 46 Q96 4 150 2 Q204 4 202 46 Q190 74 150 74 Q110 74 98 46 Z" fill={color} stroke={stroke} />
      )}

      <path d={body[type]} fill={color} stroke={stroke} />
      <path d={body[type]} fill={`url(#${id}-shade)`} />

      {/* Kraag */}
      {type !== "hoodie" && (
        <path
          d={type === "tee" ? "M98 40 Q110 70 150 70 Q190 70 202 40" : "M98 40 Q110 68 150 68 Q190 68 202 40"}
          fill="none"
          stroke={seam}
          strokeWidth={type === "tee" ? 3 : 6}
        />
      )}

      {/* Hoodie-details: capuchonopening, koordjes, buidelzak */}
      {type === "hoodie" && (
        <>
          <path d="M112 50 Q150 82 188 50" fill="none" stroke={seam} strokeWidth="4" />
          <path d="M140 72 L138 122 M160 72 L162 122" stroke={ink} strokeOpacity="0.55" strokeWidth="1.6" />
          <path d="M108 222 L118 196 L182 196 L192 222 L192 262 L108 262 Z" fill="none" stroke={seam} />
        </>
      )}

      {/* Boorden */}
      {type !== "tee" && (
        <>
          <path d="M78 280 L222 280" stroke={seam} strokeWidth="1" />
          <path d="M30 268 L64 272 M236 272 L270 268" stroke={seam} />
        </>
      )}

      <ChestLogo x={188} y={type === "hoodie" ? 118 : 108} ink={ink} />
    </svg>
  );
}
