# Changelog Entry Template

Use this template when manually adding entries to the changelog, or use the automated script:

```bash
npm run changelog add
```

## Manual Entry Template

```markdown
## [YYYY-MM-DD] - Article Title

### Added
- **[category]** New article/tutorial/guide: "Article Title"
  - Source: https://original-url.com
  - Author: Original Author Name
  - Languages: EN/ZH
  - Type: Article/Tutorial/Guide/Review/Analysis
  - Description: Brief description of the content
  - Files:
    - EN: `/content/docs/en/category/slug.mdx`
    - ZH: `/content/docs/zh/category/slug.mdx`
    - Source: `/content/sources/source-file.md`
    - Images: `/public/images/folder/` (if applicable)
```

## Categories

- `best-practices` - Claude Code and AI coding best practices
- `community-tips` - Community-contributed tips and tricks
- `cursor` - Cursor IDE related content
- `sub-agents` - Sub-agent implementations and patterns
- `tools` - Development tools and utilities
- `advanced` - Advanced techniques and patterns

## Types

- `Article` - General articles and blog posts
- `Tutorial` - Step-by-step guides
- `Guide` - Comprehensive guides and documentation
- `Review` - Product or tool reviews
- `Analysis` - In-depth analysis and research

## Workflow After Adding Entry

1. Create the content files at specified paths
2. Add to recent posts: `npm run recent-posts add <path> <lang>`
3. Update indexes: `npm run update-indexes`
4. Verify all links work correctly

## Quick Commands

```bash
# Add new changelog entry (interactive)
npm run changelog add

# View changelog statistics
npm run changelog stats

# Add to recent posts
npm run recent-posts add /docs/en/category/slug en
npm run recent-posts add /docs/zh/category/slug zh

# Update all indexes
npm run update-indexes

# List recent posts
npm run recent-posts list

# Remove from recent posts
npm run recent-posts remove slug
```