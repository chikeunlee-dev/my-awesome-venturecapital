import Image from "next/image"
import { Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "David Kim",
    title: "Managing Partner",
    bio: "20+ years in venture capital and technology. Previously led investments at Goldman Sachs and served as CTO of a Fortune 500 company.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Sarah Park",
    title: "General Partner",
    bio: "Former founder with two successful exits. Specializes in AI, SaaS, and enterprise technology investments.",
    image: "/images/team-2.jpg",
  },
  {
    name: "James Lee",
    title: "Partner",
    bio: "Deep expertise in fintech and blockchain. Previously VP of Product at a leading digital payments company.",
    image: "/images/team-3.jpg",
  },
  {
    name: "Emily Choi",
    title: "Principal",
    bio: "Focused on early-stage healthtech and biotech investments. PhD in Biomedical Engineering from MIT.",
    image: "/images/team-4.jpg",
  },
]

export function Team() {
  return (
    <section id="team" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Team
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Experienced Investors, Trusted Partners
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Our team combines decades of investment experience with deep operational expertise across multiple technology sectors.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <button type="button" aria-label={`${member.name}'s LinkedIn`} className="text-muted-foreground transition-colors hover:text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm font-medium text-muted-foreground">{member.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
