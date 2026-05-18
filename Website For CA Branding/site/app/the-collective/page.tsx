import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = {
  title: 'Senior Advisory Network for Enterprise Technology — Change Agents',
  description:
    'The Change Agents Collective: a curated group of independent senior advisors who collaborate on select engagements requiring broader combinations of perspectives.',
  openGraph: {
    title: 'Senior Advisory Network for Enterprise Technology — Change Agents',
    description:
      'The Change Agents Collective: a curated group of independent senior advisors who collaborate on select engagements requiring broader combinations of perspectives.',
    url: 'https://changeagents.in/the-collective/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Senior Advisory Network for Enterprise Technology — Change Agents',
    description:
      'The Change Agents Collective: a curated group of independent senior advisors who collaborate on select engagements requiring broader combinations of perspectives.',
  },
  alternates: { canonical: 'https://changeagents.in/the-collective/' },
}

export default function TheCollectivePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden"
        style={{ backgroundColor: '#0C1420' }}
      >
        {/* Aurora bands */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -inset-[10px] opacity-30 blur-[80px] animate-aurora will-change-[background-position]"
            style={{
              backgroundImage: 'repeating-linear-gradient(100deg, #0C1420 0%, #111E30 15%, #182840 30%, #1E3350 45%, #111E30 60%, #0C1420 75%)',
              backgroundSize: '400% 100%',
            }}
          />
        </div>
        <div
          className="absolute pointer-events-none w-[600px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
            top: '-15%',
            left: '25%',
          }}
        />
        <div
          className="absolute pointer-events-none w-[400px] h-[350px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(ellipse, rgba(14, 30, 55, 0.5) 0%, transparent 70%)',
            bottom: '-20%',
            left: '10%',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <p
            className="font-light text-small uppercase tracking-label text-white/50 mb-6"
          >
            The Collective
          </p>
          <h1 className="font-bold text-display text-white mb-6">
            The Change Agents Collective
          </h1>

          <p className="font-normal text-lead text-white/70 italic mb-8">
            Enterprise positioning problems rarely arrive in isolation.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
            <div style={{ flex: 1 }}>
              <p className="font-normal text-lead text-white/70">
                A leadership transition carries behavioural complexity. A market repositioning surfaces organisational misalignment. A founder&apos;s narrative often reflects — or conceals — something deeper about how they lead.
              </p>
              <p className="font-normal text-lead text-white/70 mt-4">
                The Change Agents Collective is a small group of senior independents — each operating in their own right — whose domains intersect precisely where positioning work becomes complex.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p className="font-normal text-lead text-white/70">
                We work together selectively, when the situation calls for it, with Change Agents anchoring the strategic direction.
              </p>
              <p className="font-normal text-lead text-white/70 mt-4">
                This is not a network. It is not a marketplace. It is a set of relationships built over time, activated by context, and held together by a shared philosophy: that clarity at the structural level requires more than one lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Works / The Approach — side-by-side */}
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-[#E8E2D8] px-8 lg:px-16 py-20 lg:py-28">
          <h2 className="font-medium text-heading text-[#111827] mb-8">How This Works</h2>
          <div className="space-y-4 max-w-md">
            <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
              Each advisor maintains an independent identity and practice.
            </p>
            <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
              Engagement is selective and context-driven. Collaboration is based on trust, relevance, and fit — not retainer or roster.
            </p>
          </div>
        </div>
        <div className="flex-1 bg-[#F6F3EE] px-8 lg:px-16 py-20 lg:py-28">
          <h2 className="font-medium text-heading text-[#111827] mb-8">The Approach</h2>
          <div className="space-y-4 max-w-md">
            <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
              All engagements remain anchored in Change Agents&apos; strategic direction.
            </p>
            <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
              The Collective extends the work — bringing depth in leadership, behaviour, and organisational alignment at the moments when positioning alone isn&apos;t enough.
            </p>
          </div>
        </div>
      </div>

      {/* Advisors */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <SectionLabel className="mb-10 text-center block">ADVISORS</SectionLabel>

          <div className="bg-white border border-rule rounded-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="md:w-72 flex-shrink-0">
                <div className="aspect-square w-full overflow-hidden">
                  <Image
                    src="/assets/images/SharbariChakraborty_ProfilePic.webp"
                    alt="Sharbari Chakraborty — Communication Advisor, Narrative Strategist and Coach"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover grayscale-photo"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-between p-8 lg:p-10 flex-1">
                <div>
                  <h3 className="font-bold text-heading text-[#111827]">Sharbari Chakraborty</h3>
                  <p className="font-normal text-small text-[#52606D] mt-1">
                    Communication Advisor | Narrative Strategist | Coach
                  </p>
                  <div className="mt-5 space-y-3 max-w-prose">
                    <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                      Sharbari works with senior leaders, founders and organisations on communication strategy, narrative development and leadership presence.
                    </p>
                    <p className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                      Her work sits at the intersection of communication, narrative and leadership — helping individuals and organisations align how they think, speak and show up, especially when communication starts to impact clarity, alignment or decision making.
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <Link
                    href="/the-collective/sharbari-chakraborty"
                    className="inline-block font-medium text-cta text-[#35506B] hover:opacity-60 transition-opacity"
                  >
                    View Profile &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
