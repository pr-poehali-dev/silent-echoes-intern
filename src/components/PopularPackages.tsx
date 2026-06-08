import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Стандарт",
    delivery: "5–7 рабочих дней",
    weight: "до 10 000 кг",
    rating: "4.8",
    reviews: "312",
    highlights: ["FTL и LTL", "GPS-трекинг", "Страхование", "Онлайн-отчёт"],
    price: "от $0.08/lb",
    badge: "Популярный",
  },
  {
    title: "Экспресс",
    delivery: "1–3 рабочих дня",
    weight: "до 20 000 кг",
    rating: "4.9",
    reviews: "198",
    highlights: ["Приоритетный маршрут", "GPS-трекинг", "Полное страхование", "Менеджер 24/7"],
    price: "от $0.14/lb",
    badge: "Быстро",
  },
  {
    title: "Корпоративный",
    delivery: "по договору",
    weight: "без ограничений",
    rating: "5.0",
    reviews: "87",
    highlights: ["Выделенный транспорт", "Персональный менеджер", "Скидки от объёма", "Ежемесячная отчётность"],
    price: "Индивидуально",
    badge: "Бизнес",
  },
]

export function PopularPackages() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Тарифы на <span className="font-semibold">перевозки</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Выберите подходящий тариф под задачи вашего бизнеса — от разовых отправок до регулярных поставок
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 ${index === 1 ? "ring-2 ring-primary" : ""}`}
            >
              {/* Top Badge */}
              <div className={`h-2 w-full ${index === 1 ? "bg-primary" : "bg-muted"}`} />

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-semibold">{pkg.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${index === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Clock" size={16} />
                      <span>{pkg.delivery}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Package" size={16} />
                      <span>{pkg.weight}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Star" size={16} className="fill-primary text-primary" />
                      <span>{pkg.rating} ({pkg.reviews} отзывов)</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Стоимость</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className={`rounded-full ${index === 1 ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted text-foreground hover:bg-muted/80"}`} asChild>
                    <a href={`mailto:sorokpatsnk@gmail.com?subject=Заявка на тариф «${encodeURIComponent(pkg.title)}» — SaniansTeamLog&body=Здравствуйте! Хочу воспользоваться тарифом «${encodeURIComponent(pkg.title)}».%0A%0AМаршрут (откуда → куда):%0AТип груза:%0AВес / габариты:%0AДата отправки:%0AКонтактный телефон / email:%0A%0AС уважением,`}>
                      Заказать
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}