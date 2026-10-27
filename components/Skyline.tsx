/**
 * Stadssilhouet van Groningen: Martinitoren + Martinikerk, Aa-kerk,
 * Academiegebouw en een rij grachtenpanden met trap-, hals- en klokgevels.
 * Alles zit in één <g> met groepsopacity, zodat overlappende vormen één vlak worden.
 * Details (ramen, bogen, klok) zijn in de achtergrondkleur getekend en vallen weg in het silhouet.
 */

const G = 640; // grondlijn / waterlijn
const VB_W = 2400;
const VB_H = 700;
const DETAIL = "#151515";

// Deterministische random zodat server en client hetzelfde renderen
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Gable = "trap" | "hals" | "klok" | "zadel" | "lijst";

function gablePath(x: number, w: number, h: number, type: Gable): string {
  const top = G - h;
  switch (type) {
    case "trap": {
      // Trapgevel: 3 treden per kant
      const steps = 3;
      const sw = w / (steps * 2 + 1);
      const sh = (w * 0.55) / (steps + 1);
      let d = `M${x} ${G}V${top}`;
      for (let i = 0; i < steps; i++) {
        const xx = x + sw * i;
        d += `H${xx + sw}V${top - sh * (i + 1)}`;
      }
      d += `H${x + w - sw * steps}`;
      for (let i = steps - 1; i >= 0; i--) {
        d += `V${top - sh * i}H${x + w - sw * i}`;
      }
      return d + `V${G}Z`;
    }
    case "hals": {
      // Halsgevel: smalle hals met schouders en kapje
      const nx = x + w * 0.27;
      const nw = w * 0.46;
      const nh = w * 0.62;
      return `M${x} ${G}V${top}H${nx}V${top - nh}L${x + w / 2} ${top - nh - w * 0.16}L${nx + nw} ${top - nh}V${top}H${x + w}V${G}Z`;
    }
    case "klok": {
      // Klokgevel: gebogen contour
      const nh = w * 0.7;
      return `M${x} ${G}V${top}C${x + w * 0.22} ${top} ${x + w * 0.22} ${top - nh} ${x + w * 0.38} ${top - nh}
        Q${x + w / 2} ${top - nh - w * 0.2} ${x + w * 0.62} ${top - nh}C${x + w * 0.78} ${top - nh} ${x + w * 0.78} ${top} ${x + w} ${top}V${G}Z`;
    }
    case "zadel":
      return `M${x} ${G}V${top}L${x + w / 2} ${top - w * 0.55}L${x + w} ${top}V${G}Z`;
    case "lijst":
    default:
      return `M${x} ${G}V${top}H${x - 2}V${top - 5}H${x + w + 2}V${top}H${x + w}V${G}Z`;
  }
}

function buildHouses(seed: number, from: number, to: number, hMin: number, hMax: number, withWindows: boolean) {
  const r = rng(seed);
  const shapes: string[] = [];
  const windows: { x: number; y: number }[] = [];
  const types: Gable[] = ["trap", "hals", "klok", "zadel", "lijst", "trap", "hals"];
  let x = from;
  while (x < to) {
    const w = 26 + Math.round(r() * 22);
    const h = hMin + Math.round(r() * (hMax - hMin));
    const type = types[Math.floor(r() * types.length)];
    shapes.push(gablePath(x, w, h, type));
    if (withWindows) {
      const cols = w > 38 ? 3 : 2;
      const rows = Math.max(2, Math.floor((h - 14) / 22));
      for (let row = 0; row < rows; row++) {
        for (let c = 0; c < cols; c++) {
          if (r() < 0.35) continue;
          windows.push({
            x: x + (w / (cols + 1)) * (c + 1) - 2,
            y: G - h + 10 + row * 22,
          });
        }
      }
    }
    x += w + (r() < 0.12 ? 2 : 0);
  }
  return { shapes, windows };
}

const back = buildHouses(11, -20, VB_W + 20, 70, 150, false);
const front = buildHouses(7, -10, VB_W + 10, 48, 112, true);

/** Spitsboogvenster als pad */
const lancet = (cx: number, top: number, bottom: number, w: number) =>
  `M${cx - w / 2} ${bottom}V${top + w * 0.6}Q${cx - w / 2} ${top} ${cx} ${top - w * 0.2}Q${cx + w / 2} ${top} ${cx + w / 2} ${top + w * 0.6}V${bottom}Z`;

