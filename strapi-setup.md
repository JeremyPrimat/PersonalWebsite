# Strapi CMS Setup Guide

This guide will help you set up Strapi CMS to manage your portfolio content.

## 1. Create a New Strapi Project

```bash
# Create a new Strapi project
npx create-strapi-app@latest portfolio-cms --quickstart

# Navigate to the project
cd portfolio-cms

# Start Strapi
npm run develop
```

## 2. Content Types to Create

### Profile (Single Type)
- **name** (Text) - Required
- **title** (Text) - Required  
- **bio** (Long Text) - Required
- **location** (Text)
- **email** (Email) - Required
- **linkedinUrl** (Text)
- **githubUrl** (Text)
- **profileImage** (Media) - Single
- **roles** (JSON) - Array of strings

### Blog Posts (Collection Type)
- **title** (Text) - Required
- **excerpt** (Long Text) - Required
- **content** (Rich Text) - Required
- **slug** (UID) - Required
- **publishedAt** (DateTime)
- **readTime** (Text)
- **category** (Text) - Required
- **featuredImage** (Media) - Single
- **externalLink** (Text)

### Questions (Collection Type)
- **title** (Text) - Required
- **content** (Rich Text) - Required
- **category** (Text) - Required
- **slug** (UID) - Required
- **featured** (Boolean) - Default: false
- **image** (Media) - Single

### Skills (Collection Type)
- **name** (Text) - Required
- **category** (Text) - Required
- **level** (Number) - 1-10 scale
- **color** (Text) - Hex color code

### Projects (Collection Type)
- **title** (Text) - Required
- **description** (Long Text) - Required
- **technologies** (JSON) - Array of strings
- **githubUrl** (Text)
- **liveUrl** (Text)
- **featured** (Boolean) - Default: false
- **image** (Media) - Single

## 3. Configure Permissions

1. Go to Settings > Users & Permissions Plugin > Roles
2. Click on "Public" role
3. Enable the following permissions:
   - **Profile**: find
   - **Blog-posts**: find, findOne
   - **Questions**: find, findOne
   - **Skills**: find, findOne
   - **Projects**: find, findOne

## 4. Environment Variables

Create a `.env` file in your React project root:

```env
VITE_STRAPI_URL=http://localhost:1337
```

For production, update this to your deployed Strapi URL.

## 5. Sample Data Structure

### Profile Example:
```json
{
  "name": "Jeremy Primat",
  "title": "Full Stack Developer",
  "bio": "Passionate about new systems and modern technologies...",
  "location": "France",
  "email": "jeremy.primat@outlook.com",
  "linkedinUrl": "https://linkedin.com/in/jprimat/",
  "roles": [
    "Full Stack Developer",
    "Fan of Composable Architecture",
    "UI/UX Enthusiast",
    "Fan of Headless CMSes"
  ]
}
```

### Blog Post Example:
```json
{
  "title": "The Future of Headless Architecture",
  "excerpt": "Exploring how headless CMSes are revolutionizing...",
  "content": "Full article content here...",
  "slug": "future-of-headless-architecture",
  "publishedAt": "2025-01-15T10:00:00.000Z",
  "readTime": "5 min read",
  "category": "Architecture",
  "externalLink": "https://linkedin.com/in/jprimat"
}
```

### Question Example:
```json
{
  "title": "What are React best practices?",
  "content": "React best practices include using functional components...",
  "category": "Development",
  "slug": "react-best-practices",
  "featured": true
}
```

### Skill Example:
```json
{
  "name": "React",
  "category": "Dev Languages",
  "level": 9,
  "color": "blue"
}
```

## 6. Deployment

For production deployment:

1. Deploy Strapi to a cloud provider (Heroku, Railway, DigitalOcean, etc.)
2. Update your React app's `VITE_STRAPI_URL` environment variable
3. Configure your database (PostgreSQL recommended for production)
4. Set up media storage (Cloudinary, AWS S3, etc.)

## 7. Content Management

Once set up, you can:
- Add/edit your profile information
- Create and manage blog posts
- Add questions and answers
- Manage your skills and projects
- Upload images and media

The React app will automatically fetch and display content from Strapi!