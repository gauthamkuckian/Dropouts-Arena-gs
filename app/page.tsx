import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Pricing } from "@/components/pricing"
import { ComingSoon } from "@/components/coming-soon"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <section id="turf">
        <Gallery />
      </section>
      <Pricing />
      <ComingSoon />
      <Footer />
    </main>
  )
}
