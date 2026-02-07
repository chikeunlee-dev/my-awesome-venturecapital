import { TrendingUp, Lightbulb, Users, Target } from "lucide-react"

const stats = [
  { value: "$2.5B+", label: "Assets Under Management" },
  { value: "120+", label: "Portfolio Companies" },
  { value: "15+", label: "Years of Experience" },
  { value: "40+", label: "Successful Exits" },
]

const values = [
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "We identify and support high-growth companies with the potential to transform their industries.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We back founders with bold ideas who are pushing the boundaries of what technology can achieve.",
  },
  {
    icon: Users,
    title: "Partnership Driven",
    description: "We go beyond capital, providing hands-on strategic guidance and access to our global network.",
  },
  {
    icon: Target,
    title: "Long-term Vision",
    description: "We are patient investors committed to building enduring businesses that create lasting value.",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 border-b border-border pb-16 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">Our Mission</p>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl text-balance">
              Building Tomorrow, Together
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              At Apex Ventures, we believe the greatest companies are built by passionate founders 
              with a clear vision for the future. Our mission is to identify, invest in, and support 
              these exceptional individuals as they build transformative businesses. We provide not just 
              capital, but strategic guidance, industry expertise, and a powerful network of connections.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-foreground/20">
              <value.icon className="h-6 w-6 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
