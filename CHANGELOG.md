# Changelog

All notable changes and content publications to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Project changelog system for tracking content publications
- Automated content workflow documentation

---

## Content Publication Format

Each entry should follow this format:

```markdown
## [Date] - Publication Title

### Added
- **[Category]** New article: "[Article Title]" 
  - Source: [Original URL]
  - Author: [Original Author]
  - Languages: EN/ZH
  - Type: [Article/Tutorial/Guide/Review]
  - Files: 
    - EN: `/content/docs/en/[category]/[slug].mdx`
    - ZH: `/content/docs/zh/[category]/[slug].mdx`
    - Source: `/content/sources/[source-file].md`
    - Images: `/public/images/[folder]/`

### Changed
- Updated existing content (if any)

### Fixed
- Corrections or improvements (if any)
```

---

## Publication History

## [2025-01-24] - Andrej Karpathy on the Evolution of LLM-Assisted Coding: Philosophy Meets Practice

### Added
- **[best-practices]** New analysis: "Andrej Karpathy on the Evolution of LLM-Assisted Coding: Philosophy Meets Practice"
  - Source: https://x.com/karpathy/status/1959703967694545296
  - Author: Andrej Karpathy & DeepToAI Team
  - Languages: EN/ZH
  - Type: Analysis
  - Description: Deep analysis of AI legend Andrej Karpathy's insights on multi-layered LLM coding workflows, combining high-level philosophy ("道") with practical Claude Code techniques ("术"). Features strategic references to 8+ existing Claude Code articles as supplementary reading.
  - Files:
    - EN: `/content/docs/en/best-practices/karpathy-llm-coding-evolution.mdx`
    - ZH: `/content/docs/zh/best-practices/karpathy-llm-coding-evolution.mdx`
    - Source: `/content/sources/Andrej Karpathy.md`
  - Strategic Integration: Article incorporates references to existing Claude Code guides to bridge Karpathy's philosophical insights with practical implementation techniques
  - Cross-References Included:
    - 33 Claude Code Setup Tips
    - Cal Rueb's Best Practices
    - Builder's Claude Code Guide
    - Code Simplifier Agent
    - Field Notes on Shipping Real Code
    - Community experiences and case studies

## [2025-08-24] - 33 Claude Code Setup Tips You NEED to Know

### Added
- **[best-practices]** New article: "33 Claude Code Setup Tips You NEED to Know"
  - Source: https://pageai.pro/blog/31-claude-code-setup-tips
  - Author: PageAI
  - Languages: EN/ZH
  - Type: Article
  - Description: Master Claude Code with 33 essential tips covering shortcuts, prompting techniques, MCP servers, project rules, and automation hooks. Transform from beginner to expert level productivity.
  - Files:
    - EN: `/content/docs/en/best-practices/claude-code-setup-tips.mdx`
    - ZH: `/content/docs/zh/best-practices/claude-code-setup-tips.mdx`
    - Source: `/content/sources/claude-code-setup-tips_20250824.md`
    - Images: `/content/assets/claude-code-setup-tips/`
  - YouTube Video: https://www.youtube.com/embed/Z8b6h8cNx-Y (preserved in both versions)
  - Images Downloaded:
    - `hero-image.jpg` - Featured article image from PageAI

## [2025-01-24] - Compounding Engineering: Building Self-Improving Development Systems

### Added
- **[advanced]** New article: "Compounding Engineering: Building Self-Improving Development Systems"
  - Source: https://every.to/working-overtime/compounding-engineering
  - Author: Kieran Klaassen
  - Languages: EN/ZH
  - Type: Article
  - Description: Learn how to build development systems that get faster, safer, and better with each iteration. Transform your engineering workflow from short-term gains to permanent improvements through AI-powered workflows.
  - Files:
    - EN: `/content/docs/en/advanced/compounding-engineering.mdx`
    - ZH: `/content/docs/zh/advanced/compounding-engineering.mdx`
    - Source: `/content/sources/Compounding engineering.md`
    - Images: `/public/images/compounding-engineering/`
  - Images Downloaded:
    - `automated-code-reviewer.jpeg` - Automated code reviewer screenshot
    - `monitor-setup-warp.png` - Monitor setup in Warp command line interface

