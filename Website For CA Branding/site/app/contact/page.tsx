import { Metadata } from 'next'
import ContactForm from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Start a Conversation — Change Agents Strategic Advisory',
  description:
    'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential. Reach us at hello@changeagents.in.',
  openGraph: {
    title: 'Start a Conversation — Change Agents Strategic Advisory',
    description:
      'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential. Reach us at hello@changeagents.in.',
    url: 'https://changeagents.in/contact/',
    images: [{ url: '/assets/logo/ChangeAgents_Logo_new.png', width: 800, height: 226 }],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Start a Conversation — Change Agents Strategic Advisory',
    description:
      'We work with a limited number of enterprise technology leaders and firms each year. All conversations are confidential.',
  },
  alternates: { canonical: 'https://changeagents.in/contact/' },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero / Intro + Form */}
      <section className="bg-gradient-to-br from-slate-900 via-aurora-blue-900 to-slate-900 px-6 lg:px-8 py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle aurora glow */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-aurora-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-indigo-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — Intro */}
            <div>
              <h1
                className="font-serif font-extralight text-white mb-8"
                style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.6rem)', lineHeight: '1.2', letterSpacing: '-0.02em' }}
              >
                We work with a limited number of enterprise leaders and firms each year.
              </h1>
              <div className="space-y-5 max-w-[52ch]">
                <p className="font-light text-body text-white/70">
                  If you would like to explore a potential engagement, write to us:
                </p>
                <a
                  href="mailto:hello@changeagents.in"
                  className="block font-medium text-lead text-white hover:text-white/80 transition-colors duration-200 underline underline-offset-4"
                >
                  hello@changeagents.in
                </a>
                <p className="font-light text-body text-white/70">
                  Engagements begin with a short exploratory conversation; no brief required, no proposal
                  expected. Just a direct discussion about where you are and whether there&apos;s a fit.
                </p>
                <p className="font-light text-small text-white/50 italic mt-6">
                  All conversations are confidential.
                </p>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white px-6 lg:px-8 py-16 lg:py-20 border-b border-[rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-10 text-center">Testimonials</h2>

          <div className="flex flex-col md:flex-row">

            <div className="flex-1 md:pr-12 md:border-r border-[rgba(0,0,0,0.08)] pb-10 md:pb-0">
              <div className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5">
                <p className="font-serif italic text-[17px] text-[#374151]" style={{ lineHeight: '1.65' }}>
                  &ldquo;Change Agents have helped us in creating a brand image of Inspan to higher degree among our target segments.&rdquo;
                </p>
                <div className="mt-5">
                  <p className="font-semibold text-[13px] text-[#111827]">Sudhir S</p>
                  <p className="text-[13px] text-[#52606D]">MD, Inspan Infotech</p>
                </div>
              </div>
            </div>

            <div className="flex-1 md:pl-12 pt-10 md:pt-0">
              <div className="border-l-[1.5px] border-[rgba(0,0,0,0.15)] pl-5">
                <p className="font-serif italic text-[17px] text-[#374151]" style={{ lineHeight: '1.65' }}>
                  &ldquo;I absolutely recommend Change Agents as my first choice of marketing partner, especially to foreign businesses entering the Indian market.&rdquo;
                </p>
                <div className="mt-5">
                  <p className="font-semibold text-[13px] text-[#111827]">Dominik Stahmann</p>
                  <p className="text-[13px] text-[#52606D]">Marketing Manager – NEMEAI, Sophos</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="bg-white px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-normal text-title text-[#374151] mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-12">

            <div>
              <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827] mb-4">
                How does an engagement typically begin?
              </h3>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                With a conversation. No brief required, no proposal expected. Most engagements begin with a direct exploratory discussion — usually initiated by the leader or firm, sometimes through a referral. We talk about where you are, what you&apos;re navigating, and whether there&apos;s a genuine fit. If there is, we discuss how we&apos;d work together. If there isn&apos;t, we&apos;ll say so. There is no standard onboarding process. Every engagement is shaped by context.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827] mb-4">
                What kind of leaders and firms do you work with?
              </h3>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                We work with founders, CEOs, and senior leaders in enterprise technology — and with the firms they lead. Typically these are people and organisations at a point of consequence: scaling, transitioning, repositioning, or navigating a moment where how they are perceived in the market actually matters. They come to us because they want to examine the architecture beneath their positioning — not just manage their visibility. We work with a small number of clients each year. That&apos;s by design.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827] mb-4">
                How long does a typical engagement last?
              </h3>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                It depends on the nature of the work. Strategic advisory engagements are typically ongoing — structured around a retainer with defined scope, reviewed periodically. Strategic Inflection engagements are shorter and more intensive, shaped around a specific moment or transition. Some relationships have continued for years; others are resolved in weeks. We don&apos;t extend engagements beyond their useful purpose. When the work is done, we say so.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[19px] leading-[1.4] text-[#111827] mb-4">
                Is everything kept confidential?
              </h3>
              <p className="font-light text-body text-[#52606D]" style={{ lineHeight: '1.75' }}>
                With the same discretion we have maintained for two decades. We have worked with sensitive business, product, technology, and people information throughout our practice — without formal NDAs in most cases, and without that trust ever being broken. This includes situations where we have worked with direct competitors over many years simultaneously.
              </p>
              <p className="font-light text-body text-[#52606D] mt-4" style={{ lineHeight: '1.75' }}>
                The work we do requires clients to share what is actually happening — not a curated version of it. That level of openness is only possible when the relationship is built on complete discretion. It always has been, and it remains the foundation of how we operate.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
