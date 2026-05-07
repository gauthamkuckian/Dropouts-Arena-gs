import { MapPin, Phone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-primary text-sm font-semibold tracking-wider">ABOUT DROP OUTS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                A TURF THAT
                <br />
                <span className="text-primary">ELEVATES YOUR GAME</span>
              </h2>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              Dropouts is your go-to destination for football and cricket. Whether it&apos;s a casual game or a serious match, our turf is built to deliver the best experience.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Manickpur church road, Old barampur,</p>
                  <p className="text-foreground/70">near mahalaxmi temple, Hanuman nagar,</p>
                  <p className="text-foreground/70">Vasai West, Maharashtra 401202</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a href="tel:+919022400165" className="text-foreground font-semibold text-lg hover:text-primary transition-colors">
                  +91 90224 00165
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">7000</span>
                </div>
                <p className="text-foreground/60 text-sm">Sq Ft</p>
                <p className="text-foreground font-medium">Play Area</p>
              </div>

              <div className="text-center space-y-2">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">30</span>
                </div>
                <p className="text-foreground/60 text-sm">Feet</p>
                <p className="text-foreground font-medium">Height</p>
              </div>
            </div>

            {/* Mini Turf Illustration */}
            <div className="mt-8 bg-primary/10 rounded-xl p-6 relative overflow-hidden">
              <div className="aspect-video relative">
                {/* Soccer field SVG */}
                <svg viewBox="0 0 200 120" className="w-full h-full">
                  {/* Field */}
                  <rect x="5" y="5" width="190" height="110" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  
                  {/* Center line */}
                  <line x1="100" y1="5" x2="100" y2="115" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  
                  {/* Center circle */}
                  <circle cx="100" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <circle cx="100" cy="60" r="2" fill="currentColor" className="text-primary" />
                  
                  {/* Left goal area */}
                  <rect x="5" y="35" width="20" height="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <rect x="5" y="45" width="10" height="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  
                  {/* Right goal area */}
                  <rect x="175" y="35" width="20" height="50" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />
                  <rect x="185" y="45" width="10" height="30" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary" />

                  {/* Soccer ball */}
                  <circle cx="70" cy="70" r="8" fill="white" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
                  <path d="M70 62 L73 66 L71 71 L69 71 L67 66 Z" fill="currentColor" className="text-foreground/40" />

                  {/* Cricket ball */}
                  <circle cx="130" cy="50" r="6" fill="#c41e3a" stroke="#8b0000" strokeWidth="1" />
                  <path d="M124 50 Q130 47 136 50" fill="none" stroke="white" strokeWidth="0.5" />
                  <path d="M124 50 Q130 53 136 50" fill="none" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
            </div>

            <p className="text-center text-primary font-semibold mt-4">Spacious. Safe. Superior.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