/** Balustrade + hoekpinakels voor een torengeleding */
function tier(cx: number, w: number, yTop: number, yBottom: number, balW: number, pin: number) {
  const parts: string[] = [];
  parts.push(`M${cx - w / 2} ${yBottom}V${yTop}H${cx + w / 2}V${yBottom}Z`);
  // balustrade
  parts.push(`M${cx - balW / 2} ${yTop}V${yTop - 7}H${cx + balW / 2}V${yTop}Z`);
  // pinakels op de hoeken + midden
  for (const px of [cx - balW / 2 + 3, cx, cx + balW / 2 - 3]) {
    const pw = px === cx ? 3 : 4.5;
    parts.push(`M${px - pw / 2} ${yTop - 7}V${yTop - 7 - pin * 0.45}L${px} ${yTop - 7 - pin}L${px + pw / 2} ${yTop - 7 - pin * 0.45}V${yTop - 7}Z`);
  }
  return parts.join("");
}

function Martinitoren({ cx }: { cx: number }) {
  // Geledingen van onder naar boven (breedte, top, onderkant)
  const t1 = { w: 84, top: 430, bottom: G };
  const t2 = { w: 74, top: 330, bottom: 423 };
  const t3 = { w: 64, top: 250, bottom: 323 };
  const t4 = { w: 52, top: 190, bottom: 243 };
  const t5 = { w: 40, top: 146, bottom: 183 };

  const body = [
    // steunberen / voet
    `M${cx - 50} ${G}V600H${cx + 50}V${G}Z`,
    `M${cx - 47} 600V540H${cx + 47}V600Z`,
    tier(cx, t1.w, t1.top, t1.bottom, 94, 26),
    tier(cx, t2.w, t2.top, t2.bottom, 84, 22),
    tier(cx, t3.w, t3.top, t3.bottom, 72, 19),
    tier(cx, t4.w, t4.top, t4.bottom, 60, 15),
    tier(cx, t5.w, t5.top, t5.bottom, 46, 11),
    // lantaarn
    `M${cx - 13} 139V112H${cx + 13}V139Z`,
    // uivormig koepeltje
    `M${cx - 14} 112C${cx - 16} 100 ${cx - 4} 98 ${cx} 82C${cx + 4} 98 ${cx + 16} 100 ${cx + 14} 112Z`,
    // makelaar
    `M${cx - 1} 82V48H${cx + 1}V82Z`,
  ].join("");

  return (
    <g>
      <path d={body} />
      <circle cx={cx} cy={78} r={3.2} />
      {/* windvaan */}
      <path d={`M${cx + 1} 54h11l-3 4 3 4h-11z`} />

      {/* details */}
      <g fill={DETAIL}>
        <path d={lancet(cx - 16, 470, 590, 11)} />
        <path d={lancet(cx + 16, 470, 590, 11)} />
        <path d={lancet(cx - 14, 358, 410, 10)} />
        <path d={lancet(cx + 14, 358, 410, 10)} />
        <path d={lancet(cx - 15, 205, 238, 8)} />
        <path d={lancet(cx, 205, 238, 8)} />
        <path d={lancet(cx + 15, 205, 238, 8)} />
        <path d={lancet(cx - 8, 156, 180, 7)} />
        <path d={lancet(cx + 8, 156, 180, 7)} />
        <path d={lancet(cx, 118, 136, 6)} />
      </g>
      {/* klok */}
      <circle cx={cx} cy={288} r={15} fill="none" stroke={DETAIL} strokeWidth={2} />
      <path d={`M${cx} 288V277M${cx} 288L${cx + 8} 292`} stroke={DETAIL} strokeWidth={1.6} />
      {/* horizontale lijsten */}
      <path d={`M${cx - 42} 500H${cx + 42}M${cx - 37} 440H${cx + 37}`} stroke={DETAIL} strokeWidth={1.2} />
    </g>
  );
}

function Martinikerk({ x }: { x: number }) {
  const end = x + 400;
  const buttresses = Array.from({ length: 7 }, (_, i) => x + 30 + i * 56);
  return (
    <g>
      {/* schip + dak */}
      <path d={`M${x} ${G}V540L${x + 18} 478H${end - 18}L${end} 540V${G}Z`} />
      {/* koor, lager met afgeschuind dak */}
      <path d={`M${end} ${G}V552L${end + 26} 500H${end + 70}L${end + 120} 552V${G}Z`} />
      {/* dakruiter */}
      <path d={`M${x + 214} 480V450H${x + 226}V480ZM${x + 212} 450L${x + 220} 418L${x + 228} 450Z`} />
      {/* steunberen met pinakels */}
      {buttresses.map((bx) => (
        <path key={bx} d={`M${bx - 4} ${G}V530L${bx} 516L${bx + 4} 530V${G}Z`} />
      ))}
      <g fill={DETAIL}>
        {buttresses.slice(0, -1).map((bx) => (
          <path key={bx} d={lancet(bx + 28, 548, 618, 13)} />
        ))}
      </g>
    </g>
  );
}

