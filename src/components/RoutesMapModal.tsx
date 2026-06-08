import Icon from "@/components/ui/icon"

interface Props {
  open: boolean
  onClose: () => void
}

// Координаты городов на SVG-плоскости (подогнаны под карту западной/центральной части США)
const cities: Record<string, { x: number; y: number; label: string }> = {
  losAngeles:   { x: 112, y: 310, label: "Лос-Анджелес" },
  sanDiego:     { x: 105, y: 330, label: "Сан-Диего" },
  sanFrancisco: { x:  82, y: 248, label: "Сан-Франциско" },
  seattle:      { x:  88, y: 108, label: "Сиэтл" },
  helena:       { x: 210, y: 118, label: "Хелена" },
  chicago:      { x: 520, y: 200, label: "Чикаго" },
  littleRock:   { x: 460, y: 340, label: "Литл-Рок" },
}

const routes = [
  { from: "losAngeles",   to: "chicago",    color: "#3b82f6", label: "Лос-Анджелес — Чикаго" },
  { from: "sanDiego",     to: "helena",     color: "#10b981", label: "Сан-Диего — Хелена" },
  { from: "sanFrancisco", to: "chicago",    color: "#f59e0b", label: "Сан-Франциско — Чикаго" },
  { from: "seattle",      to: "littleRock", color: "#ef4444", label: "Сиэтл — Литл-Рок" },
  { from: "losAngeles",   to: "littleRock", color: "#a855f7", label: "Лос-Анджелес — Литл-Рок" },
]

// Упрощённые контуры 19 штатов (path d-атрибуты в координатах SVG 640×440)
const states: { name: string; d: string }[] = [
  { name: "Калифорния",   d: "M60,200 L95,200 L112,265 L108,340 L90,370 L60,340 L55,280 Z" },
  { name: "Орегон",       d: "M60,145 L150,145 L152,200 L95,200 L60,200 Z" },
  { name: "Вашингтон",    d: "M60,100 L160,100 L158,145 L60,145 Z" },
  { name: "Невада",       d: "M95,200 L152,200 L158,280 L130,310 L108,310 L112,265 Z" },
  { name: "Айдахо",       d: "M150,100 L215,100 L218,175 L175,185 L152,200 L150,145 Z" },
  { name: "Монтана",      d: "M160,60 L320,60 L318,120 L215,120 L215,100 L160,100 Z" },
  { name: "Вайоминг",     d: "M215,120 L318,120 L315,195 L218,195 Z" },
  { name: "Колорадо",     d: "M218,195 L315,195 L312,260 L220,260 Z" },
  { name: "Юта",          d: "M158,200 L218,200 L220,260 L175,265 L158,280 Z" },
  { name: "Аризона",      d: "M130,310 L158,280 L175,265 L178,340 L170,380 L115,380 L108,340 Z" },
  { name: "Нью-Мексико",  d: "M178,260 L220,260 L222,340 L178,340 Z" },
  { name: "Техас",        d: "M222,260 L312,260 L320,310 L330,390 L260,390 L225,370 L222,340 Z" },
  { name: "Оклахома",     d: "M312,260 L400,258 L400,305 L320,310 Z" },
  { name: "Канзас",       d: "M315,195 L405,193 L400,258 L312,260 Z" },
  { name: "Небраска",     d: "M318,140 L410,138 L408,193 L315,195 Z" },
  { name: "Айова",        d: "M410,138 L490,140 L488,195 L408,193 Z" },
  { name: "Миссури",      d: "M408,193 L490,195 L488,260 L400,258 L400,193 Z" },
  { name: "Арканзас",     d: "M400,258 L488,260 L486,310 L400,308 Z" },
  { name: "Иллинойс",     d: "M490,140 L535,142 L533,210 L488,210 Z" },
]

export function RoutesMapModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-background rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold">Наши маршруты</h2>
            <p className="text-sm text-muted-foreground mt-0.5">19 штатов США — зона покрытия SaniansTeamLog</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
        </div>

        {/* Map */}
        <div className="p-6">
          <div className="bg-slate-900 rounded-2xl overflow-hidden">
            <svg viewBox="40 50 560 360" className="w-full" style={{ height: "380px" }}>
              {/* Штаты */}
              {states.map((s) => (
                <path
                  key={s.name}
                  d={s.d}
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="1.2"
                  opacity="0.9"
                />
              ))}

              {/* Линии маршрутов */}
              {routes.map((r) => {
                const from = cities[r.from]
                const to = cities[r.to]
                const mx = (from.x + to.x) / 2
                const my = Math.min(from.y, to.y) - 40
                return (
                  <g key={r.label}>
                    <path
                      d={`M${from.x},${from.y} Q${mx},${my} ${to.x},${to.y}`}
                      fill="none"
                      stroke={r.color}
                      strokeWidth="2"
                      strokeDasharray="6 3"
                      opacity="0.85"
                    />
                    {/* Стрелка в середине */}
                    <circle cx={mx} cy={my + 20} r="2.5" fill={r.color} opacity="0.7" />
                  </g>
                )
              })}

              {/* Города */}
              {Object.values(cities).map((c) => (
                <g key={c.label}>
                  <circle cx={c.x} cy={c.y} r="5" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
                  <text
                    x={c.x + 7}
                    y={c.y + 4}
                    fontSize="8"
                    fill="#cbd5e1"
                    fontFamily="Arial, sans-serif"
                  >
                    {c.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Легенда */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
            {routes.map((r) => (
              <div key={r.label} className="flex items-center gap-2 text-sm">
                <span className="w-6 h-0.5 shrink-0 rounded-full" style={{ backgroundColor: r.color, borderTop: `2px dashed ${r.color}`, display: "block" }} />
                <span className="text-muted-foreground text-xs">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
