import { Gamepad2, Goal, Snowflake, CircleDot } from "lucide-react"

const upcomingFeatures = [
  {
    icon: Gamepad2,
    title: "PS5 Lounge",
    description: "Gaming zone with latest consoles",
  },
  {
    icon: Goal,
    title: "2 Cricket Nets",
    description: "Practice nets for batsmen",
  },
  {
    icon: Snowflake,
    title: "Ice Bath",
    description: "Recovery facility for athletes",
  },
  {
    icon: CircleDot,
    title: "Pickle Ball Court",
    description: "Coming soon for enthusiasts",
  },
]

export function ComingSoon() {
  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2 mb-12">
          <span className="text-primary/80 text-sm font-semibold tracking-wider">{"WHAT'S COMING NEXT"}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            More Than Just a Turf
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Exciting new experiences coming soon to Dropouts.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {upcomingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
              <p className="text-foreground/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
