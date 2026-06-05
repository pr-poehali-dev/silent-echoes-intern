import Icon from "@/components/ui/icon"

const categories = [
  {
    icon: "Package",
    title: "Генеральные грузы",
    description: "Паллеты, коробки, промышленные товары. FTL и LTL отправки по всем маршрутам",
  },
  {
    icon: "Thermometer",
    title: "Рефрижераторные",
    description: "Продукты питания, фармацевтика и любые грузы с температурным режимом",
  },
  {
    icon: "Car",
    title: "Автомобили и техника",
    description: "Перевозка легковых авто, спецтехники и тяжёлого оборудования на автовозах",
  },
  {
    icon: "Zap",
    title: "Опасные грузы",
    description: "Химикаты, топливо, взрывчатые вещества. Работаем по всем нормативам HAZMAT",
  },
  {
    icon: "Building2",
    title: "Строительные материалы",
    description: "Металлоконструкции, бетонные блоки, пиломатериалы и негабаритные грузы",
  },
  {
    icon: "ShoppingCart",
    title: "E-commerce и ритейл",
    description: "Регулярные поставки для интернет-магазинов и торговых сетей с отслеживанием",
  },
]

export function CargoCategories() {
  return (
    <section id="cargo" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Категории <span className="font-semibold">грузов</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Перевозим любые виды грузов — от продуктов питания до тяжёлой техники. У каждого типа своя логистика и требования к транспорту
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <Icon name={cat.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
