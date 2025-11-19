import FeaturesCTA from '../../components/FeaturesCTA';

export default function PostLaunchPage() {
  return (
    <div className="bg-potluck-bg min-h-screen">
      <article className="pt-48 pb-24">
        <header className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-potluck-purple uppercase tracking-wider">Launch</p>
          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-potluck-light leading-tight">
            Potluck Markets is Now Live on the iOS App Store!
          </h1>
          <p className="mt-6 text-lg text-potluck-dark">Published on October 22, 2025</p>
        </header>
        <div className="mt-16 max-w-3xl mx-auto px-6 text-lg text-potluck-dark leading-relaxed space-y-6">
<p>
  We are thrilled to share that Potluck Markets is now available for download on the iOS App Store. 
  This launch represents a major milestone in our mission to reinvent how people make predictions together. 
  What started as an idea built on group chats, friendly debates, and everyday questions has now become a live product that anyone can try.
</p>

<p>
  Potluck lets you create and join small, social prediction groups that feel natural and fun. 
  You can make calls on the topics you already talk about with friends such as sports, events, plans, and everyday outcomes. 
  Instead of trading anonymously or wagering against a platform, everything is resolved by your group. 
  This keeps the experience personal, fair, and focused on community rather than speculation.
</p>

<p>
  Going live on the App Store allows us to gather real feedback, improve the product quickly, and continue to build a new category of social prediction that is accessible and enjoyable. 
  We have many features on the way including enhanced group tools, smoother wager creation, and more ways to explore what people around you believe will happen next.
</p>

<p>
  This is only the beginning and we are grateful for everyone who has supported the project from its earliest days. 
  Download Potluck Markets, invite your friends, and help us shape the future of social prediction.
</p>
        </div>
      </article>
      <FeaturesCTA />
    </div>
  );
}