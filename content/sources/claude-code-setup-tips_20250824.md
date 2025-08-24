Title: 33 Claude Code Setup Tips You NEED to Know

URL Source: https://pageai.pro/blog/31-claude-code-setup-tips

Published Time: 2025-08-11T00:00:00.000Z

Markdown Content:
After shipping many apps to production with both Cursor and Claude Code, I found out that Claude Code is quite low-level and there are many secrets you need to unlock to turn Claude Code from pretty good to mind-blowing.

In this guide, I'll share 33 tips that will take you from a Claude Code noob to Sam Altman levels of expertise (well, almost). These tips are fully packed with gems that will boost your productivity and reduce time consuming errors.

 Without these tips, you'll likely be more productive in Cursor, Windsurf, and dare I say even in GitHub Copilot then in Claude Code.

If video is your jam, here's a full tutorial on YouTube:

My first week with Claude Code was a disaster.

 It was making so many silly mistakes, type errors, resintalling packages I already had, lint errors, inconsistent formatting, straight up unicode and mangled output in my source code (`/n/n`).

 Besides that, it doesn't have checkpoints like Cursor does, so often I couldn't revert to a working state and had to start over.

What you'll learn
-----------------

This comprehensive guide covers everything from basic keyboard shortcuts to advanced automation with hooks. By the end, you'll have mastered:

1.   Essential keyboard shortcuts and modes
2.   IDE integration and setup
3.   Prompting techniques
4.   Best MCP servers
5.   Project rules and Claude.md configuration
6.   Automation with hooks

Let's dive in! 🏊‍♂️

Part 1: Getting Started & Basic Setup
-------------------------------------

These foundational tips will get you up and running with Claude Code. Fast.

### 1. Cycle through modes with Shift+Tab

Claude Code has three input modes that fundamentally change how it behaves. Master these to work efficiently:

*   **Edit mode (default)**: Requires your approval before making file changes
*   **Auto-accept mode** (1 Shift+Tab): Writes files without asking permission. Best for most tasks to be honest.
*   **Plan mode** (2 Shift+Tabs): Creates action plans without making code changes. Perfect for research.

```
# Quick mode switching
Shift+Tab -> Auto-accept mode
Shift+Tab -> Plan mode
Shift+Tab -> Back to Edit mode
```

### 2. Add Claude Code to your IDE

Installing Claude Code as an extension will give you the best out of both worlds: the best of the terminal and the best of the IDE.

[Check the Anthropic docs for more info](https://docs.anthropic.com/en/docs/claude-code/ide-integrations#installation).

Once you have it installed, it'll be able to hook into IDE diagnostics, provide context and show diffs right inside your favorite text editor.

Works with VS Code, Cursor, Windsurf, JetBrains, and more.

### 3. Configure multi-line prompts with terminal setup

Multi-line prompts are essential for complex instructions. Set them up once:

```
/terminal-setup # This configures Shift+Enter for multi-line prompts
```

### 4. Connect your IDE for automatic context

When connected to your IDE, Claude Code automatically includes selected lines in its context:

```
/ide # Select your IDE from VS Code, Cursor, or JetBrains etc.
```

### 5. Quick open with Command+Escape

You'll open Claude Code instantly with:

*   `CMD`/`CTRL` + `Escape` (Mac/Windows)

### 6. Other shortcuts you'll use a lot

*   `CMD`/`CTRL` + `L` clear screen
*   `ESC` + `ESC` jump to prev
*   `SHIFT` + `TAB` to auto accept edits Hit twice for planning
*   `SHIFT` + `ENTER` for new line without slash after running `/terminal-setup`
*   `CMD`/`CTRL` + `R` verbose output

PageAI comes with over 41+ rules, commands and hooks.

 Get an entire codebase in minutes and skip the setup.

Part 2: Core Features
---------------------

These features form the backbone of productive Claude Code usage.

### 7. Work with images directly

Claude Code is multimodal. You can:

*   Drag and drop screenshots directly on to the Claude Code window OR
*   Copy-paste images into the prompt input

This is perfect for "make it look like this" type prompts.

### 8. Track costs with detailed analysis

If you want to see a detailed breakdown of your token usage, you can use:

```
npx ccusage
# Shows detailed breakdown of input/output tokens
# Tracks costs over time
```

It even has a live usage view with `blocks --live`!

Pro tip: Get the Claude Max subscription (100/m o n t h)f o r(n e a r l y)u n l i m i t e d u s a g e i f y o u′r e s p e n d i n g m o r e t h a n t h a t e v e r y m o n t h.T h e 100/month) for (nearly) unlimited usage if you're spending more than that every month. The 100/month unlimited plan is enough for all day Sonnet usage for most people.

 You don't get a lot of Opus though.

### 9. Create custom slash commands

You can easily extend Claude Code with your own commands:

```
# Create a file in .claude/commands/
# Example: .claude/commands/release.md

---
description: Release a new version of the project with comprehensive workflow
---

# How to release a new version of the project

Follow this comprehensive release process to ensure proper versioning, changelog updates, and deployment.

## 1. Pre-Release Analysis

### Check Current State
```bash
# Verify you're on the main branch and up to date
git checkout main
git pull origin main
git status
```

### Identify Last Release
```bash
# Find the last release tag
git tag --sort=-version:refname | head -10
git describe --tags --abbrev=0

