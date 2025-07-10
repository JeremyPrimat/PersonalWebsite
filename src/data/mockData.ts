// Static data for the portfolio
import { Profile, BlogPost, Question, Skill } from '../types/strapi';

export const profile: Profile = {
  id: 1,
  name: "Jeremy Primat",
  title: "Full Stack Developer",
  bio: "Passionate about new systems and modern technologies, I design and build user interfaces tailored to specific requirements, helping customers better understand and refine their needs through modern digital platforms.",
  location: "France",
  email: "jeremy.primat@outlook.com",
  linkedinUrl: "https://linkedin.com/in/jprimat/",
  githubUrl: "https://github.com/JeremyPrimat",
  profileImage: {
    url: "https://media.licdn.com/dms/image/v2/D4E03AQFPIQgaxcLkCA/profile-displayphoto-shrink_400_400/B4EZbPTkzfGcAg-/0/1747234739600?e=1757548800&v=beta&t=ciPti7gJVtCBP1CjoQHBz01zsUPsNjq84sRlbwYXqzI",
    alternativeText: "Jeremy Primat profile photo"
  },
  roles: [
    "Full Stack Developer",
    "Fan of Composable Architecture",
    "UI/UX Enthusiast",
    "Fan of Headless CMSes"
  ]
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "🚀 Excited to share my latest project: a modern portfolio built with React and TypeScript!",
    excerpt: "Just finished building a sleek, responsive portfolio using React, TypeScript, and Tailwind CSS. Features include dark/light mode, smooth animations with Framer Motion, and a fully responsive design.",
    content: "🚀 Excited to share my latest project: a modern portfolio built with React and TypeScript!\n\nJust finished building a sleek, responsive portfolio using:\n• React 18 with TypeScript for type safety\n• Tailwind CSS for modern styling\n• Framer Motion for smooth animations\n• Dark/light mode with system preference detection\n• Fully responsive design optimized for all devices\n\nKey features:\n✨ Interactive particle background\n✨ Typewriter effect animations\n✨ Smooth scroll-triggered animations\n✨ Clean, professional design\n✨ Performance optimized with Vite\n\nAlways excited to work with modern web technologies and create engaging user experiences! 💻\n\n#React #TypeScript #WebDevelopment #Frontend #Portfolio #TailwindCSS #FramerMotion",
    slug: "modern-portfolio-react-typescript",
    publishedAt: "2025-01-20T14:30:00.000Z",
    readTime: "2 min read",
    category: "Development",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "React development"
    },
    externalLink: "https://www.linkedin.com/posts/jprimat_react-typescript-webdevelopment-activity-7289234567890123456-abcd"
  },
  {
    id: 2,
    title: "🎯 Diving deep into Composable Architecture and Headless CMSes",
    excerpt: "Exploring the power of composable architecture in modern web development. How headless CMSes like Strapi and Contentstack are revolutionizing content management.",
    content: "🎯 Diving deep into Composable Architecture and Headless CMSes\n\nBeen working extensively with headless CMSes lately and I'm amazed by the flexibility they offer! 🚀\n\nWhy I love headless architecture:\n• 🔄 Omnichannel content delivery\n• ⚡ Better performance and scalability\n• 🛠️ Developer-friendly APIs\n• 🎨 Frontend technology freedom\n• 📱 Perfect for modern web and mobile apps\n\nRecently worked with:\n• Strapi - Open source and highly customizable\n• Contentstack - Enterprise-grade with great developer experience\n• Sitecore - Powerful for large-scale implementations\n\nThe future is definitely composable! Being able to pick the best tools for each part of your stack is game-changing.\n\nWhat's your experience with headless CMSes? Any favorites? 💭\n\n#HeadlessCMS #ComposableArchitecture #Strapi #Contentstack #WebDevelopment #API #ModernWeb",
    slug: "composable-architecture-headless-cms",
    publishedAt: "2025-01-18T09:15:00.000Z",
    readTime: "3 min read",
    category: "Architecture",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "CMS architecture"
    },
    externalLink: "https://www.linkedin.com/posts/jprimat_headlesscms-composablearchitecture-strapi-activity-7287654321098765432-efgh"
  },
  {
    id: 3,
    title: "💡 The importance of UI/UX in modern web development",
    excerpt: "Sharing thoughts on how good design and user experience can make or break a digital product. Why developers should care about design principles.",
    content: "💡 The importance of UI/UX in modern web development\n\nAs developers, we often focus on the technical aspects, but great UI/UX is what truly makes a product successful! 🎨\n\nKey principles I always keep in mind:\n• 👥 User-centered design - Always think about the end user\n• 🎯 Clear visual hierarchy - Guide users naturally\n• ♿ Accessibility first - Design for everyone\n• 📱 Mobile-first approach - Most users are on mobile\n• ⚡ Performance matters - Fast loading = better UX\n• 🔄 Consistency - Maintain design patterns throughout\n\nTools I love working with:\n• Figma for design and prototyping\n• Tailwind CSS for rapid styling\n• Framer Motion for smooth animations\n• React for component-based UI\n\nRemember: Beautiful code means nothing if users can't use your product effectively!\n\nWhat's your approach to balancing technical excellence with great user experience? 🤔\n\n#UIUX #WebDesign #UserExperience #Frontend #Figma #TailwindCSS #WebDevelopment #Design",
    slug: "importance-ui-ux-web-development",
    publishedAt: "2025-01-16T16:45:00.000Z",
    readTime: "2 min read",
    category: "Design",
    featuredImage: {
      url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "UI/UX design"
    },
    externalLink: "https://www.linkedin.com/posts/jprimat_uiux-webdesign-userexperience-activity-7285432109876543210-ijkl"
  }
];

