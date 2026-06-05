import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "ShieldCheck",
    title: "Надёжность и безопасность",
    description: "Страхование каждого груза, GPS-отслеживание в реальном времени и строгий контроль качества на всех этапах",
  },
  {
    icon: "Clock",
    title: "Точные сроки доставки",
    description: "Гарантируем соблюдение сроков — вы получаете груз в обещанный день или получаете компенсацию",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Наш диспетчерский центр работает круглосуточно. Всегда на связи по телефону, email и онлайн-чату",
  },
  {
    icon: "DollarSign",
    title: "Прозрачные цены",
    description: "Никаких скрытых платежей. Фиксированная стоимость рассчитывается заранее — вы платите ровно то, что согласовали",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">SaniansTeamLog</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы строим долгосрочные партнёрства, а не просто перевозим грузы. Ваш бизнес заслуживает надёжного логистического партнёра
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
