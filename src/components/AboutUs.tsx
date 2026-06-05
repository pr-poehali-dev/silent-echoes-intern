import Icon from "@/components/ui/icon"

const timeline = [
  {
    year: "2023",
    title: "Основание компании",
    description: "Три партнёра с многолетним опытом в логистике зарегистрировали SaniansTeamLog LLC в Лас-Вегасе, Невада. Первые рейсы — по коридору Las Vegas → Los Angeles → Phoenix.",
  },
  {
    year: "2023",
    title: "Первые 100 доставок",
    description: "За первые 6 месяцев работы выполнили 100 успешных рейсов. Добавили рефрижераторный транспорт и получили допуск к перевозке опасных грузов (HAZMAT).",
  },
  {
    year: "2024",
    title: "Расширение на 12 штатов",
    description: "Открыли регулярные маршруты в Техас, Колорадо, Орегон, Вашингтон и Иллинойс. Парк техники вырос до 15 единиц. Запустили онлайн-трекинг грузов.",
  },
  {
    year: "2025",
    title: "19 штатов и рост команды",
    description: "Сегодня SaniansTeamLog работает в 19 штатах, в компании трудятся более 30 водителей. Открыты новые коридоры на Средний Запад и юг США.",
  },
]

const licenses = [
  {
    icon: "FileText",
    title: "USDOT Number",
    value: "№ 4XXXXXXX",
    description: "Регистрация в Федеральном управлении безопасности автомобильных перевозчиков (FMCSA)",
  },
  {
    icon: "Shield",
    title: "MC Authority",
    value: "MC-XXXXXXX",
    description: "Лицензия межштатного перевозчика (Motor Carrier Operating Authority), выданная FMCSA",
  },
  {
    icon: "Biohazard",
    title: "HAZMAT License",
    value: "Nevada DOT",
    description: "Разрешение на перевозку опасных грузов в соответствии с 49 CFR Parts 100–185",
  },
  {
    icon: "Building2",
    title: "Юридическая форма",
    value: "LLC (Nevada)",
    description: "SaniansTeamLog LLC, зарегистрирована в штате Невада. EIN присвоен IRS. NV SOS Filing #XXXXXXX",
  },
  {
    icon: "ShieldCheck",
    title: "Страхование",
    value: "от $1 000 000",
    description: "Страхование гражданской ответственности перевозчика согласно требованиям FMCSA (49 CFR §387)",
  },
  {
    icon: "Scale",
    title: "Cargo Insurance",
    value: "до $100 000",
    description: "Страхование груза на каждую отправку. Полис соответствует требованиям штатов зоны покрытия",
  },
]

export function AboutUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Icon name="Info" size={14} />
            О компании
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            История <span className="font-semibold">SaniansTeamLog</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Мы начинали с трёх человек и одного маршрута. Сегодня — это растущая команда профессионалов, покрывающая 19 штатов США
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div key={i} className="md:pl-20 relative">
                <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-primary items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                  {item.year}
                </div>
                <div className="bg-background rounded-2xl border border-border p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.year}</span>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal block */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name="Scale" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Лицензии и правовая информация</h3>
              <p className="text-sm text-muted-foreground">Работаем в полном соответствии с федеральным законодательством и законами штатов</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {licenses.map((lic, i) => (
              <div key={i} className="bg-background rounded-2xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name={lic.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-0.5">{lic.title}</div>
                    <div className="font-semibold mb-1">{lic.value}</div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{lic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 flex gap-4">
            <Icon name="AlertTriangle" size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              <span className="font-semibold">Важно:</span> Номера лицензий (USDOT, MC, NV SOS) являются плейсхолдерами и должны быть заменены на реальные данные компании. Деятельность осуществляется в соответствии с требованиями FMCSA, 49 CFR, а также законодательством штатов зоны покрытия. Страховые полисы хранятся у страховщика и предоставляются по запросу.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
