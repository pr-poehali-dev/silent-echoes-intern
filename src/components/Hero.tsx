import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const photos = [
  "https://cdn.poehali.dev/projects/c8919c34-ec61-4af5-8bb9-67394c79336c/bucket/d2a0d5d3-7f16-4c14-acd3-52d5209f2102.jpg",
  "https://cdn.poehali.dev/projects/c8919c34-ec61-4af5-8bb9-67394c79336c/bucket/f0ade905-9aea-493b-b257-e83d15666b12.jpg",
  "https://cdn.poehali.dev/projects/c8919c34-ec61-4af5-8bb9-67394c79336c/bucket/f2aef654-d32e-45ad-87cb-a1714e77f538.jpg",
  "https://cdn.poehali.dev/projects/c8919c34-ec61-4af5-8bb9-67394c79336c/bucket/6c077fdf-e0c0-40d6-bb72-a31ea787528f.jpg",
]

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background — главное фото грузовика */}
      <div className="absolute inset-0 z-0">
        <img
          src={photos[0]}
          alt="SaniansTeamLog грузовик"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-4 py-2 rounded-full text-sm font-medium">
            <Icon name="MapPin" size={14} />
            Грузоперевозки по 19 штатам США
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance text-white">
            Доставим груз
            <span className="block font-bold mt-2 text-blue-400">в любую точку</span>
            <span className="block text-white">США</span>
          </h1>

          {/* Девиз */}
          <p className="text-xl md:text-2xl text-green-400 font-semibold tracking-wide">
            «Мы настоящие мастера 18-ти стальных колёс!»
          </p>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
            SaniansTeamLog — надёжный партнёр в грузовых перевозках. Работаем в 19 штатах западной и центральной части США: от Калифорнии до Иллинойса
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 h-14 text-base group"
              asChild
            >
              <a href="mailto:sorokpatsnk@gmail.com?subject=Запрос расчёта стоимости перевозки — SaniansTeamLog&body=Здравствуйте! Прошу рассчитать стоимость перевозки.%0A%0AМаршрут (откуда → куда):%0AТип груза:%0AВес / габариты:%0AЖелаемые сроки:%0AКонтактный телефон / email:%0A%0AС уважением,">
                Рассчитать доставку
                <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 border-white/30 bg-transparent text-white hover:bg-white/10" asChild>
              <a href="#destinations">Наши маршруты</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-white/20">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">19</div>
            <div className="text-sm text-white/60">Штатов США</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">5 000+</div>
            <div className="text-sm text-white/60">Доставок в год</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light text-white">4.8</div>
            <div className="text-sm text-white/60">Рейтинг клиентов</div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-3 mt-12">
          {photos.slice(1).map((url, i) => (
            <div key={i} className="rounded-xl overflow-hidden h-28 md:h-36">
              <img src={url} alt={`Фото ${i + 2}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}