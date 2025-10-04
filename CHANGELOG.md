# Changelog

All notable changes to this project will be documented in this file.

## [2025-10-04] - Master Engineering Workflow for 5x Productivity

### Added
- **[best-practices]** New article: "The Master Engineering Workflow That Delivers 5x Productivity"
  - Source: Twitter post analysis
  - Author: DeepToAI Team
  - Languages: EN/ZH
  - Type: Best Practices Guide
  - Description: Discover the systematic prompt engineering workflow used by top engineers to achieve 5x higher throughput. Learn how to plan engineering projects from scratch with structured exploration, clarifying questions, file tree diagrams, and detailed change plans.
  - Files:
    - EN: `/content/docs/en/best-practices/master-engineering-workflow-5x-productivity.mdx`
    - ZH: `/content/docs/zh/best-practices/master-engineering-workflow-5x-productivity.mdx`
  - Features:
    - 5-step engineering workflow for systematic project planning
    - Codebase exploration techniques
    - Clarifying questions framework
    - File tree visualization with status markers
    - File-by-file change planning with code snippets
    - Rationale and context documentation
    - Productivity improvement strategies

## [2025-09-30] - Enhanced Context Engineering Guide

### Updated
- **[best-practices]** Enhanced article: "Effective Context Engineering for AI Agents"
  - Source: Anthropic Engineering Team
  - Author: Anthropic Engineering Team & DeepToAI Team
  - Languages: EN/ZH
  - Type: Comprehensive Guide
  - Description: Significantly expanded the context engineering article with comprehensive practices for Claude Code users, showing how to apply context engineering principles to AI-assisted coding workflows with specific techniques and strategies.
  - Files:
    - EN: `/content/docs/en/best-practices/effective-context-engineering-for-ai-agents.mdx`
    - ZH: `/content/docs/zh/best-practices/effective-context-engineering-for-ai-agents.mdx`
  - Enhancements:
    - Added Claude Code specific context engineering practices
    - Expanded CLAUDE.md file management strategies
    - Enhanced file loading and context optimization techniques
    - Improved tool selection and efficiency guidelines
    - Added advanced context window management patterns
    - Integrated document-first workflow approaches
    - Added real-world case studies and examples

---

## Content Publication Format

Each entry should follow this format:

````
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

## [2025-09-30] - Effective Context Engineering for AI Agents

### Changed
- **[best-practices]** Enhanced article: "Effective Context Engineering for AI Agents"
  - Author: Anthropic Engineering Team
  - Languages: EN/ZH
  - Type: Guide Enhancement
  - Description: Significantly expanded the context engineering article with comprehensive practices for Claude Code users, showing how to apply context engineering principles to AI-assisted coding workflows with specific techniques and strategies.
  - Files:
    - EN: `/content/docs/en/best-practices/effective-context-engineering-for-ai-agents.mdx`
    - ZH: `/content/docs/zh/best-practices/effective-context-engineering-for-ai-agents.mdx`
  - Key Enhancements:
    - Added comprehensive Claude Code specific context management strategies
    - Integrated detailed CLAUDE.md file hierarchy and best practices
    - Included advanced dynamic context retrieval techniques for Claude Code
    - Added context window optimization with /compact, /clear, and session management
    - Provided Claude Code specific best practices for task planning and execution
    - Integrated production workflow patterns from document-first approaches
    - Added advanced context engineering patterns and multi-session management
    - Enhanced with additional practical干货 (concrete, actionable content) from best practices documentation
    - Integrated specific command usage, file management strategies, and advanced patterns
    - Added more detailed technical examples and specific implementation guidance
    - Included real-world case studies and practical examples from industry experience
    - Added advanced tools and techniques including custom commands, hooks, and subagents
    - Provided comprehensive best practices summary and future outlook

