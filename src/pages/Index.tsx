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
    <main className="min-h-screen">
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
