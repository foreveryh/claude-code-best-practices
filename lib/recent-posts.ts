import { ChangelogEntry } from './changelog';

// 首页最近文章的结构化数组
export const RECENT_POSTS: ChangelogEntry[] = [
  {
    title: "使用 Claude Code 的六周回顾",
    description: "Puzzmo 工程师 Orta Therox 在生产开发中使用 Claude Code 六周后的回顾与思考，涵盖维护改进、工作流程变化和真实项目示例。",
    date: "2025-07-30",
    category: "best-practices",
    language: "zh",
    slug: "zh/best-practices/six-weeks-of-claude-code",
    url: "/docs/zh/best-practices/six-weeks-of-claude-code"
  },
  {
    title: "6 Weeks of Claude Code",
    description: "A retrospective on using Claude Code for 6 weeks in production development, covering maintenance improvements, workflow changes, and real-world project examples.",
    date: "2025-07-30",
    category: "best-practices",
    language: "en",
    slug: "en/best-practices/six-weeks-of-claude-code",
    url: "/docs/en/best-practices/six-weeks-of-claude-code"
  },
  {
    title: "手把手教你逆向Claude Code：如何监控AI每一次'内心独白'？",
    description: "通过技术手段逆向分析Claude Code的API交互过程，揭秘AI编程之王的多模型协作策略、精巧的系统提示词设计和智能工具调用机制。",
    date: "2025-01-15",
    category: "general",
    language: "zh",
    slug: "zh/advanced/claude-code-reverse-analysis",
    url: "/docs/zh/advanced/claude-code-reverse-analysis"
  },];

// 获取首页最近文章的函数
export function getHomePageRecentPosts(limit: number = 5): ChangelogEntry[] {
  // 按日期排序，最新的在前
  const sortedPosts = [...RECENT_POSTS].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return sortedPosts.slice(0, limit);
}

// 添加新文章到最近文章列表
export function addRecentPost(post: ChangelogEntry): void {
  // 检查是否已存在相同 slug 的文章
  const existingIndex = RECENT_POSTS.findIndex(p => p.slug === post.slug);
  
  if (existingIndex !== -1) {
    // 更新现有文章
    RECENT_POSTS[existingIndex] = post;
  } else {
    // 添加新文章到开头
    RECENT_POSTS.unshift(post);
  }
}

// 从最近文章列表中移除文章
export function removeRecentPost(slug: string): void {
  const index = RECENT_POSTS.findIndex(p => p.slug === slug);
  if (index !== -1) {
    RECENT_POSTS.splice(index, 1);
  }
}

// 获取特定语言的文章
export function getRecentPostsByLanguage(language: 'zh' | 'en', limit: number = 5): ChangelogEntry[] {
  const filteredPosts = RECENT_POSTS.filter(post => post.language === language);
  const sortedPosts = filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return sortedPosts.slice(0, limit);
}

// 获取特定分类的文章
export function getRecentPostsByCategory(category: string, limit: number = 5): ChangelogEntry[] {
  const filteredPosts = RECENT_POSTS.filter(post => post.category === category);
  const sortedPosts = filteredPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  return sortedPosts.slice(0, limit);
}
