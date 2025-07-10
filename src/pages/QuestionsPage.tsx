import React, { useState, useEffect } from 'react';
import { ArrowLeft, Code, Building, Layers, Palette, Settings, Users } from 'lucide-react';
import { questions } from '../data/mockData';
import { Question } from '../types/strapi';

const QuestionsPage = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  const categories = [
    { id: 'Development', name: 'Development', icon: Code },
    { id: 'Architecture', name: 'Architecture', icon: Building },
    { id: 'CMS', name: 'CMS', icon: Layers },
    { id: 'Design', name: 'Design', icon: Palette },
    { id: 'Tools', name: 'Tools', icon: Settings },
    { id: 'Career', name: 'Career', icon: Users },
  ];

  const displayQuestions = questions;

  const getQuestionsByCategory = (categoryId: string) => {
    return displayQuestions.filter(q => q.category === categoryId);
  };

  const selectedQuestionData = displayQuestions.find(q => q.id === selectedQuestion);

  // Handle URL parameters for direct question access
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get('q');
    if (questionId) {
      const question = displayQuestions.find(q => q.id.toString() === questionId || q.slug === questionId);
      if (question) {
        setSelectedQuestion(question.id);
      }
    }
  }, []);

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={goBack}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Portfolio
            </button>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Questions & Answers</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-80 bg-white dark:bg-gray-800 shadow-sm h-screen sticky top-0 overflow-y-auto transition-colors">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Categories</h2>
            
            {categories.map(category => {
              const Icon = category.icon;
              const categoryQuestions = getQuestionsByCategory(category.id);
              
              return (
                <div key={category.id} className="mb-6">
                  <div className="flex items-center mb-3">
                    <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="font-medium text-gray-900 dark:text-white">{category.name}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categoryQuestions.map(question => (
                      <button
                        key={question.id}
                        onClick={() => setSelectedQuestion(question.id)}
                        className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                          selectedQuestion === question.id
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 transition-colors">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  {selectedQuestionData.title}
                </h2>
                
                {selectedQuestionData.image?.url && (
                  <div className="mb-8">
                    <img
                      src={selectedQuestionData.image.url}
                      alt={selectedQuestionData.title}
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>
                )}
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedQuestionData.content}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-gray-400 dark:text-gray-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Select a Question
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
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

export default QuestionsPage;