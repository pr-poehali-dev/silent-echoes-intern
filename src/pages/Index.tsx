import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { CargoCategories } from "@/components/CargoCategories"
import { ForClient } from "@/components/ForClient"
import { ForDriver } from "@/components/ForDriver"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { PopularPackages } from "@/components/PopularPackages"
import { AboutUs } from "@/components/AboutUs"
import { Newsletter } from "@/components/Newsletter"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen relative">
      <span
        title="💰"
        style={{ position: "fixed", bottom: "23%", left: "2px", fontSize: "9px", opacity: 0.07, userSelect: "none", zIndex: 9999, cursor: "default", transform: "rotate(-15deg)" }}
      >$</span>
      <Navbar />
      <Hero />
      <CargoCategories />
      <ForClient />
      <ForDriver />
      <FeaturedDestinations />
      <WhyChooseUs />
      <PopularPackages />
      <AboutUs />
      <Newsletter />
      <Footer />
    </main>
  )
}