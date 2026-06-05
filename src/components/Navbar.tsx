import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const navLinks = [
  { href: "#hero", label: "Главная" },
  { href: "#cargo", label: "Категории грузов" },
  { href: "#client", label: "Клиенту" },
  { href: "#driver", label: "Водителю" },
  { href: "#about", label: "О нас" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Truck" size={18} className="text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">SaniansTeamLog</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Получить расчёт
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-base font-medium text-foreground/70 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full mt-2">
              Получить расчёт
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
