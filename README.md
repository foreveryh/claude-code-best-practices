# DeepToAI - Intelligent Documentation Platform

🚀 **A comprehensive AI-powered bilingual content production and publishing platform built on Fumadocs**

DeepToAI is not just another documentation site - it's a complete content automation ecosystem that transforms how technical documentation is created, translated, and published. Built on [Fumadocs](https://fumadocs.dev), it features intelligent workflows for automated content acquisition, AI-assisted translation, and streamlined publishing.

## ✨ Key Features

### 🤖 **AI-Powered Content Pipeline**
- **Intelligent Content Acquisition**: Automated download via Jina Reader API
- **Smart Resource Processing**: Automatic image localization and path optimization
- **AI-Assisted Translation**: Faithful Chinese translations with storytelling style
- **Category Intelligence**: Automatic content categorization (best-practices, advanced, tools, etc.)

### 🌐 **Bilingual Content Management**
- **Seamless EN/ZH Publishing**: Parallel English and Chinese documentation
- **Consistent Terminology**: Standardized technical term translations
- **Cultural Adaptation**: Natural Chinese sentence structures and expressions
- **Synchronized Updates**: Coordinated bilingual content updates

### 🔄 **Automated Publishing Workflow**
- **Master Publication Script**: One-command end-to-end publishing
- **Safety Features**: Automatic backups, validation, and dry-run modes
- **Content Indexing**: Automated navigation and search index updates
- **Changelog Integration**: Automatic publication tracking and statistics

### 📊 **Content Organization & Discovery**
- **Smart Categorization**: `best-practices`, `advanced`, `tools`, `community-tips`
- **Recent Posts Management**: Dynamic homepage content curation
- **Full-Text Search**: Server-side search with Fumadocs integration
- **Rich Metadata**: Comprehensive frontmatter and content indexing

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ (Node.js 23.1 may have compatibility issues)
- npm/pnpm/yarn
- Basic knowledge of React.js and MDX

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd deeptoai

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the platform in action.

## 📝 Content Production Workflow

### Method 1: AI IDE Integration (Recommended)

Use AI IDE (like Cursor, Claude Code) with our intelligent prompts:

```
下载并发布该文章，注意要保留文章中的 youtube 在线观看，[ARTICLE_URL]
```

The AI will automatically:
1. Download content using Jina Reader API
2. Process and localize all images
3. Create faithful bilingual translations
4. Execute the complete publishing workflow
5. Update indexes and changelog

### Method 2: Manual Workflow

```bash
# 1. Content Acquisition
curl -s "https://r.jina.ai/YOUR_URL" > content/sources/article_$(date +%Y%m%d).md

# 2. Create Content Files
# - English: content/docs/en/[category]/[slug].mdx
# - Chinese: content/docs/zh/[category]/[slug].mdx

# 3. Complete Publication
npm run publish-complete \
  content/docs/en/[category]/[slug].mdx \
  content/docs/zh/[category]/[slug].mdx

# 4. Add Changelog Entry
npm run changelog add
```

## 🛠️ Available Scripts

### Core Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Content Management
```bash
# Master Publishing Workflow
npm run publish-complete <en-path> <zh-path>  # Complete publication
npm run publish-dry <en-path> <zh-path>       # Preview changes
npm run quick-add <path1> <path2> <path3>     # Batch processing

# Content Organization
npm run update-indexes                        # Refresh content indexes
npm run recent-posts add <path> <lang>        # Add to recent posts
npm run recent-posts list                     # List recent posts
npm run recent-posts remove <slug>            # Remove from recent

# Publication Tracking
npm run changelog add                          # Add changelog entry
npm run changelog stats                       # View statistics
```

## 📁 Project Structure

