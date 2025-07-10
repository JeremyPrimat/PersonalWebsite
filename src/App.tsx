import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Checkout from './components/Checkout';
import Thoughts from './components/Thoughts';
import QuestionsPreview from './components/QuestionsPreview';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import QuestionsPage from './pages/QuestionsPage';

const HomePage = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <ThemeToggle />
    <Hero />
    <Checkout />
    <Thoughts />
    <QuestionsPreview />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;