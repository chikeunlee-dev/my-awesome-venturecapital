"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight text-foreground">
          Apex Ventures
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
