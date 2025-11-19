import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'X',
    href: '#', // Replace with your X/Twitter URL
    icon: FaXTwitter,
  },
  {
    name: 'Instagram',
    href: '#', // Replace with your Instagram URL
    icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    href: '#', // Replace with your LinkedIn URL
    icon: FaLinkedin,
  },
];

export default function ContactHero() {
  return (
    <section className="relative pt-48 pb-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-potluck-light leading-tight">
          Get In Touch
        </h1>
        <p className="mt-6 text-xl text-potluck-dark max-w-2xl mx-auto mb-10">
          Whether you're an investor, a potential partner, or just want to say hello, we'd love to hear from you. The best way to reach us is by email.
        </p>
        <a
          href="mailto:s.potluck.markets@gmail.com"
          className="inline-flex items-center justify-center h-12 px-8 bg-potluck-purple text-potluck-light font-semibold rounded-full hover:bg-potluck-purple/90 transition-colors"
        >
          Email the Team
        </a>
        <div className="mt-16 pt-8 border-t border-white/10 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-potluck-purple mb-4">Follow us on</h3>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="text-potluck-dark hover:text-potluck-purple transition-colors">
                <social.icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}