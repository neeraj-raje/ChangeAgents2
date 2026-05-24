import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  return (
    <section className="bg-[#111c2a] px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="font-serif font-normal text-title text-[#F3F6F8]">
              Limited Engagements.
              <br />
              Serious Conversations.
            </h2>
            <p className="font-light text-lead text-[#A9BAC8] mt-8" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
              We work with a small number of enterprise leaders each year. Engagement begins with a
              confidential exploratory discussion.
            </p>
          </div>

          <div id="footer-form" className="flex items-center justify-center lg:justify-end">
            <CTAButton href="/contact" variant="aurora-dark">
              Request a Conversation &rarr;
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}
