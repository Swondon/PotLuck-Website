import { motion } from 'framer-motion';

const posts = [
  {
    title: "Potluck Markets is Now Live on the iOS App Store!",
    date: "October 22, 2025",
    category: "Launch",
    excerpt: "We are thrilled to share that Potluck Markets is now available for download on the iOS App Store. This launch represents a major milestone in our mission to reinvent how people make predictions together...",
    href: "/press/launch"
  },
  {
    title: "Our Vision for the Future of Social Prediction Markets",
    date: "June 23, 2025",
    category: "Company Vision",
    excerpt: "At Potluck Markets, we believe the future of prediction is social. This post outlines the vision behind Potluck and the direction we are building toward...",
    href: "/press/vision"
  }
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PressGrid() {
  return (
    <motion.section
      className="py-20 px-6"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {posts.map((post, index) => (
            <motion.a href={post.href} key={index} variants={itemVariants} className="block p-8 rounded-3xl bg-[#251C37] border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-potluck-light mb-2 group-hover:text-potluck-purple transition-colors">{post.title}</h3>
                  <p className="text-potluck-dark leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex-shrink-0 sm:text-right mt-2 sm:mt-0">
                  <span className="text-sm font-semibold text-potluck-purple uppercase tracking-wider">{post.category}</span>
                  <p className="text-xs text-potluck-dark mt-1">{post.date}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}