## [2024-08-24] - What Makes Claude Code So Damn Good: A Deep Analysis

### Added
- **[advanced]** New analysis: "What Makes Claude Code So Damn Good: A Deep Analysis"
  - Source: https://minusx.ai/blog/decoding-claude-code/
  - Author: MinusX team
  - Languages: EN/ZH
  - Type: Analysis
  - Description: An in-depth analysis of what makes Claude Code the most delightful AI coding agent, based on intercepted logs and months of usage.
  - Files:
    - EN: `/content/docs/en/advanced/decoding-claude-code-analysis.mdx`
    - ZH: `/content/docs/zh/advanced/decoding-claude-code-analysis.mdx`
    - Source: `/content/sources/decoding-claude-code-minusx-analysis_20250824.md`

## [2024-08-24] - CCPM: Claude Code Project Manager

### Added
- **[tools]** New analysis: "CCPM: Claude Code Project Manager"
  - Source: https://github.com/automazeio/ccpm
  - Author: Automaze team
  - Languages: EN/ZH
  - Type: Analysis
  - Description: A revolutionary project management system for Claude Code that uses GitHub Issues and Git worktrees for parallel agent execution.
  - Files:
    - EN: `/content/docs/en/tools/ccpm-claude-code-project-manager.mdx`
    - ZH: `/content/docs/zh/tools/ccpm-claude-code-project-manager.mdx`
    - Source: `/content/sources/ccpm-claude-code-project-manager_20250824.md`

## [2024-08-24] - Happy: Mobile and Web Client for Claude Code

### Added
- **[tools]** New analysis: "Happy: Mobile and Web Client for Claude Code"
  - Source: https://github.com/slopus/happy
  - Author: slopus team
  - Languages: EN/ZH
  - Type: Analysis
  - Description: A comprehensive mobile and web client that brings Claude Code to your phone with end-to-end encryption, voice control, and multi-session support.
  - Files:
    - EN: `/content/docs/en/tools/happy-mobile-claude-code-client.mdx`
    - ZH: `/content/docs/zh/tools/happy-mobile-claude-code-client.mdx`
    - Source: `/content/sources/happy-mobile-claude-code-client_20250824.md`

### [2024-08-24] - Project Setup

### Added
- **Infrastructure** Initial project setup with Fumadocs
- **Workflow** Content production workflow system
- **Automation** Scripts for recent posts and index management
- **Components** Changelog display components
- **Bilingual** Support for English and Chinese content

### Content Categories
- `best-practices` - Claude Code and AI coding best practices
- `community-tips` - Community-contributed tips and tricks  
- `cursor` - Cursor IDE related content
- `sub-agents` - Sub-agent implementations and patterns
- `tools` - Development tools and utilities
- `advanced` - Advanced techniques and patterns

---

## Workflow Integration

### Publication Checklist
After each content publication, update this changelog with:

- [ ] Article title and description
- [ ] Original source URL and author
- [ ] Publication date
- [ ] File locations (EN/ZH/Source)
- [ ] Category assignment
- [ ] Image assets (if any)
- [ ] Recent posts update (`npm run recent-posts add`)
- [ ] Index update (`npm run update-indexes`)

### Automation Commands
```bash
# Add to recent posts
npm run recent-posts add <article-path> <language>

# Update indexes
npm run update-indexes

# List current recent posts
npm run recent-posts list

# Remove from recent posts
npm run recent-posts remove <slug>
```

---

## Statistics

### Content Overview
- **Total Articles**: 0 (to be updated)
- **Languages**: English, Chinese
- **Categories**: 6 categories defined
- **Sources**: 20 source files in content/sources/

### Recent Activity
- Last publication: TBD
- Last index update: TBD
- Last workflow update: 2024-08-24