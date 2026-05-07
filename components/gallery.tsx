import Image from "next/image"

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2 mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider">OUR GALLERY</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience The Arena
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden group">
            <Image
              src="/images/turf.jpg"
              alt="Dropouts Turf - Night View"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                Night Games
              </span>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden group bg-card border border-border flex items-center justify-center">
            {/* Soccer and Cricket illustration */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <svg viewBox="0 0 300 200" className="w-full h-full max-w-md">
                {/* Background field pattern */}
                <rect x="20" y="20" width="260" height="160" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/30" rx="8" />
                
                {/* Vertical stripes */}
                {[60, 100, 140, 180, 220].map((x, i) => (
                  <line key={i} x1={x} y1="20" x2={x} y2="180" stroke="currentColor" strokeWidth="1" className="text-primary/10" />
                ))}

                {/* Soccer Ball */}
                <g transform="translate(100, 100)">
                  <circle r="35" fill="white" stroke="currentColor" strokeWidth="2" className="text-foreground/60" />
                  {/* Pentagon pattern */}
                  <path d="M0 -20 L11 -6 L7 9 L-7 9 L-11 -6 Z" fill="currentColor" className="text-foreground/80" />
                  <path d="M0 -35 L10 -25 L0 -20 L-10 -25 Z" fill="currentColor" className="text-foreground/40" />
                  <path d="M20 -10 L11 -6 L7 9 L18 12 L25 0 Z" fill="currentColor" className="text-foreground/40" />
                  <path d="M-20 -10 L-11 -6 L-7 9 L-18 12 L-25 0 Z" fill="currentColor" className="text-foreground/40" />
                  <path d="M12 25 L7 9 L-7 9 L-12 25 L0 32 Z" fill="currentColor" className="text-foreground/40" />
                </g>

                {/* Cricket Ball */}
                <g transform="translate(200, 100)">
                  <circle r="30" fill="#c41e3a" stroke="#8b0000" strokeWidth="2" />
                  {/* Seam */}
                  <path d="M-30 0 Q-15 -20 0 -30 Q15 -20 30 0" fill="none" stroke="white" strokeWidth="2" />
                  <path d="M-30 0 Q-15 20 0 30 Q15 20 30 0" fill="none" stroke="white" strokeWidth="2" />
                  {/* Stitch lines */}
                  <path d="M-28 -5 Q-15 -22 0 -28" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M-28 5 Q-15 22 0 28" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M28 -5 Q15 -22 0 -28" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M28 5 Q15 22 0 28" fill="none" stroke="white" strokeWidth="1" strokeDasharray="3 2" />
                </g>

                {/* Text */}
                <text x="150" y="180" textAnchor="middle" className="fill-primary text-sm font-semibold">Football &amp; Cricket</text>
              </svg>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                Multi-Sport Arena
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
