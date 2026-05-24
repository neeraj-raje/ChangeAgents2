import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HorizontalRule from '@/components/ui/HorizontalRule'

export const metadata: Metadata = {
  title: 'Sharbari Chakraborty — The Collective — Change Agents',
  description:
    'Sharbari Chakraborty works with senior leaders, founders and organizations on communication strategy, narrative development and leadership presence.',
}

const areasOfWork = [
  'Communication strategy and narrative development',
  'Personal and organizational storytelling',
  'Leadership communication and presence',
  'Founder and executive positioning',
  'Coaching leaders through transition and growth',
  'Enabling organizational alignment through communication',
]

const engagementModel = [
  'Independent advisory and coaching engagements',
  'Select collaboration with Change Agents',
  'Long-term or project-based work depending on context',
]

const whenRelevant = [
  'Leadership narrative and organizational reality need alignment',
  'Strategic positioning requires stronger internal and external communication',
  'Founders or senior leaders are navigating transition, visibility or scale',
]

const TickItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#98c451" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
    <span className="font-normal text-body text-[#52606D]" style={{ lineHeight: '1.7' }}>{children}</span>
  </li>
)

export default function SharbariChakrabortyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — Image */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="aspect-square w-full max-w-xs overflow-hidden rounded-lg border border-[rgba(0,0,0,0.1)]">
                <Image
                  src="/assets/team/sharbari-chakraborty.webp"
                  alt="Sharbari Chakraborty — Leadership Coach and Organisational Transformation Advisor"
                  width={400}
                  height={400}
                  className="grayscale-photo w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="mt-6">
                <Link
                  href="/the-collective"
                  className="font-medium text-cta text-[#35506B] hover:opacity-60 transition-opacity duration-200"
                >
                  &larr; Back to The Collective
                </Link>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Name & Role */}
            <div>
              <h1 className="font-serif font-normal text-title text-[#374151]">Sharbari Chakraborty</h1>
              <p className="font-light text-lead text-[#52606D] mt-2">
                Communication Advisor | Narrative Strategist | Coach
              </p>
            </div>

            <HorizontalRule />

            {/* Overview */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-4">
                Overview
              </p>
              <div className="space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Sharbari works with senior leaders, founders and organizations on communication
                  strategy, narrative development and leadership presence.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Her work sits at the intersection of communication, narrative and leadership —
                  helping individuals and organizations align how they think, speak and show up,
                  especially when communication starts to impact clarity, alignment or decision making.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Areas of Work */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-6">
                Areas of Work
              </p>
              <ul className="space-y-3">
                {areasOfWork.map((item, i) => (
                  <TickItem key={i}>{item}</TickItem>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Approach */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-4">
                Approach
              </p>
              <div className="space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Sharbari&apos;s work is grounded in deep listening and contextual understanding,
                  with a strong focus on clarity of thinking as the foundation for effective communication.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  She works closely with leaders to uncover what they truly want to say — and helps
                  them translate that into communication that is clear, intentional and grounded in
                  their reality.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Her approach goes beyond messaging to align thinking, behavior and communication in
                  real situations. This often involves working beneath the surface — not just on what
                  is being said, but on what is shaping it.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Experience */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-4">
                Experience
              </p>
              <div className="space-y-4">
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Sharbari brings over two decades of experience working with senior leaders across
                  industries including technology, biotechnology, finance and retail, as well as NGOs
                  and social impact organizations.
                </p>
                <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                  Her experience spans global organizations including Walmart Global Tech, Société
                  Générale, Novozymes (now Novonesis) and Sonata Software, across both agency and
                  corporate environments.
                </p>
              </div>
            </div>

            <HorizontalRule />

            {/* Working with Change Agents */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-4">
                Working with Change Agents
              </p>
              <p className="font-light text-body text-[#52606D] mb-6" style={{ lineHeight: '1.75' }}>
                Sharbari collaborates with Change Agents on select engagements that require a
                combination of strategic positioning and leadership communication alignment.
                This is typically relevant in situations where:
              </p>
              <ul className="space-y-3">
                {whenRelevant.map((item, i) => (
                  <TickItem key={i}>{item}</TickItem>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Engagement Model */}
            <div>
              <p className="font-normal text-small uppercase tracking-widest text-[#52606D] mb-6">
                Engagement Model
              </p>
              <ul className="space-y-3">
                {engagementModel.map((item, i) => (
                  <TickItem key={i}>{item}</TickItem>
                ))}
              </ul>
            </div>

            <HorizontalRule />

            {/* Perspective */}
            <div>
              <p className="text-[11px] uppercase tracking-label text-[#52606D] mb-4">
                Sharbari&apos;s Perspective
              </p>
              <blockquote>
                <p className="font-serif italic text-[22px] text-[#374151]" style={{ lineHeight: '1.7' }}>
                  &ldquo;The most powerful stories are not always the loudest. They are the clearest.&rdquo;
                </p>
              </blockquote>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