### Added
- **[best-practices]** New article: "Effective Context Engineering for AI Agents"
  - Source: https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
  - Author: Anthropic Engineering Team
  - Languages: EN/ZH
  - Type: Guide
  - Description: A comprehensive guide to context engineering - the evolution from prompt engineering to managing the holistic state available to LLMs for building steerable, effective agents. Learn strategies for optimizing context windows, managing attention budgets, and designing efficient agent architectures.
  - Files:
    - EN: `/content/docs/en/best-practices/effective-context-engineering-for-ai-agents.mdx`
    - ZH: `/content/docs/zh/best-practices/effective-context-engineering-for-ai-agents.mdx`
  - Key Topics:
    - Context engineering vs. prompt engineering
    - Attention budget management and context rot
    - System prompt design and organization
    - Tool efficiency and minimal viable tool sets
    - Dynamic context retrieval and agentic search
    - Context window management strategies
    - Best practices for context engineering

## [2025-09-27] - Happy: Mobile and Web Client for Claude Code - Remote Coding & AI Assistant

### Changed
- **[tools]** Updated article: "Happy: Mobile and Web Client for Claude Code - Remote Coding & AI Assistant"
  - Source: https://github.com/slopus/happy
  - Author: slopus team
  - Languages: EN/ZH
  - Type: Tool Guide Update
  - Description: Enhanced the existing Happy article to emphasize remote coding capabilities and daily AI assistant use cases with Sub Agents and MCP tools integration. Updated to reflect current GitHub stars (2.1K) and added specific use cases for remote development and automation.
  - Files:
    - EN: `/content/docs/en/tools/happy-mobile-claude-code-client.mdx`
    - ZH: `/content/docs/zh/tools/happy-mobile-claude-code-client.mdx`
  - Key Updates:
    - Highlighted remote access capabilities for home computers running Claude Code/Codex
    - Emphasized use as daily AI assistant with Sub Agents integration
    - Added specific use cases for email aggregation, AI news tracking, and social media automation
    - Updated date and GitHub star count

## [2025-01-17] - GitHub Spec Kit: Build High-Quality Software Faster with Spec-Driven Development

### Added
- **[tools]** New tool guide: "GitHub Spec Kit: Build High-Quality Software Faster with Spec-Driven Development"
  - Source: https://github.com/github/spec-kit
  - Author: GitHub Team
  - Languages: EN/ZH
  - Type: Tool Guide
  - Description: Discover GitHub's Spec Kit - a revolutionary toolkit that transforms software development through Spec-Driven Development. Learn how to build production-ready applications faster by focusing on specifications first, then generating implementations.
  - Files:
    - EN: `/content/docs/en/tools/github-spec-kit.mdx`
    - ZH: `/content/docs/zh/tools/github-spec-kit.mdx`
    - Source: https://github.com/github/spec-kit/blob/main/spec-driven.md
  - Features:
    - Complete SDD methodology explanation
    - CLI installation and setup guide
    - Development phases (0-1, Creative Exploration, Iterative Enhancement)
    - Enterprise integration capabilities
    - YouTube video tutorial embedded
  - Video: https://www.youtube.com/watch?v=a9eR1xsfvHg

## [2025-09-01] - My Current AI Dev Workflow

### Added
- **[best-practices]** New article: "My Current AI Dev Workflow"
  - Source: https://steipete.me/posts/2025/optimal-ai-development-workflow
  - Author: Peter Steinberger
  - Languages: EN/ZH
  - Type: Article
  - Description: Peter Steinberger's optimized AI development workflow using Ghostty + Claude Code + minimal tooling for maximum productivity. Features insights on tool selection, context management, testing strategies, and productivity comparisons.
  - Files:
    - EN: `/content/docs/en/best-practices/optimal-ai-development-workflow.mdx`
    - ZH: `/content/docs/zh/best-practices/optimal-ai-development-workflow.mdx`
    - Source: `/content/sources/optimal-ai-development-workflow_20250901.md`
    - Images: `/public/images/optimal-ai-development-workflow/`
  - Key Insights:
    - Ghostty terminal superiority over VS Code terminal
    - Multi-agent workflow optimization (1-2 for refactoring, ~4 for cleanup/tests/UI)
    - Context management strategies and session tracking
    - CLI-based service selection for agent compatibility
    - Rate limiting concerns and alternatives assessment
  - Images Downloaded:
    - `hero.png` - Featured article image

---

## [2025-08-27] - From Random Conversations to Reproducible Production: A Claude Code Advanced Workflow Guide

