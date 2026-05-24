import { Metadata } from 'next'
import Link from 'next/link'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'PR & Strategic Communications for Enterprise Technology — Change Agents',
  description:
    'Integrated PR, media strategy, and narrative activation for enterprise technology firms — grounded in strategic clarity, not promotional campaigns.',
  openGraph: {
    title: 'PR & Strategic Communications for Enterprise Technology — Change Agents',
    description:
      'Integrated PR, media strategy, and narrative activation for enterprise technology firms — grounded in strategic clarity, not promotional campaigns.',
    url: 'https://changeagents.in/communications/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'PR & Strategic Communications for Enterprise Technology — Change Agents',
    description:
      'Integrated PR, media strategy, and narrative activation for enterprise technology firms — grounded in strategic clarity, not promotional campaigns.',
  },
  alternates: { canonical: 'https://changeagents.in/communications/' },
}

export default function CommunicationsPage() {
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
            Communications, Visibility &amp; Narrative Activation
          </h1>

          <hr className="border-none my-10 lg:my-14" style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'rgba(0,0,0,0.12)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20">
            <p className="font-serif italic text-[#374151]" style={{ fontSize: '1.25rem', lineHeight: '1.65' }}>
              Strategic clarity that stays internal, changes nothing.
            </p>

            <div>
              <p className="font-normal text-lead text-[#52606D]" style={{ lineHeight: '1.7' }}>
                Market architecture becomes consequential only when it reaches the people, platforms, and conversations that matter. The work of activation — translating positioning into presence, narrative into perception — is not separate from strategy. It is where strategy proves itself.
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

      {/* What This Looks Like */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-t border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-12">What This Looks Like</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div>
              {[
                {
                  title: 'Media strategy and engagement',
                  body: 'Identifying where your narrative belongs and how it lands, not just where it appears.',
                },
                {
                  title: 'Analyst relations',
                  body: 'Shaping how your firm and its leadership are understood by the institutional voices that influence enterprise perception.',
                },
                {
                  title: 'Thought leadership',
                  body: 'Structured perspectives that reflect genuine strategic clarity, not manufactured visibility.',
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
                  title: 'Industry presence',
                  body: 'Conferences, panels, and platforms where positioning is demonstrated, not just stated.',
                },
                {
                  title: 'Digital presence',
                  body: 'LinkedIn, long-form platforms, and search visibility as expressions of market architecture, not marketing activity.',
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

      {/* Platforms for Long-Term Authority */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-8">Platforms for Long-Term Authority</h2>
          <p className="font-light text-body text-[#52606D] mb-8" style={{ lineHeight: '1.75' }}>
            For leaders building sustained market presence, we work on the structures that compound over time. These are not content calendars. They are positioning infrastructure.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
            {[
              'Newsletters',
              'Research and long-form publishing',
              'Podcast or video series',
              'Book development',
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

      {/* AI-Enabled Activation */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="max-w-[100ch] mx-auto">
              <h2 className="font-serif font-normal text-title text-[#374151]">
                AI-Enabled Activation
              </h2>
              <p className="font-light text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                We use AI intentionally to extract insight from conversations, identify relevant
                opportunities, and extend strategic thinking across formats and channels. It helps
                accelerate execution and scale communication efficiently. But clarity, positioning,
                and strategic direction always come first.
              </p>
              <p className="font-light text-body text-[#52606D] mt-4 italic" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
                We do not begin with visibility. We begin with understanding what should be seen,
                communicated, and amplified.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
