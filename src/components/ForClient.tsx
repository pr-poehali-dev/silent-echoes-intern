import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const steps = [
  {
    number: "01",
    icon: "ClipboardList",
    title: "Оставьте заявку",
    description: "Укажите маршрут, тип и вес груза. Ответим и рассчитаем стоимость в течение 15 минут",
  },
  {
    number: "02",
    icon: "FileCheck",
    title: "Согласуйте условия",
    description: "Подпишем договор, уточним дату забора груза и все детали доставки",
  },
  {
    number: "03",
    icon: "MapPin",
    title: "Отслеживайте груз",
    description: "GPS-трекинг в реальном времени — вы знаете, где ваш груз в каждый момент",
  },
  {
    number: "04",
    icon: "PackageCheck",
    title: "Получите доставку",
    description: "Груз доставлен в срок и в сохранности. Подпишите акт приёмки — всё готово",
  },
]

const benefits = [
  { icon: "Shield", text: "Страхование груза включено" },
  { icon: "Clock", text: "Гарантия сроков доставки" },
  { icon: "ReceiptText", text: "Полный пакет документов" },
  { icon: "Headphones", text: "Персональный менеджер" },
]

export function ForClient() {
  return (
    <section id="client" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Icon name="Users" size={14} />
            Клиентам
          </div>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Как это <span className="font-semibold">работает</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Отправить груз с нами просто. Всего 4 шага от заявки до доставки — без бумажной волокиты и неожиданных расходов
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%-8px)] w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                    <Icon name={step.icon} size={22} className="text-primary-foreground" />
                  </div>
                  <span className="text-3xl font-light text-muted-foreground/40">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits + CTA */}
        <div className="rounded-3xl bg-slate-900 p-10 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold text-white mb-6">Что вы получаете</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Icon name={b.icon} size={16} className="text-green-400" />
                  </div>
                  <span className="text-sm">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 h-14 text-base">
              Отправить груз
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
