Title: GitHub - automazeio/ccpm: Project management system for Claude Code using GitHub Issues and Git worktrees for parallel agent execution.

URL Source: https://github.com/automazeio/ccpm

Markdown Content:
Claude Code PM
--------------

[](https://github.com/automazeio/ccpm#claude-code-pm)
[![Image 1: Automaze](https://camo.githubusercontent.com/3f097ca7378f5f21e6e21647214117600197aa77a60d5babf71263241b134e34/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f42792d6175746f6d617a652e696f2d346233626166)](https://automaze.io/)[![Image 2: Claude Code](https://camo.githubusercontent.com/2b73c441a6a9549938b49af8f7886485d786a63b480d7102c26728668b102e89/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2b2d436c61756465253230436f64652d643937373537)](https://github.com/automazeio/ccpm/blob/main/README.md)[![Image 3: GitHub Issues](https://camo.githubusercontent.com/cc59c205e25c1ed298dd1dac9c3606c74c6fb3668b7671225838e9373860fa32/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2b2d4769744875622532304973737565732d316632333238)](https://github.com/automazeio/ccpm)[![Image 4: MIT License](https://camo.githubusercontent.com/403da04ef74d3da342bd833f5162bfbe3c414520e9bb6768f7ddc448aff30952/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d323861373435)](https://github.com/automazeio/ccpm/blob/main/LICENSE)[![Image 5: Follow on 𝕏](https://camo.githubusercontent.com/c911d48be3fbcf5efc9f80ab728f67291a2c8222986bba24f1a66031395647a8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2546302539442539352538462d4061726f757373692d316339626630)](http://x.com/intent/follow?screen_name=aroussi)[![Image 6: Star this repo](https://camo.githubusercontent.com/5b7c81fae61295e50e36089ff6597f478f13e7620196f72902eee311831cfabf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2545322539382538352d53746172253230746869732532307265706f2d653762313062)](https://github.com/automazeio/ccpm)

### Claude Code workflow to ship ~~faster~~_better_ using spec-driven development, GitHub issues, Git worktrees, and mutiple AI agents running in parallel.

[](https://github.com/automazeio/ccpm#claude-code-workflow-to-ship-faster-better-using-spec-driven-development-github-issues-git-worktrees-and-mutiple-ai-agents-running-in-parallel)
Stop losing context. Stop blocking on tasks. Stop shipping bugs. This battle-tested system turns PRDs into epics, epics into GitHub issues, and issues into production code – with full traceability at every step.

[![Image 7: Claude Code PM](https://github.com/automazeio/ccpm/raw/main/screenshot.webp)](https://github.com/automazeio/ccpm/blob/main/screenshot.webp)

Table of Contents
-----------------

[](https://github.com/automazeio/ccpm#table-of-contents)
*   [Background](https://github.com/automazeio/ccpm#background)
*   [The Workflow](https://github.com/automazeio/ccpm#the-workflow)
*   [What Makes This Different?](https://github.com/automazeio/ccpm#what-makes-this-different)
*   [Why GitHub Issues?](https://github.com/automazeio/ccpm#why-github-issues)
*   [Core Principle: No Vibe Coding](https://github.com/automazeio/ccpm#core-principle-no-vibe-coding)
*   [System Architecture](https://github.com/automazeio/ccpm#system-architecture)
*   [Workflow Phases](https://github.com/automazeio/ccpm#workflow-phases)
*   [Command Reference](https://github.com/automazeio/ccpm#command-reference)
*   [The Parallel Execution System](https://github.com/automazeio/ccpm#the-parallel-execution-system)
*   [Key Features & Benefits](https://github.com/automazeio/ccpm#key-features--benefits)
*   [Proven Results](https://github.com/automazeio/ccpm#proven-results)
*   [Example Flow](https://github.com/automazeio/ccpm#example-flow)
*   [Get Started Now](https://github.com/automazeio/ccpm#get-started-now)
*   [Local vs Remote](https://github.com/automazeio/ccpm#local-vs-remote)
*   [Technical Notes](https://github.com/automazeio/ccpm#technical-notes)
*   [Support This Project](https://github.com/automazeio/ccpm#support-this-project)

Background
----------

[](https://github.com/automazeio/ccpm#background)
Every team struggles with the same problems:

*   **Context evaporates** between sessions, forcing constant re-discovery
*   **Parallel work creates conflicts** when multiple developers touch the same code
*   **Requirements drift** as verbal decisions override written specs
*   **Progress becomes invisible** until the very end

This system solves all of that.

The Workflow
------------

[](https://github.com/automazeio/ccpm#the-workflow)Loading

graph LR
    A[PRD Creation] --> B[Epic Planning]
    B --> C[Task Decomposition]
    C --> D[GitHub Sync]
    D --> E[Parallel Execution]

### See It In Action (60 seconds)

[](https://github.com/automazeio/ccpm#see-it-in-action-60-seconds)

# Create a comprehensive PRD through guided brainstorming
/pm:prd-new memory-system

# Transform PRD into a technical epic with task breakdown
/pm:prd-parse memory-system

# Push to GitHub and start parallel execution
/pm:epic-oneshot memory-system
/pm:issue-start 1235

What Makes This Different?
--------------------------

[](https://github.com/automazeio/ccpm#what-makes-this-different)
| Traditional Development | Claude Code PM System |
| --- | --- |
| Context lost between sessions | **Persistent context** across all work |
| Serial task execution | **Parallel agents** on independent tasks |
| "Vibe coding" from memory | **Spec-driven** with full traceability |
| Progress hidden in branches | **Transparent audit trail** in GitHub |
| Manual task coordination | **Intelligent prioritization** with `/pm:next` |

Why GitHub Issues?
------------------

[](https://github.com/automazeio/ccpm#why-github-issues)
Most Claude Code workflows operate in isolation – a single developer working with AI in their local environment. This creates a fundamental problem: **AI-assisted development becomes a silo**.

By using GitHub Issues as our database, we unlock something powerful:

### 🤝 **True Team Collaboration**

[](https://github.com/automazeio/ccpm#-true-team-collaboration)
*   Multiple Claude instances can work on the same project simultaneously
*   Human developers see AI progress in real-time through issue comments
*   Team members can jump in anywhere – the context is always visible
*   Managers get transparency without interrupting flow

### 🔄 **Seamless Human-AI Handoffs**

[](https://github.com/automazeio/ccpm#-seamless-human-ai-handoffs)
*   AI can start a task, human can finish it (or vice versa)
*   Progress updates are visible to everyone, not trapped in chat logs
*   Code reviews happen naturally through PR comments
*   No "what did the AI do?" meetings

### 📈 **Scalable Beyond Solo Work**

[](https://github.com/automazeio/ccpm#-scalable-beyond-solo-work)
*   Add team members without onboarding friction
*   Multiple AI agents working in parallel on different issues
*   Distributed teams stay synchronized automatically
*   Works with existing GitHub workflows and tools

### 🎯 **Single Source of Truth**

[](https://github.com/automazeio/ccpm#-single-source-of-truth)
*   No separate databases or project management tools
*   Issue state is the project state
*   Comments are the audit trail
*   Labels provide organization

This isn't just a project management system – it's a **collaboration protocol** that lets humans and AI agents work together at scale, using infrastructure your team already trusts.

Core Principle: No Vibe Coding
------------------------------

[](https://github.com/automazeio/ccpm#core-principle-no-vibe-coding)
> **Every line of code must trace back to a specification.**

We follow a strict 5-phase discipline:

1.   **🧠 Brainstorm** - Think deeper than comfortable
2.   **📝 Document** - Write specs that leave nothing to interpretation
3.   **📐 Plan** - Architect with explicit technical decisions
4.   **⚡ Execute** - Build exactly what was specified
5.   **📊 Track** - Maintain transparent progress at every step

No shortcuts. No assumptions. No regrets.

System Architecture
-------------------

[](https://github.com/automazeio/ccpm#system-architecture)

```
.claude/
├── CLAUDE.md          # Always-on instructions (copy content to your project's CLAUDE.md file)
├── agents/            # Task-oriented agents (for context preservation)
├── commands/          # Command definitions
│   ├── context/       # Create, update, and prime context
│   ├── pm/            # ← Project management commands (this system)
│   └── testing/       # Prime and execute tests (edit this)
├── context/           # Project-wide context files
├── epics/             # ← PM's local workspace (place in .gitignore)
│   └── [epic-name]/   # Epic and related tasks
│       ├── epic.md    # Implementation plan
│       ├── [#].md     # Individual task files
│       └── updates/   # Work-in-progress updates
├── prds/              # ← PM's PRD files
├── rules/             # Place any rule files you'd like to reference here
└── scripts/           # Place any script files you'd like to use here
```

Workflow Phases
---------------

[](https://github.com/automazeio/ccpm#workflow-phases)
### 1. Product Planning Phase

[](https://github.com/automazeio/ccpm#1-product-planning-phase)

/pm:prd-new feature-name

Launches comprehensive brainstorming to create a Product Requirements Document capturing vision, user stories, success criteria, and constraints.

**Output:**`.claude/prds/feature-name.md`

### 2. Implementation Planning Phase

[](https://github.com/automazeio/ccpm#2-implementation-planning-phase)

/pm:prd-parse feature-name

Transforms PRD into a technical implementation plan with architectural decisions, technical approach, and dependency mapping.

**Output:**`.claude/epics/feature-name/epic.md`

### 3. Task Decomposition Phase

[](https://github.com/automazeio/ccpm#3-task-decomposition-phase)

/pm:epic-decompose feature-name

Breaks epic into concrete, actionable tasks with acceptance criteria, effort estimates, and parallelization flags.

**Output:**`.claude/epics/feature-name/[task].md`

### 4. GitHub Synchronization

[](https://github.com/automazeio/ccpm#4-github-synchronization)

/pm:epic-sync feature-name
# Or for confident workflows:
/pm:epic-oneshot feature-name

Pushes epic and tasks to GitHub as issues with appropriate labels and relationships.

### 5. Execution Phase

[](https://github.com/automazeio/ccpm#5-execution-phase)

/pm:issue-start 1234  # Launch specialized agent
/pm:issue-sync 1234   # Push progress updates
/pm:next             # Get next priority task

Specialized agents implement tasks while maintaining progress updates and an audit trail.

Command Reference
-----------------

[](https://github.com/automazeio/ccpm#command-reference)

Tip

Type `/pm:help` for a concise command summary

### Initial Setup

[](https://github.com/automazeio/ccpm#initial-setup)
*   `/pm:init` - Install dependencies and configure GitHub

### PRD Commands

[](https://github.com/automazeio/ccpm#prd-commands)
*   `/pm:prd-new` - Launch brainstorming for new product requirement
*   `/pm:prd-parse` - Convert PRD to implementation epic
*   `/pm:prd-list` - List all PRDs
*   `/pm:prd-edit` - Edit existing PRD
*   `/pm:prd-status` - Show PRD implementation status

### Epic Commands

[](https://github.com/automazeio/ccpm#epic-commands)
*   `/pm:epic-decompose` - Break epic into task files
*   `/pm:epic-sync` - Push epic and tasks to GitHub
*   `/pm:epic-oneshot` - Decompose and sync in one command
*   `/pm:epic-list` - List all epics
*   `/pm:epic-show` - Display epic and its tasks
*   `/pm:epic-close` - Mark epic as complete
*   `/pm:epic-edit` - Edit epic details
*   `/pm:epic-refresh` - Update epic progress from tasks

### Issue Commands

[](https://github.com/automazeio/ccpm#issue-commands)
*   `/pm:issue-show` - Display issue and sub-issues
*   `/pm:issue-status` - Check issue status
*   `/pm:issue-start` - Begin work with specialized agent
*   `/pm:issue-sync` - Push updates to GitHub
*   `/pm:issue-close` - Mark issue as complete
*   `/pm:issue-reopen` - Reopen closed issue
*   `/pm:issue-edit` - Edit issue details

### Workflow Commands

[](https://github.com/automazeio/ccpm#workflow-commands)
*   `/pm:next` - Show next priority issue with epic context
*   `/pm:status` - Overall project dashboard
*   `/pm:standup` - Daily standup report
*   `/pm:blocked` - Show blocked tasks
*   `/pm:in-progress` - List work in progress

### Sync Commands

[](https://github.com/automazeio/ccpm#sync-commands)
*   `/pm:sync` - Full bidirectional sync with GitHub
*   `/pm:import` - Import existing GitHub issues

### Maintenance Commands

[](https://github.com/automazeio/ccpm#maintenance-commands)
*   `/pm:validate` - Check system integrity
*   `/pm:clean` - Archive completed work
*   `/pm:search` - Search across all content

The Parallel Execution System
-----------------------------

[](https://github.com/automazeio/ccpm#the-parallel-execution-system)
### Issues Aren't Atomic

[](https://github.com/automazeio/ccpm#issues-arent-atomic)
Traditional thinking: One issue = One developer = One task

**Reality: One issue = Multiple parallel work streams**

A single "Implement user authentication" issue isn't one task. It's...

*   **Agent 1**: Database tables and migrations
*   **Agent 2**: Service layer and business logic
*   **Agent 3**: API endpoints and middleware
*   **Agent 4**: UI components and forms
*   **Agent 5**: Test suites and documentation

All running **simultaneously** in the same worktree.

### The Math of Velocity

[](https://github.com/automazeio/ccpm#the-math-of-velocity)
**Traditional Approach:**

*   Epic with 3 issues
*   Sequential execution

**This System:**

*   Same epic with 3 issues
*   Each issue splits into ~4 parallel streams
*   **12 agents working simultaneously**

We're not assigning agents to issues. We're **leveraging multiple agents** to ship faster.

### Context Optimization

[](https://github.com/automazeio/ccpm#context-optimization)
**Traditional single-thread approach:**

*   Main conversation carries ALL the implementation details
*   Context window fills with database schemas, API code, UI components
*   Eventually hits context limits and loses coherence

**Parallel agent approach:**

*   Main thread stays clean and strategic
*   Each agent handles its own context in isolation
*   Implementation details never pollute the main conversation
*   Main thread maintains oversight without drowning in code

Your main conversation becomes the conductor, not the orchestra.

### GitHub vs Local: Perfect Separation

[](https://github.com/automazeio/ccpm#github-vs-local-perfect-separation)
**What GitHub Sees:**

*   Clean, simple issues
*   Progress updates
*   Completion status

**What Actually Happens Locally:**

*   Issue #1234 explodes into 5 parallel agents
*   Agents coordinate through Git commits
*   Complex orchestration hidden from view

GitHub doesn't need to know HOW the work got done – just that it IS done.

### The Command Flow

[](https://github.com/automazeio/ccpm#the-command-flow)

# Analyze what can be parallelized
/pm:issue-analyze 1234

# Launch the swarm
/pm:epic-start memory-system

# Watch the magic
# 12 agents working across 3 issues
# All in: ../epic-memory-system/

# One clean merge when done
/pm:epic-merge memory-system

Key Features & Benefits
-----------------------

[](https://github.com/automazeio/ccpm#key-features--benefits)
### 🧠 **Context Preservation**

[](https://github.com/automazeio/ccpm#-context-preservation)
Never lose project state again. Each epic maintains its own context, agents read from `.claude/context/`, and updates locally before syncing.

### ⚡ **Parallel Execution**

[](https://github.com/automazeio/ccpm#-parallel-execution)
Ship faster with multiple agents working simultaneously. Tasks marked `parallel: true` enable conflict-free concurrent development.

### 🔗 **GitHub Native**

[](https://github.com/automazeio/ccpm#-github-native)
Works with tools your team already uses. Issues are the source of truth, comments provide history, and there is no dependency on the Projects API.

### 🤖 **Agent Specialization**

[](https://github.com/automazeio/ccpm#-agent-specialization)
Right tool for every job. Different agents for UI, API, and database work. Each reads requirements and posts updates automatically.

### 📊 **Full Traceability**

[](https://github.com/automazeio/ccpm#-full-traceability)
Every decision is documented. PRD → Epic → Task → Issue → Code → Commit. Complete audit trail from idea to production.

### 🚀 **Developer Productivity**

[](https://github.com/automazeio/ccpm#-developer-productivity)
Focus on building, not managing. Intelligent prioritization, automatic context loading, and incremental sync when ready.

Proven Results
--------------

[](https://github.com/automazeio/ccpm#proven-results)
Teams using this system report:

*   **89% less time** lost to context switching – you'll use `/compact` and `/clear` a LOT less
*   **5-8 parallel tasks** vs 1 previously – editing/testing multiple files at the same time
*   **75% reduction** in bug rates – due to the breaking down features into detailed tasks
*   **Up to 3x faster** feature delivery – based on feature size and complexity

Example Flow
------------

[](https://github.com/automazeio/ccpm#example-flow)

# Start a new feature
/pm:prd-new memory-system

# Review and refine the PRD...

# Create implementation plan
/pm:prd-parse memory-system

# Review the epic...

# Break into tasks and push to GitHub
/pm:epic-oneshot memory-system
# Creates issues: #1234 (epic), #1235, #1236 (tasks)

# Start development on a task
/pm:issue-start 1235
# Agent begins work, maintains local progress

# Sync progress to GitHub
/pm:issue-sync 1235
# Updates posted as issue comments

# Check overall status
/pm:epic-show memory-system

Get Started Now
---------------

[](https://github.com/automazeio/ccpm#get-started-now)
### Quick Setup (2 minutes)

[](https://github.com/automazeio/ccpm#quick-setup-2-minutes)
1.   **Clone this repository into your project**:

cd path/to/your/project/
git clone https://github.com/automazeio/ccpm.git . 
> ⚠️**IMPORTANT**: If you already have a `.claude` directory, clone this repository to a different directory and copy the contents of the cloned `.claude` directory to your project's `.claude` directory.

2.   **Initialize the PM system**:

/pm:init 
This command will:

    *   Install GitHub CLI (if needed)
    *   Authenticate with GitHub
    *   Install [gh-sub-issue extension](https://github.com/yahsan2/gh-sub-issue) for proper parent-child relationships
    *   Create required directories
    *   Update .gitignore

3.   **Create `CLAUDE.md`** with your repository information

/init include rules from .claude/CLAUDE.md 
> If you already have a `CLAUDE.md` file, run: `/re-init` to update it with important rules from `.claude/CLAUDE.md`.

4.   **Prime the system**:

/context:create 

### Start Your First Feature

[](https://github.com/automazeio/ccpm#start-your-first-feature)

/pm:prd-new your-feature-name

Watch as structured planning transforms into shipped code.

Local vs Remote
---------------

[](https://github.com/automazeio/ccpm#local-vs-remote)
| Operation | Local | GitHub |
| --- | --- | --- |
| PRD Creation | ✅ | — |
| Implementation Planning | ✅ | — |
| Task Breakdown | ✅ | ✅ (sync) |
| Execution | ✅ | — |
| Status Updates | ✅ | ✅ (sync) |
| Final Deliverables | — | ✅ |

Technical Notes
---------------

[](https://github.com/automazeio/ccpm#technical-notes)
### GitHub Integration

[](https://github.com/automazeio/ccpm#github-integration)
*   Uses **gh-sub-issue extension** for proper parent-child relationships
*   Falls back to task lists if extension not installed
*   Epic issues track sub-task completion automatically
*   Labels provide additional organization (`epic:feature`, `task:feature`)

### File Naming Convention

[](https://github.com/automazeio/ccpm#file-naming-convention)
*   Tasks start as `001.md`, `002.md` during decomposition
*   After GitHub sync, renamed to `{issue-id}.md` (e.g., `1234.md`)
*   Makes it easy to navigate: issue #1234 = file `1234.md`

### Design Decisions

[](https://github.com/automazeio/ccpm#design-decisions)
*   Intentionally avoids GitHub Projects API complexity
*   All commands operate on local files first for speed
*   Synchronization with GitHub is explicit and controlled
*   Worktrees provide clean git isolation for parallel work
*   GitHub Projects can be added separately for visualization

* * *

Support This Project
--------------------

[](https://github.com/automazeio/ccpm#support-this-project)
Claude Code PM was developed at [Automaze](https://automaze.io/)**for developers who ship, by developers who ship**.

If Claude Code PM helps your team ship better software:

*   ⭐ **[Star this repository](https://github.com/your-username/claude-code-pm)** to show your support
*   🐦 **[Follow @aroussi on X](https://x.com/aroussi)** for updates and tips

* * *
