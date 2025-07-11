// Static data for the portfolio
import { Profile, BlogPost, Question, Skill } from '../types/strapi';
import { loadQuestions } from '../utils/markdownLoader';

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
    title: "🚀 A modern portfolio built with React and TypeScript!",
    excerpt: "AI boosts dev speed, but only with expert guidance. It's not magic—it’s a tool. Clear prompts + solid skills = real, secure results.",
    publishedAt: "2025-07-04T14:30:00.000Z",
    readTime: "4 min read",
    category: "AI development",
    featuredImage: {
      url: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      alternativeText: "AI development"
    },
    externalLink: "https://www.linkedin.com/feed/update/urn:li:activity:7346095287184056323/"
  },
  {
    id: 2,
    title: "🎯 Unlocking Business Agility with Composable Architecture",
    excerpt: "Composable architecture empowers modular, flexible, and fast digital solutions — like LEGO bricks.",
    publishedAt: "2024-03-25T09:15:00.000Z",
    readTime: "3 min read",
    category: "Architecture",
    featuredImage: {
      url: "https://media.licdn.com/dms/image/v2/D4E12AQEQgcOkeJSzzg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711386113347?e=1757548800&v=beta&t=omvUXiWV_Px3MIvrhS11wQ9BJsCIC2Uql9pXDSW2mkY",
      alternativeText: "Architecture"
    },
    externalLink: "https://www.linkedin.com/pulse/unlocking-business-agility-composable-architecture-jeremy-primat-mofbe/?trackingId=GEIjM%2B4loYsCvZys%2FVx8zQ%3D%3D"
  }
];

// Load questions from markdown files
const markdownQuestions = loadQuestions();

// Convert markdown questions to the expected format
export const questions: Question[] = markdownQuestions.map((q, index) => ({
  id: q.id,
  title: q.title,
  content: q.content,
  subtitle: q.subtitle,
  category: q.category,
  slug: q.slug,
  featured: q.featured,
}));

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