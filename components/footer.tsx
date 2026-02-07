import Link from "next/link"

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Disclosures", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-16 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-xl font-bold tracking-tight">
              Apex Ventures
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
              Investing in visionary founders building the future of technology.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">{title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-primary-foreground/10 pt-8">
          <p className="text-sm text-primary-foreground/40">
            {'Copyright 2026 Apex Ventures. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
