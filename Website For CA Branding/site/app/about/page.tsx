import { Metadata } from 'next'
import Image from 'next/image'
import DarkCTAFooter from '@/components/sections/DarkCTAFooter'

export const metadata: Metadata = {
  title: 'About Change Agents — Strategic Advisory Practice, India',
  description:
    'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
  openGraph: {
    title: 'About Change Agents — Strategic Advisory Practice, India',
    description:
      'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
    url: 'https://changeagents.in/about/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About Change Agents — Strategic Advisory Practice, India',
    description:
      'Change Agents is a founder-led strategic advisory practice working at the level of enterprise market architecture. Meet the team behind the work.',
  },
  alternates: { canonical: 'https://changeagents.in/about/' },
}

const team = [
  {
    image: '/assets/team/shubhendu-nath.webp',
    alt: 'Shubhendu Nath — Founder and Lead Advisor, Change Agents',
    title: 'Strategic Advisory',
    subtitle: 'Led directly by Shubhendu Nath',
    body: 'All engagements are shaped at the level of enterprise market architecture, positioning, and narrative alignment.',
  },
  {
    image: '/assets/team/neeraj-raje.webp',
    alt: 'Neeraj Raje — Digital and Narrative Strategy, Change Agents',
    title: 'Digital Strategy and Activation',
    subtitle: 'Led by Neeraj Raje',
    body: 'Where required, strategic thinking is translated into visible platforms through content, digital presence, and narrative amplification.',
  },
  {
    image: '/assets/team/krishnananda.webp',
    alt: 'Krishnananda — Institutional and Execution Lead, Change Agents',
    title: 'Institutional & Execution Backbone',
    subtitle: 'Anchored by Krishnananda V',
    body: 'Ensuring continuity, operational depth, and execution capability when activation is required.',
  },
]

export default function AboutPage() {
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
            About Change Agents
          </h1>

          <hr className="border-none my-10 lg:my-14" style={{ borderTopWidth: '1px', borderTopStyle: 'solid', borderTopColor: 'rgba(0,0,0,0.12)' }} />

          <div className="max-w-3xl">
            <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.7' }}>
              Some positioning problems look like communications problems. They&apos;re not. They&apos;re structural — rooted in how a firm or its leadership is placed within a competitive market, how its narrative aligns with its actual trajectory, and whether the architecture underneath the messaging can hold weight.
            </p>
            <p className="font-light text-body text-[#52606D] mt-4" style={{ lineHeight: '1.7' }}>
              We work at that level. Before amplification. Before visibility. At the point where clarity either exists — or doesn&apos;t. We work with enterprise technology leaders and firms who want to determine their own position in the market — not the way market forces have placed them.
            </p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-white px-6 lg:px-8 py-20 lg:py-28 border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-[rgba(0,0,0,0.1)]">
                <Image
                  src="/assets/team/shubhendu-nath.webp"
                  alt="Shubhendu Nath — Founder and Lead Advisor, Change Agents"
                  width={320}
                  height={320}
                  className="grayscale-photo w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-8">
              <h2 className="font-serif font-normal text-title text-[#374151]">Shubhendu Nath</h2>
              <p className="font-light text-lead text-[#52606D] mt-2">Founder, Change Agents</p>

              <div className="mt-6 max-w-prose space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Two decades of working inside enterprise technology ecosystems — across founders, country
                  heads, scaling firms, and market transitions — produce a particular kind of clarity.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  You begin to see where positioning breaks. Where narrative drifts from strategic reality.
                  Where leaders are well-regarded but structurally misplaced in their own market.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  That&apos;s the work Shubhendu does. Directly, with a small number of leaders and firms
                  each year.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  His experience spans enterprise technology across India and Asia-Pacific — infrastructure,
                  cybersecurity, SaaS, distribution, and digital transformation — at moments of growth,
                  transition, and scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#F5FBFF] px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-8">How We Work</h2>
          <p className="font-light text-body text-[#52606D] max-w-2xl mb-12" style={{ lineHeight: '1.75' }}>
            Change Agents operates as a founder-led strategic advisory practice, working with a limited
            number of enterprise technology leaders and firms each year. Each engagement is anchored in
            direct involvement at the strategic level, and supported by complementary expertise where
            required.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.title} className="flex flex-col">
                <div className="aspect-square w-full max-w-[200px] overflow-hidden rounded-lg border border-[rgba(0,0,0,0.1)] mb-5">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    width={200}
                    height={200}
                    className="grayscale-photo w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827]">{member.title}</h3>
                <p className="font-light text-small text-[#52606D] italic mt-1 mb-3">
                  {member.subtitle}
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>{member.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DarkCTAFooter />
    </>
  )
}