# Or check specific tag pattern
git tag -l "v*" --sort=-version:refname | head -5
```

### Analyze Changes Since Last Release
```bash
# Get commit history since last tag
LAST_TAG=$(git describe --tags --abbrev=0)
echo "Changes since $LAST_TAG:"

# Detailed commit log with files changed
git log $LAST_TAG..HEAD --oneline --stat

# Just commit messages for changelog
git log $LAST_TAG..HEAD --pretty=format:"- %s (%h)"

# Group by type (if using conventional commits)
git log $LAST_TAG..HEAD --pretty=format:"%s" | grep -E "^(feat|fix|docs|style|refactor|test|chore)"
```

### Analyze Impact and Determine Version Bump
```bash
# Count commits by type
echo "=== COMMIT ANALYSIS ==="
echo "Features (minor bump):"
git log $LAST_TAG..HEAD --pretty=format:"%s" | grep -c "^feat"

echo "Bug fixes (patch bump):"
git log $LAST_TAG..HEAD --pretty=format:"%s" | grep -c "^fix"

echo "Breaking changes (major bump):"
git log $LAST_TAG..HEAD --grep="BREAKING CHANGE" --oneline | wc -l

echo "Other changes:"
git log $LAST_TAG..HEAD --pretty=format:"%s" | grep -v -E "^(feat|fix)" | wc -l
```

### Check Files Changed
```bash
# See which files have been modified
git diff $LAST_TAG..HEAD --name-only

# Focus on important files
git diff $LAST_TAG..HEAD --name-only | grep -E "(package\.json|README\.md|CHANGELOG\.md)"

# Check for dependency changes
git diff $LAST_TAG..HEAD package.json
```

## 2. Version Determination

Based on the analysis above, determine the new version following [Semantic Versioning](https://semver.org/):

- **Major (X.0.0)**: Breaking changes, incompatible API changes
- **Minor (X.Y.0)**: New features, backwards compatible
- **Patch (X.Y.Z)**: Bug fixes, backwards compatible

```bash
# Get current version from package.json
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "Current version: $CURRENT_VERSION"

# Calculate next version (replace with appropriate bump)
# For patch: npm version patch --no-git-tag-version
# For minor: npm version minor --no-git-tag-version
# For major: npm version major --no-git-tag-version
```

## 3. Update Documentation

### Update CHANGELOG.md
```bash
# Create backup
cp CHANGELOG.md CHANGELOG.md.backup

# Edit CHANGELOG.md to add new version section
# Include:
# - Version number and date
# - Added features
# - Fixed bugs
# - Changed functionality
# - Deprecated features
# - Removed features
# - Security fixes
```

**CHANGELOG.md format example:**
```markdown
## [X.Y.Z] - YYYY-MM-DD

### Added
- New feature descriptions

### Changed
- Modified functionality

### Fixed
- Bug fix descriptions

### Security
- Security improvements
```

### Update README.md if needed
```bash
# Check if README needs updates for new features
git diff $LAST_TAG..HEAD README.md

# Update version badges, installation instructions, or feature lists if necessary
```

## 4. Version Bump and Tagging

### Update Package Version
```bash
# Bump version in package.json (choose appropriate level)
npm version patch --no-git-tag-version  # for patch
# npm version minor --no-git-tag-version  # for minor
# npm version major --no-git-tag-version  # for major

# Verify new version
NEW_VERSION=$(node -p "require('./package.json').version")
echo "New version: $NEW_VERSION"
```

### Commit Release Changes
```bash
# Stage all release-related changes
git add package.json CHANGELOG.md README.md

# Create release commit
git commit -m "chore: release v$NEW_VERSION

- Update version to $NEW_VERSION
- Update CHANGELOG.md with release notes
- Update documentation as needed"
```

### Create and Push Tag
```bash
# Create annotated tag with release notes
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION

$(git log $LAST_TAG..HEAD --pretty=format:"- %s (%h)" | head -20)"

# Push commit and tag
git push origin main
git push origin "v$NEW_VERSION"
```

## 5. Build and Test

### Run Full Test Suite
```bash
# Install dependencies
npm ci

# Run all tests
npm run test
npm run lint
npm run type-check

# Build project
npm run build

# Test build output
npm run start  # or appropriate command to test build
```

## 6. Create GitHub Release

### Using GitHub CLI
```bash
# Create GitHub release with auto-generated notes
gh release create "v$NEW_VERSION" \
  --title "Release v$NEW_VERSION" \
  --generate-notes \
  --verify-tag

# Or create with custom notes
gh release create "v$NEW_VERSION" \
  --title "Release v$NEW_VERSION" \
  --notes-file RELEASE_NOTES.md \
  --verify-tag
```

### Manual Release Notes Template
Create `RELEASE_NOTES.md`:
```markdown
## What's Changed

### 🚀 Features
- List new features

### 🐛 Bug Fixes
- List bug fixes

### 📚 Documentation
- Documentation updates

### 🔧 Maintenance
- Internal changes

**Full Changelog**: https://github.com/USER/REPO/compare/PREVIOUS_TAG...v$NEW_VERSION
```

## 7. Post-Release Tasks

### Verify Release
```bash
# Verify tag exists
git tag -l "v$NEW_VERSION"

# Verify GitHub release
gh release view "v$NEW_VERSION"

