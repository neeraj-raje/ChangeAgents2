import { Metadata } from 'next'
import Link from 'next/link'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
  description:
    'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
  openGraph: {
    title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
    description:
      'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
    url: 'https://changeagents.in/executive-advisory/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Executive Positioning & Market Architecture for Technology Leaders — Change Agents',
    description:
      'Strategic positioning and market architecture for enterprise technology founders, CEOs, and senior leaders navigating growth, transition, and leadership visibility.',
  },
  alternates: { canonical: 'https://changeagents.in/executive-advisory/' },
}

export default function ExecutiveAdvisoryPage() {
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
            Executive Market Architecture
          </h1>

          <hr className="border-none my-10 lg:my-14" style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'rgba(0,0,0,0.12)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20">
            <p className="font-serif italic text-[#374151]" style={{ fontSize: '1.25rem', lineHeight: '1.65' }}>
              The strategic foundation that shapes how leadership is positioned, perceived, and understood within the market.
            </p>

            <div>
              <p className="font-normal text-lead text-[#52606D]" style={{ lineHeight: '1.7' }}>
                We work with founders, CEOs, and senior leaders to clarify how they are positioned within their industry — and how that positioning translates into influence, opportunity, and long-term relevance.
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

      {/* When Positioning Becomes Important + What We Work On */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-t border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">

          {/* When Positioning Becomes Important */}
          <h2 className="font-serif font-normal text-title text-[#374151] mb-12">When Positioning Becomes Important</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div>
              {[
                {
                  title: 'Stepping into a larger leadership role',
                  body: 'A new leadership role brings greater visibility, expectations, and influence. Executive branding ensures that others perceive your transition with clarity, confidence, and credibility.',
                },
                {
                  title: 'Preparing for a career transition',
                  body: 'Career transitions are not just about changing roles. Positioning yourself for them is equally important. The right visibility, perception, and industry narrative can shape how confidently you step into what comes next.',
                },
                {
                  title: 'Building influence within your industry',
                  body: 'Expertise alone is rarely enough. Consistent visibility and a clear professional narrative help establish credibility, strengthen trust, and expand your influence within the industry.',
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
                  title: 'After a major professional milestone',
                  body: 'A promotion, award, acquisition, funding round, or successful turnaround can become a defining career moment. The right visibility can help turn that achievement into long-term professional credibility and opportunities.',
                },
                {
                  title: 'When your online presence no longer reflects your experience',
                  body: 'Your reputation often forms before conversations begin. Executive branding helps align your public presence with the leader you\'ve become.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5 py-6 first:pt-0">
                  <p className="text-[19px] font-semibold leading-[1.4] text-[#111827] mb-3">{item.title}</p>
                  <p className="text-body font-light leading-[1.7] text-[#374151]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Work On */}
          <div className="mt-20">
            <h2 className="font-serif font-normal text-title text-[#374151] mb-8">What We Work On</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
              {[
                'Strategic positioning and differentiation',
                'Leadership narrative and identity',
                'Industry relevance and perception',
                'Visibility architecture',
                'Long-term influence design',
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

        </div>
      </section>

      {/* How We Engage */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="[&_h2]:font-serif [&_h2]:font-normal [&_h2]:text-[1.2rem] [&_p]:font-light [&_p]:text-[#374151] [&_p]:text-[1.75rem] [&_p]:leading-[1.4] [&_p]:max-w-[900px] [&_p]:mx-auto">
            <EngageSection
              heading="How We Engage"
              body="All work is direct, confidential, and founder-led. We do not function as a content production or visibility agency. Our focus is on shaping strategic positioning before communication and amplification begin."
            />
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
