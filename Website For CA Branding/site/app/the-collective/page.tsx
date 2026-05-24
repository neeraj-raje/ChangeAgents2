import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

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
        className="relative px-6 lg:px-8 py-24 lg:py-32 overflow-hidden border-b border-[rgba(0,0,0,0.08)]"
        style={{ backgroundColor: '#F5FBFF' }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1
            className="font-serif font-extralight text-[#374151]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            The Change Agents Collective
          </h1>

          <p className="font-serif italic text-[#374151] mt-10" style={{ fontSize: '1.25rem', lineHeight: '1.65' }}>
            Enterprise positioning problems rarely arrive in isolation.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-10 mt-8">
            <div style={{ flex: 1 }}>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                A leadership transition carries behavioural complexity. A market repositioning surfaces organisational misalignment. A founder&apos;s narrative often reflects — or conceals — something deeper about how they lead.
              </p>
              <p className="font-light text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75' }}>
                The Change Agents Collective is a small group of senior independents — each operating in their own right — whose domains intersect precisely where positioning work becomes complex.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                We work together selectively, when the situation calls for it, with Change Agents anchoring the strategic direction.
              </p>
              <p className="font-light text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75' }}>
                This is not a network. It is not a marketplace. It is a set of relationships built over time, activated by context, and held together by a shared philosophy: that clarity at the structural level requires more than one lens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How This Works / The Approach — 2-col grid */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-t border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
            {/* LHS */}
            <div className="lg:pr-16">
              <h2 className="font-serif font-normal text-title text-[#374151] mb-8">How This Works</h2>
              <div className="space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Each advisor maintains an independent identity and practice.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Engagement is selective and context-driven. Collaboration is based on trust, relevance, and fit — not retainer or roster.
                </p>
              </div>
            </div>
            {/* RHS */}
            <div className="lg:pl-16 lg:border-l lg:border-[rgba(0,0,0,0.08)]">
              <h2 className="font-serif font-normal text-title text-[#374151] mb-8">The Approach</h2>
              <div className="space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  All engagements remain anchored in Change Agents&apos; strategic direction.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  The Collective extends the work — bringing depth in leadership, behaviour, and organisational alignment at the moments when positioning alone isn&apos;t enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-10">Advisors</h2>

          <div className="bg-white border border-[rgba(0,0,0,0.1)] rounded-lg overflow-hidden">
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
                  <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827]">Sharbari Chakraborty</h3>
                  <p className="font-normal text-small text-[#52606D] mt-1">
                    Communication Advisor | Narrative Strategist | Coach
                  </p>
                  <div className="mt-5 space-y-3 max-w-prose">
                    <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                      Sharbari works with senior leaders, founders and organisations on communication strategy, narrative development and leadership presence.
                    </p>
                    <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
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