# Check if package published (if applicable)
# npm view PACKAGE_NAME versions --json
```

### Update Development Branch (if using)
```bash
# If you have a development branch, merge back
git checkout develop  # or your dev branch name
git merge main
git push origin develop
```

### Cleanup
```bash
# Remove backup files
rm -f CHANGELOG.md.backup RELEASE_NOTES.md

# Verify clean state
git status
```

## 8. Communication

- [ ] Update project documentation/wiki if needed
- [ ] Notify team/users about the release
- [ ] Update deployment environments
- [ ] Monitor for any post-release issues

## Useful Commands for Release Management

### Find Specific Types of Changes
```bash
# Breaking changes
git log $LAST_TAG..HEAD --grep="BREAKING CHANGE"

# Security fixes
git log $LAST_TAG..HEAD --grep="security\|Security\|CVE"

# Performance improvements
git log $LAST_TAG..HEAD --grep="perf\|performance\|optimize"
```

### Release Branch Workflow (Alternative)
```bash
# Create release branch for final preparations
git checkout -b release/v$NEW_VERSION
# Make final adjustments, then merge back to main
```

### Rollback if Needed
```bash
# Delete tag if something went wrong
git tag -d "v$NEW_VERSION"
git push origin :refs/tags/"v$NEW_VERSION"

# Revert release commit
git revert HEAD
```

## Best Practices

- **Always test before releasing** - Run full test suite and manual testing
- **Use semantic versioning** consistently
- **Keep detailed changelogs** for user clarity
- **Coordinate releases** with team members
- **Monitor post-release** for issues
- **Use release branches** for complex releases
- **Automate where possible** but verify each step
- **Tag consistently** using the same format (e.g., v1.2.3)

Remember to follow your project's specific release guidelines and coordinate with your team before publishing releases.
```

Now you can use `/release` in Claude Code!

### 10. Clear context strategically

Anthropic models are pretty good at coding and have a huge context window. However, they tend to get confused if you don't clear the context after major tasks.

```
/clear
# Use after completing major tasks
# Prevents context pollution
# Reduces token usage
```

### 11. Resume sessions after crashes

Sometimes we accidentally close Claude Code and lose our work, our IDE updates or if you live up north: your power goes out. 

You can pick up where you left off with:

```
/resume
# Shows all past sessions
# Select any to continue where you left off
# Works even after power outages
```

### 12. Handle long prompts efficiently

For complex prompts with code samples and formatting:

1.   Press `CMD`/`CTRL` + `N` to open a new buffer
2.   Type your entire prompt with proper formatting
3.   Select all (`CMD`/`CTRL` + `A`)
4.   Copy (`CMD`/`CTRL` + `C`)
5.   Paste into Claude Code prompt

This collapses everything into a manageable single line.

Part 3: Advanced Prompting Techniques
-------------------------------------

These prompts will get you the most out of Claude Code. Regular prompts work, but there are a few keywords that will get you even better results.

### 13. Control thinking budget

Claude Code allocates "thinking tokens" based on your prompt:

```
# Basic thinking (fast, simple tasks)
"think about this and implement..."

# More thinking (complex logic)
"think harder about the architecture..."

# Maximum thinking (critical decisions)
"ultrathink about the security implications..."
```

Thinking appears as italic gray text in the terminal.

### 14. Leverage subagents for complex tasks

Claude Code can spawn multiple agents to parallelize work:

```
"Use subagents to refactor this codebase"
# Claude will automatically:
# - Analyze the task complexity
# - Spawn appropriate number of agents
# - Coordinate their work
# - Merge results
```

