import { Metadata } from 'next'
import Link from 'next/link'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
  description:
    'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
  openGraph: {
    title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
    description:
      'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
    url: 'https://changeagents.in/strategic-inflection/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Advisory for M&A, Leadership Transitions & Market Entry — Change Agents',
    description:
      'High-trust advisory during M&A, leadership transitions, market entry, and structural repositioning for enterprise technology firms and senior leaders.',
  },
  alternates: { canonical: 'https://changeagents.in/strategic-inflection/' },
}

export default function StrategicInflectionPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[rgba(0,0,0,0.08)]"
        style={{ backgroundColor: '#F5FBFF' }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1
            className="font-serif font-extralight text-[#374151]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            Strategic Inflection Advisory
          </h1>

          <hr className="border-none my-10 lg:my-14" style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'rgba(0,0,0,0.12)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20">
            <p className="font-serif italic text-[#374151]" style={{ fontSize: '1.25rem', lineHeight: '1.65' }}>
              At critical moments, positioning decisions carry disproportionate impact.
            </p>

            <div>
              <p className="font-normal text-lead text-[#52606D]" style={{ lineHeight: '1.7' }}>
                We work with leaders and firms during high-stakes transitions where clarity, timing, and narrative alignment are essential. M&amp;A, leadership change, market entry, or structural repositioning — each demands a different kind of strategic attention.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="font-medium text-cta text-[#111827] no-underline pb-0.5 hover:opacity-70 transition-opacity duration-200"
                  style={{ borderBottom: '1px solid rgba(0,0,0,0.4)' }}
                >
                  Request a Conversation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Engagements */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-t border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-12">Typical Engagements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div>
              {[
                {
                  title: 'Leadership transitions',
                  body: 'Maintain strategic continuity and market confidence during periods of leadership change. Stay aligned and preserve trust through transition.',
                },
                {
                  title: 'Market entry or expansion',
                  body: 'Enter new markets and expand into new areas with strategic clarity. Grow with confidence, alignment, and a clear market position.',
                },
                {
                  title: 'M&A and pre/post-acquisition positioning',
                  body: 'Navigate mergers and acquisitions with clear strategic positioning. Maintain continuity, alignment, and stakeholder confidence before and after transition.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5 py-6 first:pt-0">
                  <p className="text-[19px] font-semibold leading-[1.4] text-[#111827] mb-3">{item.title}</p>
                  <p className="text-body font-light leading-[1.7] text-[#374151]">{item.body}</p>
                </div>
              ))}
            </div>

            <div>
              {[
                {
                  title: 'Crisis or reputation recalibration',
                  body: 'Rebuild trust and restore confidence during challenging moments. Respond with clarity, stability, and strategic direction.',
                },
                {
                  title: 'Structural repositioning',
                  body: 'Redefine how a company is perceived as the business evolves. Re-align market perception with changing priorities, structure, and direction.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5 py-6 first:pt-0">
                  <p className="text-[19px] font-semibold leading-[1.4] text-[#111827] mb-3">{item.title}</p>
                  <p className="text-body font-light leading-[1.7] text-[#374151]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nature of Work */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-8">Nature of Work</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
            {[
              'Short-duration, high-intensity',
              'Direct founder involvement',
              'Confidential and context-driven',
              'Focused on clarity, not volume',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 py-2">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#98c451" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span className="text-[19px] font-normal leading-[1.4] text-[#111827]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="[&_h2]:font-serif [&_h2]:font-normal [&_h2]:text-[1.2rem] [&_p]:font-light [&_p]:text-[#374151] [&_p]:text-[1.75rem] [&_p]:leading-[1.4] [&_p]:max-w-[900px] [&_p]:mx-auto">
            <EngageSection
              heading="How We Engage"
              body="Strategic Inflection engagements are structured around a specific moment or transition. They are shorter and more intensive than ongoing advisory retainers. All work is direct, confidential, and founder-led."
            />
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
