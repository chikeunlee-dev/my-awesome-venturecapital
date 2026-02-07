import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getCompanyBySlug } from "@/lib/portfolio-data"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)
  if (!company) return { title: "Company Not Found" }
  return {
    title: `${company.name} | Apex Ventures Portfolio`,
    description: company.description,
  }
}

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const company = getCompanyBySlug(slug)

  if (!company) notFound()

  const { extendedContent } = company

  return (
    <main>
      <Navbar />
      <section className="bg-primary py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Portfolio로 돌아가기
          </Link>

          <div className="mt-12">
            <span className="inline-block rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground/70">
              {company.stage}
            </span>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              {company.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-primary-foreground/60">
              {company.category}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              {company.description}
            </p>
          </div>

          {extendedContent && (
            <div className="mt-16 space-y-12">
              <div>
                <h2 className="text-xl font-semibold text-primary-foreground">
                  회사 소개
                </h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  {extendedContent.overview}
                </p>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  {extendedContent.about}
                </p>
              </div>

              {extendedContent.highlights && extendedContent.highlights.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-primary-foreground">
                    주요 특징
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {extendedContent.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-primary-foreground/80"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-foreground/60" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
