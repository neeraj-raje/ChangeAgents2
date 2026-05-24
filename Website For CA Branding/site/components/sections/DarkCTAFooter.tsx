import CTAButton from '@/components/ui/CTAButton'

export default function DarkCTAFooter() {
  return (
    <section className="bg-[#111c2a] px-6 lg:px-8 py-14 lg:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif font-normal text-title text-[#F3F6F8]">
          Limited Engagements.
          <br />
          Serious Conversations.
        </h2>
        <p className="font-light text-lead text-[#A9BAC8] mt-8 max-w-xl mx-auto" style={{ lineHeight: '1.75', letterSpacing: '-0.01em' }}>
          We work with a small number of enterprise leaders each year. Engagement begins with a
          confidential exploratory discussion.
        </p>
        <div id="footer-form" className="mt-10">
          <CTAButton href="/contact" variant="aurora-dark">
            Request a Conversation &rarr;
          </CTAButton>
        </div>
      </div>
    </section>
  )
}
