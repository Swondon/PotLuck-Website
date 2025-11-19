export default function FeaturesCTA() {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold text-potluck-light mb-4">Ready to Start Predicting?</h2>
      <p className="text-lg text-potluck-dark mb-8 max-w-2xl mx-auto">
        Turn predictions into contracts. Download Potluck Markets today and start creating peer-to-peer agreements!
      </p>
      <a
        href="https://apps.apple.com/us/app/potluck-markets/id6753965126"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mx-auto transition-transform hover:scale-105"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="Download on the App Store" className="h-14" />
      </a>
    </section>
  );
}