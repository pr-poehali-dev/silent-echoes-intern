import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const routes = [
  {
    name: "Нью-Йорк — Лос-Анджелес",
    region: "Восточное ↔ Западное побережье",
    image: "/placeholder.jpg",
    description: "Трансконтинентальный маршрут через всю страну. Среднее время доставки — 5–7 дней",
    price: "от $1 200",
  },
  {
    name: "Чикаго — Даллас",
    region: "Средний Запад ↔ Юг",
    image: "/placeholder.jpg",
    description: "Один из самых загруженных торговых коридоров США. Доставка за 2–3 дня",
    price: "от $750",
  },
  {
    name: "Майами — Атланта",
    region: "Юго-Восточное побережье",
    image: "/placeholder.jpg",
    description: "Быстрая доставка по южным штатам. Регулярные рейсы каждый день",
    price: "от $480",
  },
  {
    name: "Сиэтл — Сан-Франциско",
    region: "Тихоокеанское побережье",
    image: "/placeholder.jpg",
    description: "Маршрут вдоль западного побережья. Доставка за 1–2 дня",
    price: "от $390",
  },
  {
    name: "Хьюстон — Феникс",
    region: "Юг ↔ Юго-Запад",
    image: "/placeholder.jpg",
    description: "Связываем нефтяной и технологический центры США. Срок — 2 дня",
    price: "от $620",
  },
  {
    name: "Бостон — Вашингтон",
    region: "Северо-восточный коридор",
    image: "/placeholder.jpg",
    description: "Плотный деловой коридор с ежедневными рейсами. Доставка за 1 день",
    price: "от $290",
  },
]

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
            Перевозим грузы по ключевым торговым коридорам США с гарантированными сроками доставки
          </p>
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/60" />
                <Icon name="Route" size={64} className="text-white/20" />

                {/* Region Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{route.region}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{route.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{route.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{route.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Заказать
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Все маршруты
          </Button>
        </div>
      </div>
    </section>
  )
}
