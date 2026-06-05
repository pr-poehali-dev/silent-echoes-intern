import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-slate-800/80" />
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

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
            SaniansTeamLog — надёжный партнёр в грузовых перевозках. Работаем в 19 штатах западной и центральной части США: от Калифорнии до Иллинойса
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-8 h-14 text-base group"
            >
              Рассчитать доставку
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 border-white/30 bg-transparent text-white hover:bg-white/10">
              Наши маршруты
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
      </div>
    </section>
  )
}