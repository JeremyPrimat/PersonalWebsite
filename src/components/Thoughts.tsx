import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { blogPosts } from '../data/mockData';

const Thoughts: React.FC = () => {
  const displayPosts = blogPosts.slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Architecture': 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
      'Development': 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      'Design': 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
    };
    return colors[category as keyof typeof colors] || colors.Development;
  };

  return (
    <section id="thoughts" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
                Thoughts & Insights
              </h2>
              <motion.a
                href="https://linkedin.com/in/jprimat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                View all posts
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 0.2}>
                <motion.article
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-all group"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={post.featuredImage?.url || post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.category}
                    </motion.span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 ml-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <motion.h3
                      className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {post.excerpt}
                    </motion.p>

                    <motion.a
                      href={post.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm group/link"
                      whileHover={{ x: 3 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      Read more
                      <ExternalLink className="w-3 h-3 ml-2 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </motion.article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thoughts;