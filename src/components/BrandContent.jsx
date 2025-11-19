import PotluckLogo from '/potlucklogo.png';

const colors = [
  { name: 'Potluck Purple', hex: '#9F54E9', variable: 'potluck-purple' },
  { name: 'Background', hex: '#1A112E', variable: 'potluck-bg' },
  { name: 'Card Background', hex: '#251C37', variable: 'N/A' },
  { name: 'Light Text', hex: '#F4F4F5', variable: 'potluck-light' },
  { name: 'Dark Text', hex: '#A1A1AA', variable: 'potluck-dark' },
];

export default function BrandContent() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-potluck-light space-y-20">

        {/* Logo Section */}
        <div>
          <h2 className="text-3xl font-bold text-potluck-purple mb-8 pb-4 border-b border-white/10">Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#251C37] border border-white/10 rounded-3xl p-8 flex justify-center items-center h-48">
              <img src={PotluckLogo} alt="Potluck Markets Logo" className="h-20 w-auto" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Usage</h3>
              <ul className="space-y-2 text-potluck-dark list-disc list-inside">
                <li>Use the primary logo on light or dark backgrounds.</li>
                <li>Provide adequate clear space around the logo.</li>
                <li>Do not alter, rotate, or add effects to the logo.</li>
                <li>Do not stretch or distort the logo's proportions.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Color Palette Section */}
        <div>
          <h2 className="text-3xl font-bold text-potluck-purple mb-8 pb-4 border-b border-white/10">Color Palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {colors.map((color) => (
              <div key={color.name}>
                <div className="h-24 rounded-xl" style={{ backgroundColor: color.hex }}></div>
                <p className="mt-3 font-bold">{color.name}</p>
                <p className="text-sm text-potluck-dark">{color.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Typography Section */}
        <div>
          <h2 className="text-3xl font-bold text-potluck-purple mb-8 pb-4 border-b border-white/10">Typography</h2>
          <div>
            <p className="text-lg text-potluck-dark mb-6">Our primary typeface is Nunito, a modern, clean sans-serif font that is used for all headings and body text. We prioritize strong contrast and generous line spacing to ensure excellent readability across all devices.</p>
            <div className="bg-[#251C37] border border-white/10 rounded-3xl p-8 mb-8">
              <h1 className="text-4xl font-bold">Heading 1</h1>
              <h2 className="text-3xl font-bold mt-2">Heading 2</h2>
              <h3 className="text-2xl font-bold mt-2">Heading 3</h3>
              <p className="text-lg mt-4">This is body text. It's used for paragraphs and longer-form content to be easily legible.</p>
            </div>
            <h3 className="text-xl font-bold mb-4">Readability</h3>
            <p className="text-lg text-potluck-dark mb-6">To maintain accessibility, text must have sufficient contrast against its background. Our light text is for dark backgrounds, and our dark text is for light backgrounds.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-potluck-bg rounded-xl p-6">
                <p className="font-bold text-potluck-light mb-2">Light Text on Dark Background</p>
                <p className="text-potluck-light">Primary text for high emphasis.</p>
                <p className="text-potluck-dark">Secondary text for less emphasis.</p>
              </div>
              <div className="bg-potluck-light rounded-xl p-6">
                <p className="font-bold text-potluck-bg mb-2">Dark Text on Light Background</p>
                <p className="text-potluck-bg">Primary text for high emphasis.</p>
                <p className="text-potluck-bg/70">Secondary text for less emphasis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons & Borders Section */}
        <div>
          <h2 className="text-3xl font-bold text-potluck-purple mb-8 pb-4 border-b border-white/10">Buttons & Interactivity</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Border Radius</h3>
              <p className="text-lg text-potluck-dark mb-6">We use generous border radiuses to create a soft, modern, and approachable interface. Key elements like cards and buttons are typically well-rounded.</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-[#251C37] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center h-32">
                  <p className="font-bold">Card Radius</p>
                  <p className="text-sm text-potluck-dark">rounded-3xl</p>
                </div>
                <div className="bg-[#251C37] border border-white/10 rounded-full p-8 flex flex-col items-center justify-center h-32">
                  <p className="font-bold">Full Radius</p>
                  <p className="text-sm text-potluck-dark">rounded-full</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Buttons</h3>
              <p className="text-lg text-potluck-dark mb-6">Buttons are clear and actionable, with hover states that provide immediate visual feedback. We have a primary style for main calls-to-action and a secondary style for less prominent actions.</p>
              <div className="bg-[#251C37] border border-white/10 rounded-3xl p-8 space-y-6">
                <div>
                  <p className="font-bold mb-2">Primary Button</p>
                  <button className="inline-flex items-center justify-center h-12 px-8 bg-potluck-purple text-potluck-light font-semibold rounded-full hover:bg-potluck-purple/90 transition-colors">Primary Action</button>
                </div>
                <div>
                  <p className="font-bold mb-2">Secondary Button</p>
                  <button className="inline-flex items-center justify-center h-12 px-6 bg-potluck-bg/50 text-potluck-light font-semibold rounded-full border border-potluck-dark hover:bg-white/10 transition-colors">Secondary Action</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tone of Voice Section */}
        <div>
          <h2 className="text-3xl font-bold text-potluck-purple mb-8 pb-4 border-b border-white/10">Tone of Voice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Social & Engaging</h3>
              <p className="text-potluck-dark">We speak like a friend. Our tone is conversational, approachable, and fun. We avoid overly corporate jargon.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Direct & Clear</h3>
              <p className="text-potluck-dark">We are straightforward and transparent. We explain our features and rules simply and directly so everyone understands.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Trustworthy</h3>
              <p className="text-potluck-dark">While our tone is casual, we are serious about fairness and security. We communicate with confidence and clarity.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Competitive & Fun</h3>
              <p className="text-potluck-dark">We embrace the spirit of friendly competition. Our language is energetic and encourages participation.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}