export const questions: Question[] = [
  {
    id: 1,
    title: "What are React best practices?",
    content: "React best practices include using functional components with hooks, implementing proper state management, optimizing performance with React.memo and useMemo, following the single responsibility principle, and maintaining clean component architecture. Key practices also involve proper error handling, testing, and following established patterns like composition over inheritance.\n\nAdditional best practices:\n- Use TypeScript for better type safety\n- Implement proper error boundaries\n- Follow consistent naming conventions\n- Use custom hooks for reusable logic\n- Optimize bundle size with code splitting\n- Implement comprehensive testing strategies",
    category: "Development",
    slug: "react-best-practices",
    featured: true,
    image: {
      url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "React development"
    }
  },
  {
    id: 2,
    title: "How to design microservices architecture?",
    content: "Microservices architecture involves breaking down applications into small, independent services that communicate through APIs. Here's a comprehensive approach:\n\n**Service Design Principles:**\n- Single Responsibility: Each service should have one business capability\n- Autonomous: Services should be independently deployable\n- Decentralized: Avoid shared databases and centralized governance\n- Resilient: Design for failure and implement circuit breakers\n\n**Communication Patterns:**\n- Synchronous: REST APIs, GraphQL for real-time needs\n- Asynchronous: Message queues, event streaming for loose coupling\n- API Gateway: Centralized entry point for client requests\n\n**Data Management:**\n- Database per service pattern\n- Event sourcing for audit trails\n- CQRS for read/write separation\n- Eventual consistency strategies",
    category: "Architecture",
    slug: "microservices-architecture-design",
    featured: true,
    image: {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "Architecture design"
    }
  },
  {
    id: 3,
    title: "What is a headless CMS?",
    content: "A headless CMS is a content management system that separates the content management backend from the presentation layer (frontend). Unlike traditional CMSes that tightly couple content management with presentation, headless CMSes provide content via APIs.\n\n**Key Characteristics:**\n- API-first approach for content delivery\n- Frontend technology agnostic\n- Separation of concerns between content and presentation\n- Cloud-native and scalable architecture\n\n**Benefits:**\n- **Flexibility**: Use any frontend technology (React, Vue, mobile apps)\n- **Omnichannel**: Deliver content to multiple platforms\n- **Performance**: Optimized content delivery and caching\n- **Developer Experience**: Modern development workflows\n- **Scalability**: Independent scaling of content and presentation",
    category: "CMS",
    slug: "what-is-headless-cms",
    featured: true,
    image: {
      url: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "CMS concept"
    }
  },
  {
    id: 4,
    title: "What are key UI/UX principles?",
    content: "Key UI/UX principles include user-centered design, consistency, accessibility, visual hierarchy, and usability. Focus on creating intuitive interfaces, maintaining design systems, ensuring responsive design, and conducting user testing. Always prioritize user needs and business goals.\n\n**Core Principles:**\n- User-centered design approach\n- Consistency in design patterns\n- Accessibility for all users\n- Clear visual hierarchy\n- Intuitive navigation\n- Responsive design\n- Performance optimization\n- Continuous user testing",
    category: "Design",
    slug: "ui-ux-principles",
    featured: false,
    image: {
      url: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "UI/UX design"
    }
  }
];

export const skills: Skill[] = [
  // Dev Languages
  { id: 1, name: "React", category: "Dev Languages", level: 9, color: "blue" },
  { id: 2, name: "TypeScript", category: "Dev Languages", level: 8, color: "blue" },
  { id: 3, name: "Next.js", category: "Dev Languages", level: 8, color: "blue" },
  { id: 4, name: "Angular", category: "Dev Languages", level: 7, color: "blue" },
  { id: 5, name: "Spring Boot", category: "Dev Languages", level: 8, color: "blue" },
  { id: 6, name: "Node.js", category: "Dev Languages", level: 8, color: "blue" },
  
  // Tools & Others
  { id: 7, name: "Strapi", category: "Tools & Others", level: 9, color: "purple" },
  { id: 8, name: "Contentstack", category: "Tools & Others", level: 8, color: "purple" },
  { id: 9, name: "Sitecore", category: "Tools & Others", level: 7, color: "purple" },
  { id: 10, name: "Figma", category: "Tools & Others", level: 8, color: "purple" },
  { id: 11, name: "Google Cloud Platform", category: "Tools & Others", level: 7, color: "purple" },
  { id: 12, name: "Git", category: "Tools & Others", level: 9, color: "purple" }
];