You can also create customized subagents, check [this guide](https://docs.anthropic.com/en/docs/claude-code/sub-agents). For example, you can create a subagent that only writes UI code and another that only writes tests and another that only reviews code.

### 15. Run tasks in loops

Since Claude Code is great at tool calling (and Anthropic's models are trained to be good at tool calling), it is the perfect AI for iterative fixes:

```
"Run the build in a loop and fix all errors as they appear"
# Claude will:
# 1. Run the build
# 2. Analyze errors
# 3. Fix them
# 4. Repeat until clean
```

This is also great for large refactors when it'll need to go over entire directories and make changes spanning multiple files.

Get an entire codebase in minutes with MCPs, hooks and over 41+ commands and rules 🫡

Part 4: Must-Have MCP Extensions
--------------------------------

I am not crazy about MCP servers, but these have always helped me a lot. I install them by default in all my projects.

### 16. TaskMaster AI MCP - Essential for complex projects

[TaskMaster AI](https://github.com/eyaltoledano/claude-task-master) breaks work into manageable chunks and tracks dependencies:

```
{
  "mcpServers": {
    "taskmaster-ai": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "--package=task-master-ai", "task-master-ai"],
      "env": {}
    },
  }
}
```

This is the absolute best way to reduce errors in your project. Check out our [detailed TaskMaster AI tutorial](https://pageai.pro/blog/claude-code-taskmaster-ai-tutorial).

### 17. Playwright MCP - Browser automation

The [Playwright MCP](https://github.com/microsoft/playwright-mcp) gives Claude Code the ability to interact with browsers:

```
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"],
      "env": {}
    },
  }
}
```

Now Claude can:

*   Click around your app
*   Check for console errors
*   Take screenshots
*   Run E2E tests

### 18. Context7 MCP - Up-to-date documentation

Have you ever been fighting AI trying to get it to use the latest version of a a framework or library?

 Well, the [Context7 MCP](https://github.com/upstash/context7) fixes that:

```
{
  "mcpServers": {
    "context7": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"],
      "env": {}
    }
  }
}
```

This MCP provides current documentation and prevents Claude from outputting outdated patterns.

### 19. Review changes with another AI

This is a tip that the Anthropic team itself recommends. 

Use other models, subagents or review AIs such as [CodeRabbit](https://www.coderabbit.ai/) to double-check Claude's work.

Try to give them a different, critical personality for best results.

Part 5: Project Setup & Rules
-----------------------------

Configure Claude Code to understand your project deeply. 

This not only makes things faster, but also eliminates duplication of modules and libraries in a large codebase.

### 20. Initialize existing codebases

For existing projects, generate conventions automatically:

```
/init
# Generates claude.md with:
# - Detected conventions
# - File structure
# - Dependencies
# - Patterns
```

### 21. Add memories/rules dynamically

Add memories/rules on the fly. 

Type this anywhere in a conversation:

`# "Always use async/await instead of .then()"`

Claude will add it to `Claude.md`.

### 22. Nest Claude.md files for context

You can create directory-specific rules and Claude Code will automatically pick the right one for the current directory:

```
project/
└─ claude.md           # Global rules
└─ frontend/
   └─ claude.md      # Frontend-specific rules
└─ backend/
   └─ claude.md      # Backend-specific rules
```

### 23. Reference files in rules

It's also possible to reference other rules by file name. This allows sharing rules between AIs and tools and eliminates duplication of rules:

```
## Coding Standards
See: @.cursor/rules/self-improvement.mdc

## API Documentation
See: @docs/api.md
```

Ready to ship today?

Over 41+ rules, commands and a complete codebase with a beautiful design.

Part 6: Essential Rules for Every Project
-----------------------------------------

These rules will save you hundreds of hours of debugging.

 Also, they'll increase consistency and add abilities Cursor etc. had for a while, like automatic "checkpoints" and autofixing.

### 24. Automatic version control (Cursor checkpoint alternative)

Since Claude Code doesn't have checkpoints like Cursor, you are likely to lose work eventually.

With this rule, you can add a checkpoint after every major task:

```
## Git & Version Control

- Add and commit automatically whenever an entire task is finished
- Use descriptive commit messages that capture the full scope of changes
```

### 25. IDE diagnostics after tasks

This is probably the most important rule you'll add to Claude Code. 

For every edited file, it'll run IDE error checks (linting, type errors, etc.) and fix them automatically. This not only saves you some extra prompts, but also uses the correct config you have already set up in your project.

```
## EXTREMELY IMPORTANT: Code Quality Checks

**ALWAYS run the following commands before completing any task:**

Automatically use the IDE's built-in diagnostics tool to check for linting and type errors:
   - Run `mcp__ide__getDiagnostics` to check all files for diagnostics
   - Fix any linting or type errors before considering the task complete
   - Do this for any file you create or modify

This is a CRITICAL step that must NEVER be skipped when working on any code-related task.
```

### 26. Documentation lookup rule

This rule makes Claude Code look up the latest documentation for the framework or library you are using. 

It works hand in hand with the Context7 MCP mentioned above:

```
## Look up documentation with Context7

When code examples, setup or configuration steps, or library/API documentation are requested, use the Context7 mcp server to get the information.
```

### 27. Dependency management

I caught Claude Code often installing the same packages multiple times, or installing a slightly outdated version of a package.

 This rule prevents duplicate installations:

```
---
description:
globs:
alwaysApply: true
---
# Spamoose Tech Stack & Dependencies

---
**Version:** 1.0.0
**Node.js Requirement:** >=22.0.0
**Last Updated:** January 2025

## Core Framework Stack

### Next.js & React (Latest Generation)
- **Next.js**: `^15.3.2` - App Router, Latest features
- **React**: `^19.1.0` - Latest React 19 with Concurrent Features
- **React DOM**: `^19.1.0` - Matching React version
- **TypeScript**: `^5.7.3` - Latest stable TypeScript

**🔥 Version Notes:**
- React 19 includes built-in optimizations and new concurrent features
- Next.js 15.x brings improved App Router and performance
- Requires Node.js 22+ for optimal compatibility

## UI Component Foundation

### Radix UI Ecosystem (Comprehensive)
Primary unstyled component primitives:
- `@radix-ui/react-accordion` `^1.2.11`
- `@radix-ui/react-alert-dialog` `^1.1.14`
- `@radix-ui/react-avatar` `^1.1.10`
- `@radix-ui/react-checkbox` `^1.3.2`
- `@radix-ui/react-dialog` `^1.1.14`
- `@radix-ui/react-dropdown-menu` `^2.1.15`
- `@radix-ui/react-popover` `^1.1.14`
- `@radix-ui/react-select` `^2.2.5`
- `@radix-ui/react-tabs` `^1.1.12`
- `@radix-ui/react-toast` `^1.2.14`
- And 15+ additional Radix components

### Styling & Design System
- **TailwindCSS**: `^3.4.16` - Core utility framework
- **Tailwind Animate**: `^1.0.7` - Animation utilities
- **Tailwind Forms**: `^0.5.10` - Form styling
- **Tailwind Typography**: `^0.5.16` - Rich text styling
- **Class Variance Authority**: `^0.7.1` - Component variants
- **Tailwind Merge**: `^1.14.0` - Dynamic class merging
- **CLSX**: `^2.1.1` - Conditional classes

## Form Management & Validation

### React Hook Form Stack
- **React Hook Form**: `^7.56.4` - Primary form library
- **@hookform/resolvers**: `^3.10.0` - Schema resolvers
- **Zod**: `^3.25.67` - Runtime validation & type safety

**📋 Best Practices:**
- Use React Hook Form for all forms (performance optimized)
- Zod schemas for both client/server validation
- Leverage `@hookform/resolvers/zod` for integration

## Content & Documentation

### ContentLayer Stack
- **ContentLayer2**: `0.5.7` - Content transformation
- **Next ContentLayer2**: `0.5.7` - Next.js integration

### Markdown Processing
- **Remark**: `^15.0.0` - Markdown processor
- **Remark GFM**: `^4.0.0` - GitHub Flavored Markdown
- **Remark Math**: `^6.0.0` - Math expression support
- **Rehype**: Multiple plugins for HTML processing
- **Reading Time**: `1.5.0` - Article reading estimates

## Animation & Interactions

### Motion & Carousel
- **Framer Motion**: `^12.15.0` - Advanced animations
- **Embla Carousel React**: `^8.6.0` - Touch-friendly carousels

## Data Visualization & Tables

### Analytics & Charts
- **Recharts**: `^2.15.3` - React chart library
- **@tanstack/react-table**: `^8.21.3` - Powerful table component

## UI Enhancement Libraries

### Icons & Visual Elements
- **Lucide React**: `^0.475.0` - Primary icon system
- **@radix-ui/react-icons**: `^1.3.0` - Radix icon set
- **@icons-pack/react-simple-icons**: `^12.9.0` - Brand icons

### Advanced UI Components
- **Sonner**: `^1.7.4` - Toast notifications
- **CMDK**: `^1.1.1` - Command palette
- **Vaul**: `^1.1.2` - Mobile drawer component
- **React Day Picker**: `^8.10.1` - Date picker
- **React Resizable Panels**: `^2.1.8` - Layout panels

## Development & Build Tools

### Linting & Formatting
- **ESLint**: `^9.27.0` - Latest ESLint
- **TypeScript ESLint**: `^8.33.0` - TypeScript rules
- **Prettier**: `^3.4.2` - Code formatting
- **Prettier Tailwind Plugin**: `^0.6.11` - Tailwind class sorting

### Build & Bundle
- **ESBuild**: `^0.25.3` - Fast bundling
- **Next Bundle Analyzer**: `^15.3.2` - Bundle analysis
- **Cross-env**: `^7.0.3` - Cross-platform env vars

### Git Workflow
- **Husky**: `^9.1.7` - Git hooks
- **Lint Staged**: `^15.4.2` - Staged file processing

## Utilities & Helpers

### Date & String Processing
- **Date-fns**: `^3.6.0` - Date manipulation
- **GitHub Slugger**: `^2.0.0` - URL-safe slugs
- **JS-YAML**: `^4.1.0` - YAML processing

### File & Media
- **Image Size**: `^2.0.2` - Image dimensions
- **Probe Image Size**: `^7.2.3` - Image metadata
- **MIME Types**: `^2.1.35` - MIME type detection

## Analytics & Monitoring

### Vercel Ecosystem
- **@vercel/analytics**: `^1.5.0` - Analytics
- **@vercel/og**: `^0.6.8` - Open Graph images

### Error Handling
- **React Error Boundary**: `^6.0.0` - Error boundaries

## Theme & User Experience

### Theme Management
- **Next Themes**: `^0.4.6` - Dark/light mode
- **@emotion/is-prop-valid**: `^1.3.1` - Emotion utilities

## Content Platform Integration

### Shipixen Platform
- **@shipixen/pliny**: `^2.3.1` - Shipixen blog platform utilities

---

## 🎯 Architectural Best Practices

### Component Architecture
```typescript
// Use this pattern for all components
export const ComponentName = ({ ...props }) => {
  // 1. Hooks first
  // 2. Event handlers
  // 3. Render logic
  return <div>...</div>
}
```

### Form Patterns
```typescript
// Standard form setup
const form = useForm<FormSchema>({
  resolver: zodResolver(schema),
  defaultValues: {...}
})
```

### Styling Approach
- Radix UI for behavior + TailwindCSS for styling
- Use `cn()` utility for conditional classes
- Leverage CVA for component variants

### Performance Considerations
- React 19's automatic optimizations
- Next.js 15 App Router benefits
- Lazy loading with React.lazy()
- Image optimization with Next.js Image

### File Organization
```
components/
  ├── shared/ui/          # Radix + Tailwind components
  ├── layout/             # Layout-specific components
  └── [feature]/          # Feature-specific components
```

---

## ⚡ Version Compatibility Notes

- **React 19** introduces automatic memoization
- **Next.js 15** requires React 18+ (you have 19)
- **Node.js 22+** required for optimal performance
- **TypeScript 5.7** includes latest decorators support
- All Radix components are latest stable versions
- TailwindCSS 3.4+ supports modern CSS features

## 🚨 Critical Dependencies to Monitor

1. **React 19** - Still stabilizing, monitor for patches
2. **Next.js 15** - Watch for App Router updates
3. **ContentLayer2** - Community fork, ensure maintenance
4. **Radix UI** - Core to your design system
5. **React Hook Form** - Critical for form performance
```

NB: you should generate this rule automatically with this prompt.

```
@package.json Analyze all major dependencies and create a memory in Claude.md outlining the stack of the application and the versions I'm using, and any remarks on best practices on those versions.
```

### 28. Project structure documentation

It often happens that Claude Code misses existing modules and creates similar duplicates, often in the wrong place.

This not only makes it faster, but also more accurate:

```
# Project Structure Guide

This rule explains the folder structure of the project. Use this as a reference for navigating and understanding the codebase.

## Root Directory

The root contains configuration files and the main project folders:
- [package.json](mdc:package.json): Project dependencies and scripts
- [tsconfig.json](mdc:tsconfig.json): TypeScript configuration
- [next.config.js](mdc:next.config.js): Next.js configuration
- [tailwind.config.js](mdc:tailwind.config.js): Tailwind CSS configuration
- [contentlayer.config.ts](mdc:contentlayer.config.ts): Contentlayer setup for MDX/content

## Key Directories

### [components/](mdc:components)

Reusable React components, organized by feature:

- `blog/`: Blog-specific UI components
- `landing/`: Landing page components
- `shared/`: Shared UI primitives (often Shadcn-based)
- `search/`: Search UI components
- `icons/`: SVG and icon components
- `MDXComponents.tsx`: MDX element renderers. Each element that should be rendered in the blog needs to be added here.

### [layouts/](mdc:layouts)

Page and post layout components, including list and post layouts, author layouts, and banners.

### [data/](mdc:data)

Content and configuration data:

- `authors/`: Author profiles
- `config/`: Site configuration
- `.mdx` files: Content pages - any mdx file in here will be rendered as a blog post
- `app-info.ts`: App metadata (auto-generated)

### [app/](mdc:app)

Next.js App Router directory. Contains all route definitions and API endpoints:

- `page.tsx`: Main entry point
- `layout.tsx`: Root layout
- `not-found.tsx`: 404 page
- `seo.tsx`, `theme-providers.tsx`: SEO and theme context
- Subfolders for routes: `about/`, `tags/`, `api/`, `terms/`, `pricing/`, `privacy/`, etc.
- Dynamic routes: `[...slug]/`, `all-articles/`

### [scripts/](mdc:scripts)

Node scripts for build, RSS generation, and app info automation.

### [css/](mdc:css)

Global and syntax highlighting CSS files.

### [lib/](mdc:lib)

Utility functions and helpers.

### [components/shared/](mdc:components/shared)

**Shared Components**: Common UI and logic used across the app, including:
- `Header.tsx`: Main site header, navigation, and theme switcher. Uses `headerNavLinks` from config.
- `Footer.tsx`: Main site footer, renders columns and social links using `footerLinks` and `siteConfig`.
- `MobileNav.tsx`, `ScrollTop.tsx`, `ThemeSwitch.tsx`, `Analytics.tsx`, `PageTitle.tsx`, `SectionContainer.tsx`, `VideoPlayer.tsx`, `ActiveLink.tsx`, `Link.tsx`, `FooterSupportButton.tsx`, `Image.tsx`: Utility and layout components for navigation, theming, analytics, and content display.
- `SearchProvider.tsx`: Context provider for search functionality.
- `useThemeSwitch.tsx`: Custom hook for theme toggling.
- **[ui/](mdc:components/shared/ui)**: Shadcn-based UI primitives (buttons, toggles, dialogs, forms, etc.) for consistent design system usage. Example primitives:
  - `button.tsx`: Button component with multiple variants and sizes.
  - `toggle.tsx`: Toggle switch using Radix UI and class-variance-authority.
  - `dropdown-menu.tsx`, `menubar.tsx`, `pagination.tsx`, `calendar.tsx`, `card.tsx`, `table.tsx`, `tabs.tsx`, `select.tsx`, `sheet.tsx`, `slider.tsx`, `switch.tsx`, `badge.tsx`, `dialog.tsx`, `alert.tsx`, `avatar.tsx`, `form.tsx`, etc.
  - All primitives are designed for accessibility, theme support, and composability.

### [data/config/](mdc:data/config)

**Configuration Directory**: Centralized site and UI configuration:
- `site.settings.js`: Main site config (title, description, analytics, newsletter, search, etc.), imported as `siteConfig`.
- `siteSettingsInterface.ts`: TypeScript interface for site config and metadata.
- `metadata.js`: Site metadata (title, description, domain, social links, theme, etc.).
- `footerLinks.ts`: Footer navigation columns and links.
- `headerNavLinks.ts`: Header navigation links, referencing `siteConfig` for dynamic paths.
- `colors.js`: Semantic color palette for Tailwind and UI.
- `pricingData.tsx` & `pricingDataInterface.ts`: Pricing tiers, frequencies, and types for pricing pages.
- `searchLinks.ts`: Quick navigation/search links for the app.

These config files are imported throughout the app and components to ensure consistent navigation, theming, and business logic.

## Other Notable Folders

- `.cursor/`: Cursor AI rules and metadata
- `public/`: Static assets

Refer to this rule for a high-level overview of the project structure and the purpose of each directory.
```

NB: you should generate this rule automatically with this prompt:

```
@src List all source files and folders in the project,
and create a new rule/memory outlining the directory structure and important files and folders.
```

### 29. Self-improvement rule

This rule helps Claude learn from its own mistakes and improve over time:

```
## Rule Improvement Triggers

- New code patterns not covered by existing rules
- Repeated similar implementations across files
- Common error patterns that could be prevented
- New libraries or tools being used consistently
- Emerging best practices in the codebase

# Analysis Process:
- Compare new code with existing rules
- Identify patterns that should be standardized
- Look for references to external documentation
- Check for consistent error handling patterns
- Monitor test patterns and coverage

# Rule Updates:

- **Add New Rules When:**
  - A new technology/pattern is used in 3+ files
  - Common bugs could be prevented by a rule
  - Code reviews repeatedly mention the same feedback
  - New security or performance patterns emerge

- **Modify Existing Rules When:**
  - Better examples exist in the codebase
  - Additional edge cases are discovered
  - Related rules have been updated
  - Implementation details have changed

- **Example Pattern Recognition:**

  ```typescript
  // If you see repeated patterns like:
  const data = await prisma.user.findMany({
    select: { id: true, email: true },
    where: { status: 'ACTIVE' }
  });

  // Consider adding to [prisma.mdc](mdc:shipixen/.cursor/rules/prisma.mdc):
  // - Standard select fields
  // - Common where conditions
  // - Performance optimization patterns
  ```

- **Rule Quality Checks:**
- Rules should be actionable and specific
- Examples should come from actual code
- References should be up to date
- Patterns should be consistently enforced

## Continuous Improvement:

- Monitor code review comments
- Track common development questions
- Update rules after major refactors
- Add links to relevant documentation
- Cross-reference related rules

## Rule Deprecation

- Mark outdated patterns as deprecated
- Remove rules that no longer apply
- Update references to deprecated rules
- Document migration paths for old patterns

## Documentation Updates:

- Keep examples synchronized with code
- Update references to external docs
- Maintain links between related rules
- Document breaking changes
```

Part 7: Advanced Automation with Hooks
--------------------------------------

[Claude Code Hooks](https://docs.anthropic.com/en/docs/claude-code/hooks) are Claude's secret weapon for automation. They're _deterministic_ commands that execute automatically at specific points during Claude Code's workflow, opening up the door for a ton of automation.

### Available Hook Types

Claude Code supports several hook events that cover the entire agentic lifecycle:

| Hook Event | When It Runs | Common Use Cases |
| --- | --- | --- |
| `PreToolUse` | Before any tool execution | Validation, environment checks, backups |
| `PostToolUse` | After tool completion | Formatting, linting, testing, commits |
| `UserPromptSubmit` | When user submits prompt | Input validation, context injection |
| `Notification` | On system notifications | Alerts, logging, monitoring |
| `Stop` | When Claude finishes response | Cleanup, final checks, notifications |
| `SubagentStop` | When subagent completes | Subagent-specific cleanup |

### 30. Using hooks for good: Bell sound on completion (like Cursor)

Since they are so powerful, I obviously used them to... get notified when tasks complete:

```
"hooks": {
  "Stop": [
    {
      "matcher": "",
      "hooks": [
        {
          "type": "command",
          "command": "afplay /System/Library/Sounds/Funk.aiff"
        }
      ]
    }
  ]
}
```

Ironically, this was one of the things that I've missed the most from Cursor.

### 31. More advanced hooks: use a script

Hooks can also be entire scripts or even applications. 

So the same example with the bell sound can be expanded to:

```
{
  "hooks": {
    "Notification": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/play-sound.js notification"
          }
        ]
      }
    ],
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/play-sound.js"
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/play-sound.js done"
          }
        ]
      }
    ]
  }
}
```

Where the `play-sound.js` script ads support for multiple sounds as well as Windows compatibility.

```
#!/usr/bin/env node

const { exec } = require('child_process');
const os = require('os');

// Get command line argument for sound type
const soundType = process.argv[2] || 'default';

// Get platform-specific sound command and file
function getSoundConfig(type = 'default') {
  const platform = os.platform();

  switch (platform) {
    case 'darwin': // macOS
      const macSounds = {
        default: '/System/Library/Sounds/Funk.aiff',
        notification: '/System/Library/Sounds/Blow.aiff',
        done: '/System/Library/Sounds/Frog.aiff',
      };
      return {
        command: 'afplay',
        soundFile: macSounds[type] || macSounds.default,
      };

    case 'linux':
      // Try multiple Linux sound players in order of preference
      const linuxSounds = {
        default: '/usr/share/sounds/freedesktop/stereo/complete.oga',
        notification: '/usr/share/sounds/freedesktop/stereo/message.oga',
        done: '/usr/share/sounds/freedesktop/stereo/bell.oga',
      };
      return {
        command: 'paplay || aplay || play',
        soundFile: linuxSounds[type] || linuxSounds.default,
      };

    case 'win32': // Windows
      const winSounds = {
        default: 'C:\\Windows\\Media\\tada.wav',
        notification: 'C:\\Windows\\Media\\Windows Notify.wav',
        done: 'C:\\Windows\\Media\\Windows Ding.wav',
      };
      const soundPath = winSounds[type] || winSounds.default;
      return {
        command: `powershell -c (New-Object Media.SoundPlayer "${soundPath}").PlaySync()`,
        soundFile: null, // Included in command
      };

    default:
      throw new Error(`Unsupported platform: ${platform}`);
  }
}

// Play the sound with error handling
function playSound() {
  try {
    const { command, soundFile } = getSoundConfig(soundType);
    const fullCommand = soundFile ? `${command} "${soundFile}"` : command;

    exec(fullCommand, (error, stdout, stderr) => {
      if (error) {
        // Silent fail - don't interrupt workflow
        if (process.env.DEBUG) {
          console.error(`Sound playback failed: ${error.message}`);
        }
        return;
      }
      if (stderr && process.env.DEBUG) {
        console.error(`Sound playback warning: ${stderr}`);
      }
    });
  } catch (error) {
    // Silent fail for unsupported platforms
    if (process.env.DEBUG) {
      console.error(`Sound setup error: ${error.message}`);
    }
  }
}

try {
  playSound();
} catch (error) {
  // Silent fail - don't interrupt workflow
  if (process.env.DEBUG) {
    console.error(`Unexpected error: ${error.message}`);
  }
}
```

### 32. Auto-format on file write

There's nothing more annoying than making a 1 line change and having your formatter change 200 lines instead.

This hook will run the formatter only on the file that was just edited:

```
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write \"$FILE_PATH\""
          }
        ]
      }
    ]
  }
}
```

### 33. Always verify changes

Current generation of LLMs can get lazy, assume things and make superficial mistakes. 

A workaround is to add a hook that will remind you to always verify changes before each prompt is sent:

```
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit|Write|Bash",
        "hooks": [
          {
            "type": "command",
            "command": "node .claude/hooks/pre-tool-use.js"
          }
        ]
      }
    ]
  }
}
```

Where the `pre-tool-use.js` script will ensure the `aw.md` file is added to the context

```
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find the .claude directory by traversing up from current directory
function findClaudeDir() {
  let currentDir = __dirname;

  // Already in .claude/scripts, go up to .claude
  if (currentDir.endsWith('.claude/scripts')) {
    return path.dirname(currentDir);
  }

  // Look for .claude directory
  while (currentDir !== path.dirname(currentDir)) {
    const claudeDir = path.join(currentDir, '.claude');
    if (fs.existsSync(claudeDir)) {
      return claudeDir;
    }
    currentDir = path.dirname(currentDir);
  }

  throw new Error('Could not find .claude directory');
}

try {
  const claudeDir = findClaudeDir();
  const awFilePath = path.join(claudeDir, 'commands', 'aw.md');

  if (fs.existsSync(awFilePath)) {
    const content = fs.readFileSync(awFilePath, 'utf8');
    console.log(content);
  } else {
    console.error(`Warning: ${awFilePath} not found`);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
```

Here's the `aw.md` (Always Works) file:

```
---
description: Ensure what you implement Always Works™ with comprehensive testing
---

# How to ensure Always Works™ implementation

Please ensure your implementation Always Works™ for: $ARGUMENTS.

Follow this systematic approach:

## Core Philosophy

- "Should work" ≠ "does work" - Pattern matching isn't enough
- I'm not paid to write code, I'm paid to solve problems
- Untested code is just a guess, not a solution

# The 30-Second Reality Check - Must answer YES to ALL:

- Did I run/build the code?
- Did I trigger the exact feature I changed?
- Did I see the expected result with my own observation (including GUI)?
- Did I check for error messages?
- Would I bet $100 this works?

# Phrases to Avoid:

- "This should work now"
- "I've fixed the issue" (especially 2nd+ time)
- "Try it now" (without trying it myself)
- "The logic is correct so..."

# Specific Test Requirements:

- UI Changes: Actually click the button/link/form
- API Changes: Make the actual API call
- Data Changes: Query the database
- Logic Changes: Run the specific scenario
- Config Changes: Restart and verify it loads

# The Embarrassment Test:

"If the user records trying this and it fails, will I feel embarrassed to see his face?"

# Time Reality:

- Time saved skipping tests: 30 seconds
- Time wasted when it doesn't work: 30 minutes
- User trust lost: Immeasurable

A user describing a bug for the third time isn't thinking "this AI is trying hard" - they're thinking "why am I wasting time with this incompetent tool?"
```

### 34. (Bonus) Webhook notifications

Hooks don't necessarily need to be scripts. 

You can use them to trigger webhooks, which is useful for long-running tasks.

For example, you can use them to get Discord/Slack notifications for long-running tasks:

```
{
  "hooks": {
    "Stop": [
      {
        "matcher": "",
        "hooks": [
          {
            "type": "command",
            "command": "curl -X POST https://discord.com/api/webhooks/YOUR_WEBHOOK -H 'Content-Type: application/json' -d '{\"content\":\"Task completed!\"}'"
          }
        ]
      }
    ]
  }
}
```

Wrapping it up
--------------

These 33 tips transform Claude Code from a good AI assistant into an excellent one. Start with the basics, gradually add automation, and soon you'll be shipping code faster than you can say "Claude Code".

Happy coding! 🚀

* * *

Common Pitfalls to Avoid
------------------------

### Don't start from scratch

Always use a bootstrapped codebase. Claude Code struggles with initial setup.

### Don't ignore context limits

Use `/clear` regularly to maintain performance.

### Don't skip reviews

Always review Claude's changes, especially for security-sensitive code.

### Don't forget to commit

Unlike Cursor, Claude Code doesn't have automatic checkpoints. Commit frequently or use the rule above to do so automatically.

* * *

Want more Claude Code tips? Check out how to build entire apps with your [Claude Code TaskMaster AI tutorial](https://pageai.pro/blog/claude-code-taskmaster-ai-tutorial)!
