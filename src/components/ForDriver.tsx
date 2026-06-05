import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const perks = [
  {
    icon: "DollarSign",
    title: "Достойная оплата",
    description: "Конкурентные ставки, бонусы за своевременность и надбавки за дальние рейсы",
  },
  {
    icon: "Route",
    title: "Постоянные маршруты",
    description: "Стабильная загрузка по фиксированным коридорам — никакого простоя между рейсами",
  },
  {
    icon: "Wrench",
    title: "Техподдержка 24/7",
    description: "Помощь на дороге, плановое ТО и ремонт — мы берём на себя все вопросы с техникой",
  },
  {
    icon: "BadgeCheck",
    title: "Официальное оформление",
    description: "Полный соцпакет, медстраховка и все выплаты по федеральному законодательству США",
  },
]

const requirements = [
  { icon: "User", label: "Возраст", value: "от 25 до 50 лет" },
  { icon: "CalendarCheck", label: "Стаж вождения", value: "не менее 2 лет" },
  { icon: "Star", label: "Рейтинг водителя", value: "не ниже 1.0" },
  { icon: "Biohazard", label: "Опасные грузы", value: "хотя бы 1 открытая категория" },
  { icon: "Leaf", label: "Эко-вождение", value: "уровень 1/6 и выше" },
  { icon: "Navigation", label: "Дальние перевозки", value: "уровень 1/6 и выше" },
]

export function ForDriver() {
  return (
    <section id="driver" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Icon name="Truck" size={14} />
              Водителям
            </div>
            <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
              Присоединяйтесь <span className="font-semibold">к команде</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              SaniansTeamLog — это не просто работа. Это стабильный доход, уважение и команда, которая всегда рядом на дороге
            </p>

            {/* Perks */}
            <div className="grid sm:grid-cols-2 gap-6">
              {perks.map((perk, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={perk.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{perk.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Requirements */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <h3 className="text-2xl font-semibold mb-2">Требования к кандидату</h3>
            <p className="text-white/60 text-sm mb-8">Базовые условия для работы в нашей компании</p>

            <ul className="space-y-3 mb-10">
              {requirements.map((req, i) => (
                <li key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <Icon name={req.icon} size={15} className="text-green-400" />
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-2">
                    <span className="text-sm text-white/60">{req.label}</span>
                    <span className="text-sm font-medium text-white text-right">{req.value}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Button size="lg" className="w-full bg-green-500 text-white hover:bg-green-600 rounded-full h-14 text-base">
              Откликнуться на вакансию
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>

            <p className="text-xs text-white/40 text-center mt-4">
              Свяжемся с вами в течение 1 рабочего дня
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}