import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Icon from "@/components/ui/icon"

export function Newsletter() {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setPhone("")
  }

  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance text-white">
              Готовы <span className="font-semibold text-blue-400">начать работу?</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto text-balance leading-relaxed">
              Оставьте номер телефона — наш менеджер перезвонит в течение 15 минут и рассчитает стоимость доставки для вашего груза
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="tel"
                placeholder="+1 (___) ___-____"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="h-12 rounded-full border-2 border-white/20 bg-white/10 text-white placeholder:text-white/40 px-6 focus:border-blue-400"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-6 shrink-0"
              >
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </form>

          <p className="text-xs text-white/40">
            Нажимая кнопку, вы соглашаетесь с Политикой конфиденциальности и даёте согласие на обработку данных
          </p>
        </div>
      </div>
    </section>
  )
}
