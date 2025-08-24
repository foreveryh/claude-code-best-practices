# Content Publication Workflow Guide

This guide outlines the enhanced workflow for processing links and publishing content with automated tools and safety features.

> **🚨 CRITICAL**: Before starting any content production, review the [Content Production Guidelines](./CONTENT_PRODUCTION_GUIDELINES.md) for mandatory image handling and translation quality standards.

## 🚀 **New: Master Workflow Commands**

### **Complete Publication Workflow**
```bash
# Complete workflow for bilingual article (recommended)
npm run publish-complete <en-path> <zh-path>

# Preview changes without applying them
npm run publish-dry <en-path> <zh-path>

# Example
npm run publish-complete \
  content/docs/en/best-practices/my-article.mdx \
  content/docs/zh/best-practices/my-article.mdx
```

### **Quick Add Multiple Articles**
```bash
# Add multiple articles at once
npm run quick-add <path1> <path2> <path3>

# Example
npm run quick-add \
  content/docs/en/tools/tool1.mdx \
  content/docs/zh/tools/tool1.mdx \
  content/docs/en/tools/tool2.mdx
```

## 🔗 When You Provide a Link

### For Articles/Blog Posts

1. **Content Acquisition**
   ```bash
   # Use Jina Reader API to download content
   curl -s "https://r.jina.ai/YOUR_URL" > content/sources/article_$(date +%Y%m%d).md
   ```

2. **Image Processing** (⚠️ MANDATORY)
   - **SCAN FIRST**: Identify ALL external images in the content
   - **DOWNLOAD ALL**: Download images to `public/images/article-name/`
   - **REPLACE PATHS**: Replace external URLs with local paths
   - **VERIFY ACCESS**: Test all images are accessible locally
   - **QUALITY CHECK**: Ensure no images are missing or broken
   
   ```bash
   # Create image directory
   mkdir -p public/images/article-name
   
   # Download each image (example)
   curl -o public/images/article-name/diagram.png https://source.com/diagram.png
   ```

3. **Content Creation** (🌍 Translation Quality Critical)
   - Create English version: `content/docs/en/category/slug.mdx`
   - Create Chinese translation: `content/docs/zh/category/slug.mdx`
   - Add proper Front Matter with metadata
   
   **🎆 Chinese Translation Requirements:**
   - **FAITHFUL TRANSLATION**: Translate 100% of content (not summary)
   - **STORYTELLING STYLE**: Engaging, accessible tone for general AI readers
   - **NATURAL FLOW**: Use natural Chinese sentence structure
   - **TECHNICAL ACCURACY**: All facts, data, statistics must match exactly
   - **TERMINOLOGY**: Use standard Chinese terms + English original on first use
   - **FORMAT PRESERVATION**: Maintain ALL Markdown formatting
   
   > See [Content Production Guidelines](./CONTENT_PRODUCTION_GUIDELINES.md) for detailed translation standards

4. **Publication Recording**
   ```bash
   # Add to changelog (interactive)
   npm run changelog add
   
   # Or manually update CHANGELOG.md
   ```

5. **Index Updates**
   ```bash
   # Add to recent posts
   npm run recent-posts add /docs/en/category/slug en
   npm run recent-posts add /docs/zh/category/slug zh
   
   # Update all indexes
   npm run update-indexes
   ```

### For GitHub Repos/Software

1. **Analysis & Research**
   - Examine the repository/software
   - Read documentation, README, and key features
   - Understand the use case and benefits

2. **Content Creation**
   - Write original introduction/review article
   - Include GitHub link with star count in header:
     ```markdown
     > **⭐ GitHub**: [owner/repo](https://github.com/owner/repo) (X.Xk stars)
     ```
   - Cover features, installation, usage, and best practices

3. **Publication Process**
   - Same as articles: create EN/ZH versions
   - Update changelog and indexes
   - Add screenshots if relevant

## 📋 Content Categories

- `best-practices` - Claude Code and AI coding best practices
- `community-tips` - Community-contributed tips and tricks
- `cursor` - Cursor IDE related content
- `sub-agents` - Sub-agent implementations and patterns
- `tools` - Development tools and utilities
- `advanced` - Advanced techniques and patterns

## 🛠️ **Enhanced Quick Commands Reference**

