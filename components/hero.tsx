import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/turf.jpg"
          alt="Dropouts Turf"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 md:right-20 z-10 opacity-20">
        <svg viewBox="0 0 100 100" className="w-32 h-32 md:w-48 md:h-48">
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
          <path d="M50 2 L50 98 M2 50 L98 50" stroke="currentColor" strokeWidth="1" className="text-primary" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full py-12">
          <div className="space-y-8">
            {/* Decorative dots */}
            <div className="flex gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="w-2 h-2 rounded-full bg-primary/30" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">MORE GAME.</span>
              <br />
              <span className="text-foreground">LESS INJURIES.</span>
              <br />
              <span className="text-primary">PURE TURF.</span>
            </h1>

            <p className="text-foreground/70 text-lg max-w-md">
              Premium FIFA Certified turf designed for performance, built for everyone.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8">
                <Link href="#pricing">
                  Book a Slot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/30 text-foreground hover:bg-foreground/10 rounded-full px-8">
                <Link href="#turf">Explore Turf</Link>
              </Button>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 max-w-xs">
              <div className="text-center space-y-4">
                <span className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                  LIMITED TIME OFFER
                </span>
                
                <div className="space-y-2">
                    <div className="flex items-baseline justify-center gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-primary">₹700</span>
                        <span className="text-[10px] text-foreground/60 uppercase">Weekdays</span>
                      </div>
                      <div className="flex items-baseline gap-1 border-l border-border pl-2">
                        <span className="text-2xl font-bold text-primary">₹800</span>
                        <span className="text-[10px] text-foreground/60 uppercase">Weekends</span>
                      </div>
                    </div>
                </div>

                <div className="bg-primary text-primary-foreground text-sm font-semibold py-2 px-4 rounded-lg">
                  Till 31st May Only
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
