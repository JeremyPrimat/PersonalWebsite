import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Building, Layers, Palette } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { questions } from '../data/mockData';

const QuestionsPreview: React.FC = () => {
  const featuredQuestions = questions.filter(q => q.featured).slice(0, 4);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400',
      green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400',
      purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-600 dark:text-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleQuestionClick = (questionId: string) => {
    window.location.href = `/questions?q=${questionId}`;
  };

  const getIconForCategory = (category: string) => {
    const icons = {
      'Development': Code,
      'Architecture': Building,
      'Integration': Layers,
      'Design': Palette
    };
    return icons[category as keyof typeof icons] || Code;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Development': 'blue',
      'Architecture': 'green',
      'Integration': 'purple',
    };
    return colors[category as keyof typeof colors] || 'blue';
  };

  return (
    <section id="questions" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 md:mb-0">
                Questions & Answers
              </h2>
              <motion.button
                onClick={() => window.location.href = '/questions'}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Browse questions
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredQuestions.map((item, index) => {
              const Icon = getIconForCategory(item.category);
              const color = getCategoryColor(item.category);
              return (
                <AnimatedSection key={item.id} delay={index * 0.1}>
                  <motion.div
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg dark:hover:shadow-gray-900/20 ${getColorClasses(color)}`}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => handleQuestionClick(item.id.toString())}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="flex-shrink-0"
                        whileHover={{ rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <motion.span
                          className="inline-block px-2 py-1 text-xs font-medium bg-white/50 dark:bg-gray-900/50 rounded-full mb-2"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {item.category}
                        </motion.span>

                        <motion.h3
                          className="text-lg font-semibold text-gray-800 dark:text-white mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {item.subtitle.substring(0, 120) + '...'}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionsPreview;