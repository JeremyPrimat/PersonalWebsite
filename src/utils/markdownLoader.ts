
export interface MarkdownQuestion {
  id: number;
  title: string;
  category: string;
  featured: boolean;
  subtitle: string,
  content: string;
  slug: string;
}

const markdownFiles = import.meta.glob('../content/questions/*.md', {
  as: 'raw',
  eager: true
});

const parseMarkdown = (raw: string) => {
  const [, rawFrontmatter, content] = raw.match(/^---\n([\s\S]+?)\n---\n([\s\S]*)$/) || [];
  const frontmatter = Object.fromEntries(
    rawFrontmatter?.split('\n').map((line) => line.split(':').map(v => v.trim())) || []
  );
  return { data: frontmatter, content };
};

export const loadQuestions = (): MarkdownQuestion[] => {
  const questions: MarkdownQuestion[] = [];

  Object.entries(markdownFiles).forEach(([path, content]) => {
    const { data, content: markdownContent } = parseMarkdown(content);
    // Extract filename without extension for slug
    const slug = path.split('/').pop()?.replace('.md', '') || '';

    questions.push({
      id: data.id,
      title: data.title || '',
      category: data.category || 'General',
      featured: data.featured || false,
      subtitle: data.subtitle,
      content: markdownContent,
      slug
    });
  });

  return questions;
};