function AaKerk({ cx }: { cx: number }) {
  return (
    <g>
      {/* schip */}
      <path d={`M${cx + 20} ${G}V566L${cx + 36} 506H${cx + 220}L${cx + 236} 566V${G}Z`} />
      {/* toren: vierkante voet, achtkant, peerkoepel, lantaarn, spits */}
      <path
        d={`M${cx - 24} ${G}V468H${cx + 24}V${G}Z
            M${cx - 28} 468V461H${cx + 28}V468Z
            M${cx - 19} 461V414H${cx + 19}V461Z
            M${cx - 22} 414C${cx - 24} 396 ${cx - 6} 396 ${cx - 9} 384H${cx + 9}C${cx + 6} 396 ${cx + 24} 396 ${cx + 22} 414Z
            M${cx - 9} 384V364H${cx + 9}V384Z
            M${cx - 11} 364C${cx - 10} 354 ${cx - 2} 354 ${cx} 346C${cx + 2} 354 ${cx + 10} 354 ${cx + 11} 364Z
            M${cx - 1} 346V318H${cx + 1}V346Z`}
      />
      <circle cx={cx} cy={318} r={2.4} />
      <g fill={DETAIL}>
        <path d={lancet(cx, 492, 540, 10)} />
        <path d={lancet(cx - 8, 424, 452, 6)} />
        <path d={lancet(cx + 8, 424, 452, 6)} />
      </g>
    </g>
  );
}

function Academiegebouw({ x }: { x: number }) {
  const mid = x + 90;
  return (
    <g>
      <path d={`M${x} ${G}V572L${x + 14} 548H${x + 166}L${x + 180} 572V${G}Z`} />
      {/* middenrisaliet met trapgevel en torentje */}
      <path d={`M${mid - 26} ${G}V532L${mid - 20} 532V520L${mid - 12} 520V508L${mid - 6} 508V478H${mid + 6}V508L${mid + 12} 508V520L${mid + 20} 520V532H${mid + 26}V${G}Z`} />
      <path d={`M${mid - 5} 478C${mid - 6} 466 ${mid} 464 ${mid} 452C${mid} 464 ${mid + 6} 466 ${mid + 5} 478Z M${mid - 0.8} 452V436H${mid + 0.8}V452Z`} />
      {/* hoektorentjes */}
      {[x + 8, x + 172].map((tx) => (
        <path key={tx} d={`M${tx - 7} 572V540H${tx + 7}V572ZM${tx - 8} 540L${tx} 516L${tx + 8} 540Z`} />
      ))}
      <g fill={DETAIL}>
        {Array.from({ length: 6 }, (_, i) => (
          <rect key={i} x={x + 22 + i * (i < 3 ? 20 : 20) + (i >= 3 ? 52 : 0)} y={584} width={7} height={14} />
        ))}
        <path d={lancet(mid, 560, 600, 12)} />
      </g>
    </g>
  );
}

export default function Skyline({ className = "" }: { className?: string }) {
  const towerX = 1600;
  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMax meet"
      className={className}
      style={{ aspectRatio: `${VB_W} / ${VB_H}` }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="water-fade" x1="0" y1={G} x2="0" y2={VB_H} gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="water-mask" maskUnits="userSpaceOnUse" x="0" y={G} width={VB_W} height={VB_H - G}>
          <rect x="0" y={G} width={VB_W} height={VB_H - G} fill="url(#water-fade)" />
        </mask>
      </defs>


      {/* achterste rij daken */}
      <g fill="#ECE8DF" opacity={0.035}>
        <path d={back.shapes.join("")} />
      </g>

      {/* hoofdlaag */}
      <g id="stad" fill="#ECE8DF" opacity={0.085}>
        <path d={front.shapes.join("")} />
        <AaKerk cx={700} />
        <Academiegebouw x={1020} />
        <Martinikerk x={towerX + 42} />
        <Martinitoren cx={towerX} />
        <g fill={DETAIL}>
          {front.windows.map((w, i) => (
            <rect key={i} x={w.x} y={w.y} width={4} height={8} />
          ))}
        </g>
      </g>

      {/* spiegeling in het water */}
      <g mask="url(#water-mask)">
        <g transform={`matrix(1 0 0 -1 0 ${G * 2})`} fill="#ECE8DF" opacity={0.05}>
          <path d={front.shapes.join("")} />
          <AaKerk cx={700} />
          <Academiegebouw x={1020} />
          <Martinikerk x={towerX + 42} />
          <Martinitoren cx={towerX} />
        </g>
      </g>

      {/* waterlijn en rimpels */}
      <path d={`M0 ${G}H${VB_W}`} stroke="#ECE8DF" strokeOpacity={0.08} />
      <g stroke="#ECE8DF" strokeOpacity={0.025} strokeWidth={1.5}>
        {Array.from({ length: 9 }, (_, i) => (
          <path key={i} d={`M0 ${G + 6 + i * 6}H${VB_W}`} strokeDasharray={`${40 + i * 7} ${18 + i * 4}`} strokeDashoffset={i * 23} />
        ))}
      </g>
    </svg>
  );
}
