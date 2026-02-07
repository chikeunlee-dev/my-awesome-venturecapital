import Link from "next/link"
import { ArrowRight, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Let&apos;s Talk About Your Vision
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether you&apos;re a founder looking for investment or a partner exploring opportunities, we&apos;d love to hear from you.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Mail className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">hello@apexventures.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Office</p>
                  <p className="text-sm text-muted-foreground">Seoul, South Korea</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - CTA card */}
          <div className="flex flex-col justify-center rounded-2xl border border-border bg-background p-10 lg:p-12">
            <h3 className="font-serif text-2xl font-bold text-foreground">Submit Your Pitch</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              We review every submission and respond within two weeks. Please include your pitch deck, a brief overview of your company, and your contact information.
            </p>
            <Link
              href="mailto:hello@apexventures.com"
              className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
