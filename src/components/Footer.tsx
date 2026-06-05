import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Truck" size={18} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">SaniansTeamLog</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Усердно работаем для вас с 2023!
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>

          {/* Routes */}
          <div>
            <h4 className="font-semibold mb-4">Маршруты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Восточное побережье</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Западное побережье</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Средний Запад</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Юг США</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Межштатные маршруты</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">FTL-перевозки</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LTL-перевозки</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Экспресс-доставка</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Корпоративный договор</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ответственное хранение</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={14} />
                <a href="tel:+18001234567" className="hover:text-foreground transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={14} />
                <a href="mailto:info@sanianslog.com" className="hover:text-foreground transition-colors">info@sanianslog.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="mt-0.5 shrink-0" />
                <span>Las Vegas, NV</span>
              </li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Условия перевозки</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border space-y-4">
          <div className="rounded-xl bg-muted/60 border border-border px-6 py-4 text-center">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Дисклеймер:</span> Данный сайт создан в учебных целях и не предоставляет реальных услуг. Сайт сделан по мотивам видеоигры <span className="italic">American Truck Simulator</span>.
            </p>
          </div>
          <p className="text-center text-sm text-muted-foreground">© 2023–2025 SaniansTeamLog. Все права защищены. Las Vegas, NV</p>
        </div>
      </div>
    </footer>
  )
}