```bash
# Master Workflow Commands (NEW!)
npm run publish-complete <en-path> <zh-path>  # Complete publication workflow
npm run publish-dry <en-path> <zh-path>      # Dry run (preview only)
npm run quick-add <path1> [path2...]         # Add multiple articles

# Changelog Management (Enhanced)
npm run changelog add                         # Interactive changelog entry
npm run changelog add --dry                   # Preview changelog entry
npm run changelog stats                       # View statistics

# Recent Posts Management (Enhanced)
npm run recent-posts add <path> <lang>        # Add to recent posts
npm run recent-posts add <path> <lang> --dry  # Preview addition
npm run recent-posts list                     # List current posts
npm run recent-posts remove <slug>            # Remove post
npm run recent-posts remove <slug> --dry      # Preview removal
npm run recent-posts backup list              # List backups
npm run recent-posts backup create            # Create backup
npm run recent-posts backup restore <file>    # Restore backup

# Index Management
npm run update-indexes                        # Update all indexes

# Development
npm run dev                                   # Start dev server
npm run build                                 # Build for production
```

## 📁 File Structure

```
content/
├── docs/
│   ├── en/[category]/[slug].mdx        # English articles
│   └── zh/[category]/[slug].mdx        # Chinese articles
└── sources/[source-name].md            # Original source content

public/
└── images/[article-name]/              # Article images
```

## ✅ **Enhanced Publication Checklist**

> **🚨 MANDATORY REVIEW**: Complete [Content Production Guidelines](./CONTENT_PRODUCTION_GUIDELINES.md) checklist first

### **Option 1: Master Workflow (Recommended)**
- [ ] Source content downloaded to `content/sources/`
- [ ] **IMAGE VERIFICATION**: All images identified, downloaded, and localized
- [ ] **TRANSLATION QUALITY**: Faithful translation (not summary) with natural Chinese flow
- [ ] English article created with proper Front Matter
- [ ] Chinese translation created following storytelling style requirements
- [ ] Run: `npm run publish-complete <en-path> <zh-path>`
  - [ ] Files validated automatically
  - [ ] Articles added to recent posts (both languages)
  - [ ] Indexes updated automatically
  - [ ] Recent posts verified
- [ ] **FINAL VERIFICATION**: All images display, content reads naturally
- [ ] Changelog updated: `npm run changelog add`
- [ ] All links tested and working

### **Option 2: Manual Step-by-Step**
After creating content files:

- [ ] Source content downloaded to `content/sources/`
- [ ] **COMPLETE IMAGE PROCESSING**: All images downloaded, paths updated, accessibility verified
- [ ] **FAITHFUL TRANSLATION**: 100% content translated (not summarized) with storytelling style
- [ ] English article created with proper Front Matter
- [ ] Chinese translation created following quality standards
- [ ] Changelog updated with publication details
- [ ] Recent posts updated: `npm run recent-posts add <en-path> en`
- [ ] Recent posts updated: `npm run recent-posts add <zh-path> zh`
- [ ] Indexes updated: `npm run update-indexes`
- [ ] **QUALITY VERIFICATION**: All images display, translation reads naturally
- [ ] All links tested and working
- [ ] MDX syntax validated (no rendering errors)

### **Safety Features**
- [ ] **Automatic backups** created before changes
- [ ] **Dry-run testing** completed successfully
- [ ] **File validation** passed
- [ ] **Rollback plan** available via backups

## 🔍 Quality Checks

### Front Matter Requirements
```yaml
---
title: "Article Title"
description: "Brief description"
date: "2024-08-24"
author: "Original Author"
source: "https://original-url.com"
category: "best-practices"
lang: "en" # or "zh"
---
```

### MDX Syntax Rules
- Use standard code block syntax: ````javascript`
- No nested links in titles
- Proper escaping of quotes in Front Matter
- Clean, semantic markdown structure

### Image Requirements
- All external images must be localized
- Use relative paths: `/images/folder/image.png`
- Maintain original quality and format
- Organize by article/topic folders

## 🚀 After Publication

The workflow automatically:
- Updates the homepage with recent posts
- Generates category indexes
- Maintains search functionality
- Tracks publication history in changelog

You can verify everything is working by:
1. Checking the dev server: `npm run dev`
2. Visiting the article URLs
3. Testing search functionality
4. Reviewing the changelog: `npm run changelog stats`