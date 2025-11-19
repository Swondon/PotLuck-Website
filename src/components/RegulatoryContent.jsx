export default function RegulatoryContent() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-potluck-light">
        <p className="text-xl text-potluck-dark leading-relaxed">
          Potluck Markets has been designed from the ground up with a clear understanding of the regulatory landscape surrounding prediction markets, gaming, and financial services. Our model is intentionally structured to operate as a tool for social contracting and scorekeeping, not as a financial or gambling platform.
        </p>

        <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">Not a Financial or Gambling Service</h2>
        <p className="text-lg text-potluck-dark leading-relaxed space-y-4">
          The most critical aspect of our model is that <strong>Potluck does not handle, process, or hold any user funds.</strong> All financial transactions are conducted peer-to-peer, outside of our application. Our platform's core function is to act as a sophisticated ledger or scorekeeper, creating an IOU that clarifies who owes what to whom after an event's outcome is determined.
        </p>

        <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">Peer-to-Peer Contracts</h2>
        <p className="text-lg text-potluck-dark leading-relaxed space-y-4">
          Markets on Potluck are event-based contracts created between users. The platform provides the framework for users to define the terms of their agreements, but the agreements themselves are between the participants. This peer-to-peer nature is fundamental to our design.
        </p>

        <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">Community-First Resolution</h2>
        <p className="text-lg text-potluck-dark leading-relaxed space-y-4">
          Unlike traditional platforms that rely on a central authority (the "house") or a designated oracle to determine outcomes, Potluck utilizes community-first resolution. The participants of a market, who have the most context about the event, vote to determine the outcome. This decentralized approach further removes us from the role of a traditional operator and places the power in the hands of the community.
        </p>

        <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">Focus on Skill and Social Engagement</h2>
        <p className="text-lg text-potluck-dark leading-relaxed space-y-4">
          Our focus is on events that are relevant to specific communities and friend groups. These are often hyperlocal, personal, or social events where participants have a degree of knowledge or insight. This emphasis on knowledge and social context distinguishes our platform from games of pure chance.
        </p>

        <div className="mt-16 p-8 border border-potluck-dark rounded-3xl bg-[#251C37]">
          <h3 className="text-2xl font-bold text-potluck-light">Disclaimer</h3>
          <p className="mt-4 text-potluck-dark">
            The information provided here is for informational purposes only and does not constitute legal advice. While we have designed our platform to be compliant with applicable laws and regulations, the legal landscape can be complex and varies by jurisdiction. We encourage users to be aware of their local laws.
          </p>
        </div>
      </div>
    </section>
  );
}