import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center lg:px-8">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
          Venture Capital
        </p>
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Investing in Visionary Founders Building the Future
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
          We partner with exceptional entrepreneurs at the earliest stages to build transformative companies that shape industries and improve lives.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#portfolio"
            className="group flex items-center gap-2 rounded-full bg-background px-7 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Our Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#about"
            className="flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
