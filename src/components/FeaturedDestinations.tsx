import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const routes = [
  {
    name: "Лос-Анджелес — Феникс",
    region: "Калифорния ↔ Аризона",
    description: "Один из самых востребованных коридоров на Западе. Доставка за 1–2 дня",
    price: "от $380",
  },
  {
    name: "Сиэтл — Портленд — Сакраменто",
    region: "Вашингтон → Орегон → Калифорния",
    description: "Маршрут вдоль Тихоокеанского побережья через три штата. Доставка 2–3 дня",
    price: "от $520",
  },
  {
    name: "Лас-Вегас — Денвер",
    region: "Невада ↔ Колорадо",
    description: "Связываем игорную столицу и горный хаб через Юту. Срок — 2 дня",
    price: "от $460",
  },
  {
    name: "Даллас — Хьюстон — Сан-Антонио",
    region: "Техасский треугольник",
    description: "Три крупнейших города Техаса. Ежедневные рейсы, доставка за 1 день",
    price: "от $250",
  },
  {
    name: "Чикаго — Канзас-Сити — Оклахома-Сити",
    region: "Иллинойс → Канзас → Оклахома",
    description: "Центральный коридор от Великих озёр до Юга. Срок 2–3 дня",
    price: "от $590",
  },
  {
    name: "Омаха — Де-Мойн — Сент-Луис",
    region: "Небраска → Айова → Миссури",
    description: "Аграрно-промышленный маршрут через центр США. Доставка за 2 дня",
    price: "от $430",
  },
]

const states = [
  "Калифорния", "Аризона", "Невада", "Орегон", "Вашингтон",
  "Айдахо", "Монтана", "Вайоминг", "Колорадо", "Нью-Мексико",
  "Техас", "Оклахома", "Канзас", "Небраска", "Айова",
  "Миссури", "Арканзас", "Луизиана", "Иллинойс",
]

const comingSoon = ["Южная Дакота", "Британская Колумбия (Канада)"]

export function FeaturedDestinations() {
  return (
    <section id="routes" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Популярные <span className="font-semibold">маршруты</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Перевозим грузы по ключевым торговым коридорам западной и центральной части США с гарантированными сроками
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Top visual */}
              <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/60" />
                <Icon name="Truck" size={56} className="text-white/15" />

                {/* Region Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{route.region}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{route.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{route.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{route.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary" asChild>
                    <a href={`mailto:sorokpatsnk@gmail.com?subject=Заявка на маршрут: ${encodeURIComponent(route.name)} — SaniansTeamLog&body=Здравствуйте! Хочу заказать перевозку по маршруту: ${encodeURIComponent(route.name)}.%0A%0AТип груза:%0AВес / габариты:%0AДата отправки:%0AКонтактный телефон / email:%0A%0AС уважением,`}>
                      Заказать
                      <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Coverage block */}
        <div className="mt-20 rounded-3xl bg-muted/40 border border-border p-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="md:w-72 shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Map" size={22} className="text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Зона покрытия</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Работаем в <span className="font-semibold text-foreground">19 штатах</span> западной и центральной части США. Скоро расширяем географию
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {states.map((state) => (
                <span
                  key={state}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-primary/10 text-primary font-medium rounded-full border border-primary/20"
                >
                  <Icon name="Check" size={11} />
                  {state}
                </span>
              ))}
              {comingSoon.map((state) => (
                <span
                  key={state}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-amber-50 text-amber-600 font-medium rounded-full border border-amber-200"
                >
                  <Icon name="Clock" size={11} />
                  {state} — скоро
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}