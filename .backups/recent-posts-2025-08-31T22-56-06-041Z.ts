import { ChangelogEntry } from './changelog';

// 首页最近文章的结构化数组
export const RECENT_POSTS: ChangelogEntry[] = [
  {
    title: "Fed Up and Built My First Sub Agent: UI Visual Validator",
    description: "Tired of Claude Code's self-deceptive UI modification validations, I developed this strict visual verification agent that defaults to failure, only trusts screenshots, specifically treats all claims of successful fixes.",
    date: "2025-08-30",
    category: "sub-agents",
    language: "en",
    slug: "en/sub-agents/ui-visual-validator-agent",
    url: "/docs/en/sub-agents/ui-visual-validator-agent"
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
