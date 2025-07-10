// Mock data that matches Strapi structure for development
import { Profile, BlogPost, Question, Skill } from '../types/strapi';

export const mockProfile: Profile = {
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

export const mockBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Headless Architecture",
    excerpt: "Exploring how headless CMSes are revolutionizing content management and enabling omnichannel experiences across modern digital platforms.",
    content: "Headless architecture represents a paradigm shift in how we approach content management and digital experiences...",
    slug: "future-of-headless-architecture",
    publishedAt: "2025-01-15T10:00:00.000Z",
    readTime: "5 min read",
    category: "Architecture",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "Architecture concept"
    },
    externalLink: "https://linkedin.com/in/jprimat"
  },
  {
    id: 2,
    title: "Microservices vs Monoliths: A Modern Perspective",
    excerpt: "Breaking down the pros and cons of different architectural patterns in today's development landscape and when to choose each approach.",
    content: "The debate between microservices and monolithic architectures continues to be one of the most discussed topics...",
    slug: "microservices-vs-monoliths",
    publishedAt: "2025-01-10T10:00:00.000Z",
    readTime: "7 min read",
    category: "Development",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "Development concept"
    },
    externalLink: "https://linkedin.com/in/jprimat"
  },
  {
    id: 3,
    title: "Building Scalable React Applications",
    excerpt: "Best practices and patterns for creating maintainable and performant React applications at scale with modern tools and techniques.",
    content: "Building scalable React applications requires careful consideration of architecture, state management...",
    slug: "building-scalable-react-applications",
    publishedAt: "2025-01-05T10:00:00.000Z",
    readTime: "6 min read",
    category: "React",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "React development"
    },
    externalLink: "https://linkedin.com/in/jprimat"
  }
];

export const mockQuestions: Question[] = [
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

export const mockSkills: Skill[] = [
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