### Added
- **[best-practices]** New comprehensive workflow guide: "From Random Conversations to Reproducible Production: A Claude Code Advanced Workflow Guide"
  - Source: https://x.com/LotusDecoder/status/1958791207590797619
  - Author: LotusDecoder & DeepToAI Team
  - Languages: EN/ZH
  - Type: Production Workflow Guide
  - Description: A comprehensive guide that transforms chaotic AI-assisted development into a structured, document-first, diff-driven workflow. Features systematic planning, execution tracking, and team-wide reproducible processes for professional AI-assisted development.
  - Files:
    - EN: `/content/docs/en/best-practices/claude-code-production-workflow.mdx`
    - ZH: `/content/docs/zh/best-practices/claude-code-production-workflow.mdx`
    - Source: `/content/sources/莲花哥.md`
  - Features:
    - Four core principles: Document-first, Diff-driven, Scope convergence, Verifiable
    - Complete repository structure and naming conventions
    - Seven-layer prompt stack integration
    - Ready-to-use templates and scripts
    - Quality metrics and team-level asset development
    - CI/review integration patterns
    - Anti-pattern warnings and best practices
  - Implementation Tools:
    - PLAN.template.md for systematic task planning
    - Automated workflow scripts for execution
    - Quality metrics dashboard for continuous improvement
    - Team playbook for organization-wide adoption

## [2025-01-27] - 99.9% AI-Driven Development: A Comprehensive Implementation Guide

### Added
- **[best-practices]** New comprehensive guide: "99.9% AI-Driven Development: A Comprehensive Implementation Guide"
  - Source: LinkedIn Post Analysis (Michal Villnow)
  - Author: Michal Villnow & DeepToAI Team
  - Languages: EN/ZH
  - Type: Enhanced Guide
  - Description: Enhanced analysis of AI-driven development practices with comprehensive supplementary explanations based on existing best practices. Features systematic implementation framework, quality gates, modular architecture, and seven-layer prompt hierarchy for achieving 99.9% AI automation in software development.
  - Files:
    - EN: `/content/docs/en/best-practices/99-percent-ai-development-comprehensive-guide.mdx`
    - ZH: `/content/docs/zh/best-practices/99-percent-ai-development-comprehensive-guide.mdx`
    - Original Content: Image-based LinkedIn post by Michal Villnow
  - Features:
    - Eight-pillar implementation framework
    - Comprehensive CI/CD quality gates strategy
    - Modular architecture with interface separation
    - Seven-layer prompt hierarchy system
    - Performance metrics and optimization results
    - Future evolution roadmap with agentic review systems
    - Cross-references to 8+ related best practices articles
  - Enhanced Content Includes:
    - Detailed supplementary explanations for each practice
    - Links to related DeepToAI best practices
    - Implementation strategies and code examples
    - Architecture diagrams and workflow visualizations
    - Practical roadmap for adoption

## [2025-01-25] - Create a Gemini CLI Powered Subagent in Claude Code: Complete Tutorial

### Added
- **[sub-agents]** New tutorial: "Create a Gemini CLI Powered Subagent in Claude Code: Complete Tutorial"
  - Source: https://egghead.io/create-a-gemini-cli-powered-subagent-in-claude-code~adkge
  - Author: egghead.io & DeepToAI Team
  - Languages: EN/ZH
  - Type: Tutorial
  - Description: Comprehensive bilingual tutorial on creating specialized subagents that leverage Gemini's 1M token context for large-scale codebase analysis within Claude Code workflow. Includes detailed examples for pattern detection, architecture analysis, code quality assessment, and technology stack evaluation.
  - Files:
    - EN: `/content/docs/en/sub-agents/gemini-cli-subagent-tutorial.mdx`
    - ZH: `/content/docs/zh/sub-agents/gemini-cli-subagent-tutorial.mdx`
    - Source: `/content/sources/gemini-cli-subagent-egghead_20250825.md`
  - Features:
    - Complete subagent definition with specialized examples
    - Comprehensive use case scenarios for different analysis types
    - Command flag guidelines and best practices
    - Step-by-step implementation guide
    - Integration with existing Claude Code workflow

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
```
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