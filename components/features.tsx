import { Shield, Heart, Maximize2, ArrowUpFromLine } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "FIFA Certified Grass",
    description: "World-class quality for the best game.",
  },
  {
    icon: Heart,
    title: "Less Injuries",
    description: "Advanced shock-absorption for player safety.",
  },
  {
    icon: Maximize2,
    title: "7000 Sq Ft",
    description: "Spacious play area for every game.",
  },
  {
    icon: ArrowUpFromLine,
    title: "30 Feet Height",
    description: "High ceiling for unrestricted play.",
  },
]

export function Features() {
  return (
    <section className="py-8 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                <p className="text-foreground/60 text-xs mt-1">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
