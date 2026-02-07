import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { portfolioCompanies } from "@/lib/portfolio-data"

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/60">
            Portfolio
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
            Companies We Back
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            We invest across technology sectors, from AI and fintech to cleantech and cybersecurity, partnering with founders who are reshaping industries.
          </p>
        </div>

        <div className="grid gap-px bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioCompanies.map((company) => (
            <Link
              key={company.name}
              href={`/companies/${company.slug}`}
              className="group flex flex-col justify-between bg-primary p-8 transition-colors hover:bg-primary-foreground/5 lg:p-10"
            >
              <div>
                <div className="flex items-start justify-between">
                  <span className="inline-block rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground/70">
                    {company.stage}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-primary-foreground/30 transition-colors group-hover:text-primary-foreground/70" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-primary-foreground">{company.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary-foreground/50">{company.category}</p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">{company.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
