import Image from "next/image"
import Link from "next/link"
import { Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Our Turf", href: "#turf" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
]

const turfInfo = [
  "FIFA Certified Since 2024",
  "Less Injuries",
  "7000 Sq Ft Play Area",
  "30 Feet Height",
]

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Dropouts Turf Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
            <p className="text-foreground/60 text-sm leading-relaxed">
              Play smart. Bet on your skill.<br />
              Dropouts is your ultimate sports destination for the best turf experience.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/dropouts.turf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="tel:+919022400165"
                className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 90224 00165</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* The Turf */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">The Turf</h3>
            <ul className="space-y-3">
              {turfInfo.map((info) => (
                <li key={info} className="text-foreground/60 text-sm">
                  {info}
                </li>
              ))}
            </ul>
          </div>

          {/* Book a Slot */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Book a Slot</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">₹700</span>
                  <span className="text-foreground/60 text-sm">/hr WEEKDAYS</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-primary">₹800</span>
                  <span className="text-foreground/40 text-sm">/hr WEEKENDS</span>
                </div>
              </div>

              <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                Till 31st May Only
              </div>

              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                <Link href="tel:+919022400165">Book Now →</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/60 text-sm">
            © 2025 Dropouts. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Terms & Conditions
            </Link>
            <span className="text-foreground/30">|</span>
            <Link href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
