import Navbar from '../components/Navbar';
import FeaturesCTA from '../components/FeaturesCTA';

export default function TermsOfServicePage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <Navbar />
      <section className="relative pt-48 pb-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-potluck-light leading-tight">
            Terms of Service
          </h1>
          <p className="mt-6 text-xl text-potluck-dark max-w-2xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-potluck-light">
          <p className="text-lg text-potluck-dark">
            <strong className="text-potluck-light">Last Updated:</strong> October 19, 2025
          </p>
          <p className="mt-2 text-lg text-potluck-dark">
            <strong className="text-potluck-light">Effective Date:</strong> October 19, 2025
          </p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">1. Acceptance of Terms</h2>
          <p className="text-lg text-potluck-dark leading-relaxed space-y-4">
            By accessing or using the Potluck Markets mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legally binding agreement between you and Potluck Markets ("we", "us", or "our").
          </p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">2. Eligibility</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">
            You must be at least <strong className="text-potluck-light">18 years of age</strong> to use Potluck Markets. By using the App, you represent and warrant that you are 18 or older. We reserve the right to request proof of age and terminate accounts of users who do not meet this requirement.
          </p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">3. Description of Service</h2>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">Potluck Markets is a social coordination app that enables users to:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2 text-lg text-potluck-dark leading-relaxed">
            <li>Create event-based smart contracts</li>
            <li>Join contracts created by other users</li>
            <li>Vote on outcomes through consensus</li>
            <li>Track informal agreements and commitments with friends</li>
            <li>Connect with other users through friend requests</li>
          </ul>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">
            <strong className="text-potluck-light">IMPORTANT DISCLAIMER:</strong> Potluck Markets is a <strong className="text-potluck-light">tracking and coordination tool only</strong>. We do NOT process payments, handle money transfers, act as an escrow service, guarantee contract enforcement, or provide financial services. All financial transactions are conducted outside the App and are solely your responsibility.
          </p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">4. User Accounts</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">4.1 Account Creation</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">You must provide accurate, current, and complete information during registration, including your real name, valid email address, valid phone number, and accurate date of birth.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">4.2 Account Security</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">You are responsible for maintaining the confidentiality of your password, all activities that occur under your account, and for notifying us immediately of any unauthorized access.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">4.3 Account Termination</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">We reserve the right to suspend or terminate your account for any violation of these Terms, fraudulent activity, or any conduct we deem harmful. You may delete your account at any time through Account Settings.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">5. User Conduct</h2>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">You agree NOT to violate any laws, impersonate others, harass users, post offensive content, create fraudulent contracts, manipulate voting, spam, or reverse engineer the App.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">6. Contracts and Agreements</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">6.1 Nature of Contracts</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">Contracts created in Potluck Markets are informal agreements between users. They are NOT legally binding, and Potluck Markets does not verify terms, enforce outcomes, guarantee payments, or mediate disputes.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">6.2 User Responsibility</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">You acknowledge that participation is voluntary and you are responsible for honoring your commitments. Potluck Markets is not liable for disputes or non-payment by other users.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">6.3 Payment Disclaimer</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed"><strong className="text-potluck-light">Potluck Markets does NOT handle payments.</strong> All payments occur outside the App, and you are solely responsible for completing transactions.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">7. Voting and Consensus</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">Contract outcomes are determined by participant votes. By joining a contract, you agree to vote honestly and accept the consensus outcome. Potluck Markets does not verify vote accuracy.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">8. Content and Intellectual Property</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">You retain ownership of content you post but grant us a license to use it within the App. Do not post content that violates intellectual property rights or is illegal or offensive. All App content and branding are owned by Potluck Markets.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">9. Privacy</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">Your use of the App is subject to our <a href="/privacy-policy" className="text-potluck-purple hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">10. Third-Party Services</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">The App may integrate with third-party services (e.g., Venmo, Firebase). Your use of these services is subject to their respective terms and privacy policies.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">11. Disclaimers and Limitations of Liability</h2>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">11.1 No Warranty</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">11.2 Limitation of Liability</h3>
          <p className="mb-4 text-lg text-potluck-dark leading-relaxed">TO THE MAXIMUM EXTENT PERMITTED BY LAW, POTLUCK MARKETS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. YOUR SOLE REMEDY FOR DISSATISFACTION IS TO STOP USING THE APP.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2 text-potluck-light">11.3 User Disputes</h3>
          <p className="text-lg text-potluck-dark leading-relaxed">You are solely responsible for your interactions with other users. Potluck Markets is not liable for disputes between users.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">12. Indemnification</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">You agree to indemnify and hold harmless Potluck Markets from any claims arising from your use of the App or violation of these Terms.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">13. Dispute Resolution</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">These Terms are governed by the laws of the State of North Carolina. Any dispute shall be resolved through binding arbitration. You waive your right to a jury trial and class action lawsuits.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">14. Modifications to Terms</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">We may modify these Terms at any time. Your continued use after changes constitutes acceptance.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">15. Termination</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">We may terminate or suspend your access immediately for breach of these Terms, fraudulent activity, or request by law enforcement.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">16. General Provisions</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">These Terms, along with the Privacy Policy, constitute the entire agreement between you and Potluck Markets. If any provision is found invalid, the remaining provisions remain in effect.</p>

          <h2 className="text-3xl font-bold text-potluck-purple mt-12 mb-6 pb-4 border-b border-white/10">17. Contact Information</h2>
          <p className="text-lg text-potluck-dark leading-relaxed">
            For questions regarding these Terms, contact us at:{' '}
            <a href="mailto:s.potluck.markets@gmail.com" className="text-potluck-purple hover:underline">
              s.potluck.markets@gmail.com
            </a>.
          </p>

          <hr className="my-12 border-white/10" />

          <p className="text-lg text-potluck-dark text-center font-semibold">
            <strong className="text-potluck-light">ACKNOWLEDGMENT:</strong> BY CLICKING "I AGREE" OR USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
          </p>
        </div>
      </section>
      <FeaturesCTA />
    </div>
  )
}
