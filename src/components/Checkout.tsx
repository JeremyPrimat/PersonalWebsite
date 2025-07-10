import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { skills } from '../data/mockData';

const Checkout: React.FC = () => {
  // Group skills by category from Strapi
  const skillCategories = React.useMemo(() => {
    const grouped = skills.reduce((acc, skill) => {
      const category = skill.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill.name);
      return acc;
    }, {} as Record<string, string[]>);

    return Object.entries(grouped).map(([title, skillList], index) => ({
      title,
      skills: skillList,
      color: ['blue', 'purple', 'green', 'orange'][index % 4]
    }));
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-start text-gray-800 dark:text-white mb-16">
              Building Digital Experiences
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 transition-shadow"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(category.color)}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: skillIndex * 0.1,
                          type: 'spring',
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;