```
deeptoai/
├── app/
│   ├── (home)/              # Landing page
│   ├── docs/                # Documentation routes
│   └── api/search/          # Search API
├── content/
│   ├── sources/             # Original content sources
│   ├── docs/en/             # English documentation
│   └── docs/zh/             # Chinese documentation
├── scripts/
│   ├── publish-complete.js  # Master publishing workflow
│   ├── manage-recent-posts.js
│   ├── update-indexes.js
│   └── changelog.js
├── lib/
│   ├── source.ts            # Content source adapter
│   └── changelog.ts         # Changelog utilities
└── public/images/           # Localized image assets
```

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 15.4.5 with App Router
- **Documentation**: Fumadocs (Core 15.6.8, UI 15.6.8, MDX 11.7.3)
- **Styling**: Tailwind CSS 4.1.11
- **Language**: TypeScript 5.9.2
- **Content**: MDX with rich frontmatter support

### Core Components

| Component | Purpose | File |
|-----------|---------|------|
| Content Source | Fumadocs content adapter | `lib/source.ts` |
| Layout Config | Shared UI configuration | `app/layout.config.tsx` |
| Search API | Server-side content search | `app/api/search/route.ts` |
| Master Workflow | Automated publishing | `scripts/publish-complete.js` |
| Content Indexing | Navigation generation | `scripts/update-indexes.js` |

### Content Categories

| Category | Purpose | Examples |
|----------|---------|----------|
| `best-practices` | Actionable guidance and setup tips | Claude Code setup, productivity tips |
| `advanced` | Complex technical concepts | Agentic architectures, system design |
| `tools` | Development tools and utilities | MCP servers, frameworks |
| `community-tips` | Community contributions | User-shared workflows |

## 📋 Content Standards

### Frontmatter Requirements
```yaml
---
title: "Article Title"
description: "Brief article description"
date: "YYYY-MM-DD"
author: "Author Name"
source: "https://original-url.com"
category: "best-practices|advanced|tools|community-tips"
language: "en|zh"
tags: ["tag1", "tag2"]
---
```

### Translation Guidelines
- **Faithfulness**: Complete, accurate translations (not summaries)
- **Style**: Storytelling approach for general AI-interested readers
- **Terminology**: Standard industry terms (LLM → 大语言模型)
- **Structure**: Preserve all original Markdown formatting
- **Cultural Adaptation**: Natural Chinese expressions and sentence flow

## 🔧 Advanced Usage

### Custom Components
Extend MDX capabilities by modifying `mdx-components.tsx`:

```tsx
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { YourCustomComponent } from './components';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    YourCustomComponent,
    ...components,
  };
}
```

### Workflow Customization
Modify publishing behavior in `scripts/publish-complete.js`:
- Validation rules
- Backup strategies  
- Index generation
- Notification systems

### Search Integration
The platform supports multiple search backends:
- **Built-in**: Server-side search via `/api/search`
- **Orama Cloud**: Advanced search capabilities
- **Algolia**: Enterprise search integration

## 📊 Monitoring & Analytics

### Changelog Statistics
```bash
npm run changelog stats
```

Provides insights on:
- Publication frequency
- Content categories
- Author contributions
- Language distribution

### Content Health
- Automated validation during publishing
- Broken link detection
- Image optimization tracking
- Translation completeness monitoring

## 🤝 Contributing

### Adding New Content
1. Use the AI IDE integration for best results
2. Follow the established content standards
3. Ensure proper categorization
4. Verify bilingual consistency

### Enhancing Workflows
1. Modify scripts in `/scripts/` directory
2. Update documentation in relevant files
3. Test with dry-run modes
4. Maintain backward compatibility

## 📚 Learning Resources

- **[Fumadocs Documentation](https://fumadocs.dev)** - Framework fundamentals
- **[Next.js Documentation](https://nextjs.org/docs)** - Core platform features
- **[Content Production Guidelines](./docs/CONTENT_PRODUCTION_GUIDELINES.md)** - Detailed workflow docs
- **[Workflow Guide](./WORKFLOW_GUIDE.md)** - Step-by-step processes

## 🎯 Use Cases

This platform is ideal for:
- **Technical Documentation Teams** needing bilingual content
- **AI Tool Documentation** requiring frequent updates
- **Developer Relations** creating educational content
- **Open Source Projects** with international communities
- **Content Curation Teams** aggregating technical resources

## 📄 License

MIT

---

**Built with ❤️ using Fumadocs and powered by AI-driven content workflows**
