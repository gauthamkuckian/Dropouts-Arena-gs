import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, IndianRupee, Trophy, ArrowRight } from "lucide-react"

const benefits = [
  { icon: Trophy, label: "Best Turf Experience" },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="bg-secondary/50 border border-border rounded-3xl p-8 md:p-12">
          <div className="text-center space-y-2 mb-8">
            <span className="text-primary/80 text-sm font-semibold tracking-wider">BOOK YOUR SLOT</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Play More. Pay Less.
            </h2>
            <p className="text-foreground/60">Limited Time Offer</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-background/50 rounded-xl p-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>

            {/* Pricing Card */}
            <div className="bg-background border border-border rounded-2xl p-6 text-center">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl md:text-5xl font-bold text-primary">₹700</span>
                      <span className="text-foreground/60">/hr</span>
                    </div>
                    <p className="text-foreground/60 text-sm">Weekdays</p>
                  </div>
                  <div className="w-px h-16 bg-border" />
                  <div>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl md:text-4xl font-bold text-primary">₹800</span>
                      <span className="text-foreground/40">/hr</span>
                    </div>
                    <p className="text-foreground/60 text-sm">Weekends</p>
                  </div>
                </div>

                <div className="inline-block bg-primary/20 text-primary text-sm font-semibold px-4 py-2 rounded-lg">
                  Till 31st May Only
                </div>

                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  <Link href="tel:+919022400165">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
