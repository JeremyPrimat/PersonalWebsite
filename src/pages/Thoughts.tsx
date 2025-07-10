import React, { useState } from 'react';
import { ArrowLeft, Code, Building, Layers, Palette, Settings, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Thoughts {
  id: string;
  title: string;
  category: string;
  content: string;
  image?: string;
}

const Questions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const categories = [
    { id: 'dev', name: 'Development', icon: Code },
    { id: 'architecture', name: 'Architecture', icon: Building },
    { id: 'cms', name: 'CMS', icon: Layers },
    { id: 'design', name: 'Design', icon: Palette },
    { id: 'tools', name: 'Tools', icon: Settings },
    { id: 'career', name: 'Career', icon: Users },
  ];

  const questions: Question[] = [
    {
      id: 'react-best-practices',
      title: 'What are React best practices?',
      category: 'dev',
      content: 'React best practices include using functional components with hooks, implementing proper state management, optimizing performance with React.memo and useMemo, following the single responsibility principle, and maintaining clean component architecture. Key practices also involve proper error handling, testing, and following established patterns like composition over inheritance.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop'
    },
    {
      id: 'microservices-architecture',
      title: 'How to design microservices architecture?',
      category: 'architecture',
      content: 'Microservices architecture involves breaking down applications into small, independent services that communicate through APIs. Key principles include single responsibility, decentralized data management, fault tolerance, and independent deployment. Consider service boundaries, data consistency patterns, API gateway patterns, and monitoring strategies.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop'
    },
    {
      id: 'headless-cms',
      title: 'What is a headless CMS?',
      category: 'cms',
      content: 'A headless CMS is a content management system that separates the content management backend from the presentation layer. It provides content via APIs, allowing developers to use any frontend technology. Benefits include flexibility, scalability, omnichannel content delivery, and better developer experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop'
    },
    {
      id: 'ui-ux-principles',
      title: 'What are key UI/UX principles?',
      category: 'design',
      content: 'Key UI/UX principles include user-centered design, consistency, accessibility, visual hierarchy, and usability. Focus on creating intuitive interfaces, maintaining design systems, ensuring responsive design, and conducting user testing. Always prioritize user needs and business goals.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop'
    },
    {
      id: 'development-tools',
      title: 'Essential development tools?',
      category: 'tools',
      content: 'Essential development tools include code editors (VS Code), version control (Git), package managers (npm/yarn), build tools (Vite/Webpack), testing frameworks (Jest/Vitest), and deployment platforms. Also important are linters, formatters, and debugging tools for maintaining code quality.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop'
    },
    {
      id: 'career-growth',
      title: 'How to grow in tech career?',
      category: 'career',
      content: 'Tech career growth involves continuous learning, building projects, networking, seeking mentorship, and staying updated with industry trends. Focus on both technical and soft skills, contribute to open source, attend conferences, and take on challenging projects that push your boundaries.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop'
    }
  ];

  const getQuestionsByCategory = (categoryId: string) => {
    return questions.filter(q => q.category === categoryId);
  };

  const selectedQuestionData = questions.find(q => q.id === selectedQuestion);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </Link>
            <h1 className="text-xl font-semibold text-gray-900">Questions & Answers</h1>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-80 bg-white shadow-sm h-screen sticky top-0 overflow-y-auto">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Categories</h2>
            
            {categories.map(category => {
              const Icon = category.icon;
              const categoryQuestions = getQuestionsByCategory(category.id);
              
              return (
                <div key={category.id} className="mb-6">
                  <div className="flex items-center mb-3">
                    <Icon className="h-5 w-5 text-blue-600 mr-2" />
                    <h3 className="font-medium text-gray-900">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categoryQuestions.map(question => (
                      <button
                        key={question.id}
                        onClick={() => setSelectedQuestion(question.id)}
                        className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                          selectedQuestion === question.id
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {question.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {selectedQuestionData ? (
            <div className="max-w-4xl">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {selectedQuestionData.title}
                </h2>
                
                {selectedQuestionData.image && (
                  <div className="mb-6">
                    <img
                      src={selectedQuestionData.image}
                      alt={selectedQuestionData.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedQuestionData.content}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Select a Question
                </h3>
                <p className="text-gray-500">
                  Choose a question from the sidebar to see the answer
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Thoughts;