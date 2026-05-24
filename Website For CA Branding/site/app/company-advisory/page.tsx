import { Metadata } from 'next'
import Link from 'next/link'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import InnerPageHero from '@/components/sections/InnerPageHero'
import EngageSection from '@/components/sections/EngageSection'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'Enterprise Technology Positioning & Competitive Strategy — Change Agents',
  description:
    'Category positioning, revenue narrative design, and competitive differentiation for enterprise technology firms operating in India and Asia-Pacific.',
  openGraph: {
    title: 'Enterprise Technology Positioning & Competitive Strategy — Change Agents',
    description:
      'Category positioning, revenue narrative design, and competitive differentiation for enterprise technology firms operating in India and Asia-Pacific.',
    url: 'https://changeagents.in/company-advisory/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Enterprise Technology Positioning & Competitive Strategy — Change Agents',
    description:
      'Category positioning, revenue narrative design, and competitive differentiation for enterprise technology firms operating in India and Asia-Pacific.',
  },
  alternates: { canonical: 'https://changeagents.in/company-advisory/' },
}

export default function CompanyAdvisoryPage() {
  return (
    <>
      {/* WHITE HERO EXPERIMENT — revert: git checkout ca-dark-hero -- app/company-advisory/page.tsx */}
      <section
        className="relative px-6 lg:px-8 py-16 sm:py-24 lg:py-32 overflow-hidden border-b border-[rgba(0,0,0,0.08)]"
        style={{ backgroundColor: '#F5FBFF' }}
      >
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Heading */}
          <h1
            className="font-serif font-extralight text-[#374151]"
            style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: '1.05', letterSpacing: '-0.02em' }}
          >
            Company Market Architecture
          </h1>

          {/* Divider */}
          <hr className="border-none my-10 lg:my-14" style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'rgba(0,0,0,0.12)' }} />

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20">
            {/* Left — italic serif */}
            <p className="font-serif italic text-[#374151]" style={{ fontSize: '1.25rem', lineHeight: '1.65' }}>
              The structural foundation that determines how a firm is positioned, perceived, and placed within a competitive market.
            </p>

            {/* Right — body + CTA */}
            <div>
              <p className="font-normal text-lead text-[#52606D]" style={{ lineHeight: '1.7' }}>
                We work with enterprise technology firms to define how they are positioned in competitive markets — beyond product messaging and marketing narratives. Before amplification. Before visibility. At the point where clarity either exists — or doesn&apos;t.
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
      {/* END WHITE HERO EXPERIMENT */}

      {/* Where We Focus + Typical Situations */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-t border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-12">Where We Focus</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {/* Left — 3 items */}
            <div>
              {[
                {
                  title: "Category positioning and definition",
                  body: "Most firms compete in categories they didn’t define. We help you name and own the space you actually occupy — before someone else does.",
                },
                {
                  title: "Revenue narrative alignment",
                  body: "What leadership believes and what the market hears are often different. We close that gap.",
                },
                {
                  title: "Competitive differentiation",
                  body: "Not what makes you better. What makes you the only logical choice for the clients you want.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5 py-6 first:pt-0">
                  <p className="text-[19px] font-semibold leading-[1.4] text-[#111827] mb-3">{item.title}</p>
                  <p className="text-body font-light leading-[1.7] text-[#374151]">{item.body}</p>
                </div>
              ))}
            </div>

            {/* Right — 2 items */}
            <div>
              {[
                {
                  title: "India and global market positioning",
                  body: "A firm that reads as mid-market in India can read as a credible global player. We work both directions.",
                },
                {
                  title: "Analyst and ecosystem perception",
                  body: "Analysts, partners, and influencers place you before clients ever meet you. We address how that placement happens.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5 py-6 first:pt-0">
                  <p className="text-[19px] font-semibold leading-[1.4] text-[#111827] mb-3">{item.title}</p>
                  <p className="text-body font-light leading-[1.7] text-[#374151]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Situations */}
          <div className="mt-20">
            <h2 className="font-serif font-normal text-title text-[#374151] mb-8">Typical Situations</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1">
              {[
                "Scaling beyond early growth stage",
                "Entering new markets or segments",
                "Repositioning services or offerings",
                "Strengthening enterprise credibility",
                "Aligning leadership narrative with business strategy",
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

      {/* Our Approach */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="[&_h2]:font-serif [&_h2]:font-normal [&_h2]:text-[1.2rem] [&_p]:font-light [&_p]:text-[#374151] [&_p]:text-[1.75rem] [&_p]:leading-[1.4] [&_p]:max-w-[900px] [&_p]:mx-auto">
            <EngageSection
              heading="Our Approach"
              body="We help define the strategy behind your communications before marketing, PR, or content begins. Every engagement is handled directly, confidentially, and by senior leadership."
            />
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
