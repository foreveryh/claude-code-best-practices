# Automated Documentation with Claude Code: Building Self-Updating Docs Using Docusaurus Agent

**Author:** Daniel Avila  
**Date:** September 2025  
**Source:** https://medium.com/@dan.avila7/automated-documentation-with-claude-code-building-self-updating-docs-using-docusaurus-agent-2c85d3ec0e19  
**Reading Time:** 8 minutes

## Introduction

In this article, I'll show you how to build an automated documentation system using Claude Code and Docusaurus. You'll learn to set up a documentation agent that analyzes code changes and updates project documentation automatically.

We'll cover Docusaurus setup, agent installation, automated workflows, and CI/CD integration that keeps docs synchronized with your codebase.

## Initial Setup

First, create your Docusaurus site in your project:

```bash
npx create-docusaurus@latest my-docs classic
```

Follow the CLI steps to install Docusaurus… Always TypeScript! Just kidding, choose whatever you want.

Run npm start and then open localhost... Voila, you now have your documentation site ready and prepared for customization and writing your project information.

You can check the Docusaurus documentation at this link: https://docusaurus.io/

> In my case, I added the documentation to a subdomain docs.aitmpl.com, but you can also leave it on a route like /docs. Whatever you prefer.

## Now Docusaurus-Expert Agent, Do Your Job!

Start by adding the agent with this command:

```bash
npx claude-code-templates@latest --agent=documentation/docusaurus-expert --yes
```

You can see more details about the agent at this link: https://www.aitmpl.com/component/agent/docusaurus-expert

Ask Claude Code to use this agent to clean up all the default Docusaurus files in that directory and create a plan to add your project's documentation.

After adding new features, simply prompt:

```
"use docusuarus-expert agent to clean up all default Docusaurus files in @docs/ and generate a plan for adding my project documentation"
```

The agent analyzes your Git staged changes, identifies what needs documentation updates, and modifies the appropriate Markdown files automatically.

## CI/CD Integration

This workflow integrates seamlessly with automated deployment. Here's how to set up continuous documentation updates:

1. Install Claude GitHub App (Quick Method):

```bash
# In your Claude Code terminal
/install-github-app
```

Authenticate with your GitHub account and then install the Claude app. You can authorize all your repositories or only the ones where you want to run your pipelines with Claude Code.

Once the app is installed and authorized on GitHub, return to the console to complete the installation.

Claude Code will ask if you want to install it for PR reviews or to tag it on GitHub with @claude. Select what you want for these features.

### Create a Specific Documentation Workflow:

This pipeline reviews changes on specific branches and when it detects modifications, it will use the Docusaurus-Expert Agent. Claude Code uses this agent's context to review changes and sends a PR with the documentation it determines should be added to Docusaurus. The pipeline is generic, so customize it with your specifications for better results.

## Step-by-Step Pipeline Breakdown

### Step 1: Trigger Configuration

The workflow triggers on pull requests to catch documentation needs before merging to main.

> Critical: You must exclude your Docusaurus documentation folder to prevent infinite loops where Claude Code continuously creates new PRs updating documentation.

```yaml
on:
  pull_request:
    branches:
      - main  # CUSTOMIZE: Change to your default branch
    paths:
      # CUSTOMIZE: Add file types that should trigger documentation updates
      - '**.js'
      - '**.ts'
      - '**.jsx'
      - '**.tsx'
      - '**.py'
      - '**.java'
      # CUSTOMIZE: Add more file extensions as needed
      
      # CUSTOMIZE: Exclude paths that shouldn't trigger documentation
      - '!.github/**'
      - '!**/node_modules/**'
      - '!**/dist/**'
      - '!**/build/**'
      - '!docs/**'  # CRITICAL: Replace 'docs' with your Docusaurus folder path
                    # This prevents infinite loops - without this exclusion,
                    # Claude Code will create endless PRs updating documentation
                    # Common paths: !docu/**, !documentation/**, !website/docs/**
```

### Step 2: Runner Setup

Set up the runner with proper permissions and install the documentation agent.

```yaml
jobs:
  auto-document:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      id-token: write  # Required for claude-code-action
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0  # Full history needed for proper diff
      
      - name: Setup Claude configuration
        run: |
          mkdir -p .claude/agents
          # Install agent if not exists
          if [ ! -f ".claude/agents/docusaurus-expert.md" ]; then
            npx claude-code-templates@latest \
              --agent documentation/docusaurus-expert \
              --yes \
              --directory .
          fi
```

### Step 3: Change Detection

Identify files changed in the pull request for context.

```yaml
- name: Get changed files
  id: changed
  run: |
    # Fetch the base branch
    git fetch origin ${{ github.event.pull_request.base.ref }}:${{ github.event.pull_request.base.ref }}
    
    # Get changed files and save to output
    CHANGED_FILES=$(git diff --name-only ${{ github.event.pull_request.base.ref }}...HEAD | tr '\n' ' ')
    echo "files=$CHANGED_FILES" >> $GITHUB_OUTPUT
```

### Step 4: Documentation Update

Execute the agent with project-specific context and requirements.

```yaml
- name: Update documentation
  uses: anthropics/claude-code-action@v1
  with:
    anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
    prompt: |
      Read and follow the instructions in .claude/agents/docusaurus-expert.md
      
      Changed files in this pull request:
      ${{ steps.changed.outputs.files }}
      
      ## Requirements
      1. Find the Docusaurus documentation (check: docs/, docu/, documentation/, website/docs/)
      2. Update documentation for any changed functionality
      3. Add new documentation for new features
      4. Update API references if function signatures changed
      5. Ensure all code examples match the current implementation
      
      ## Project-specific rules
      # CUSTOMIZE: Update these rules for your project
      - Documentation language: English
      - Code examples should include TypeScript types where applicable
      - Follow existing documentation structure and style
      - Update getting-started.md for new features
      - Create feature-specific documentation files when appropriate
      
      ## Current App Context
      # CUSTOMIZE: Replace with your project's context
      This is a React Todo App with features like:
      - Todo creation, editing, deletion with character limits
      - Priority system (high/medium/low with color indicators)  
      - Share functionality to X/Twitter (individual and bulk)
      - Responsive design for mobile/tablet/desktop
      - Dark/light theme toggle
      - Creation date display for todos
      - Task completion tracking and statistics
      - Todo count badge in app title
      
      Focus on documenting the changes found in the modified files above.
    # CUSTOMIZE: Adjust max turns and other settings as needed
    claude_args: "--max-turns 15 --dangerously-skip-permissions"
```

### Step 5: Pull Request Creation

Create a separate pull request with documentation updates.

```yaml
- name: Create Pull Request
  uses: peter-evans/create-pull-request@v6
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    commit-message: "docs: update via docusaurus-expert agent"
    title: "📚 Documentation Update"  # CUSTOMIZE: Change title format
    body: |
      Automated documentation update based on pull request changes.
      **Changed files:**
      ```
      ${{ steps.changed.outputs.files }}
      ```
    branch: docs/auto-${{ github.sha }}
    base: main  # CUSTOMIZE: Match your default branch
    # CUSTOMIZE: Add your team or specific reviewers
    # team-reviewers: documentation-team
```

### Complete Pipeline Configuration

I'm sharing my complete pipeline — you should customize it to fit your needs.

```yaml
# .github/workflows/docusaurus-auto-docs.yml
name: Docusaurus Documentation Automation

on:
  pull_request:
    branches:
      - main
    paths:
      # CUSTOMIZE: Add paths that should trigger documentation updates
      - '**.js'
      - '**.ts'
      - '**.jsx'
      - '**.tsx'
      - '**.py'
      - '**.java'
      # CUSTOMIZE: Exclude paths
      - '!.github/**'
      - '!**/node_modules/**'
      - '!**/dist/**'
      - '!**/build/**'
      - '!docs/**'

jobs:
  auto-document:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      # Ensure .claude directory exists
      - name: Setup Claude configuration
        run: |
          mkdir -p .claude/agents
          # Install agent if not exists
          if [ ! -f ".claude/agents/docusaurus-expert.md" ]; then
            npx claude-code-templates@latest \
              --agent documentation/docusaurus-expert \
              --yes \
              --directory .
          fi

      # Get changed files for context
      - name: Get changed files
        id: changed
        run: |
          # Fetch the base branch
          git fetch origin ${{ github.event.pull_request.base.ref }}:${{ github.event.pull_request.base.ref }}
          
          # Get changed files and save to output
          CHANGED_FILES=$(git diff --name-only ${{ github.event.pull_request.base.ref }}...HEAD | tr '\n' ' ')
          echo "files=$CHANGED_FILES" >> $GITHUB_OUTPUT
          
          # Debug: Show what files changed
          echo "Changed files: $CHANGED_FILES"

      # Only run if there are actually changed files to document
      - name: Update documentation
        if: steps.changed.outputs.files != ''
        uses: anthropics/claude-code-action@v1
        with:
          anthropic_api_key: ${{ secrets.ANTHROPIC_API_KEY }}
          prompt: |
            Read and follow the instructions in .claude/agents/docusaurus-expert.md
            
            Changed files in this pull request:
            ${{ steps.changed.outputs.files }}
            
            ## Requirements
            1. Find the Docusaurus documentation (check: docs/, docu/, documentation/, website/docs/)
            2. Update documentation for any changed functionality
            3. Add new documentation for new features
            4. Update API references if function signatures changed
            5. Ensure all code examples match the current implementation
            
            ## Project-specific rules
            # CUSTOMIZE: Update these rules for your project
            - Documentation language: English
            - Code examples should include TypeScript types where applicable
            - Follow existing documentation structure and style
            - Update getting-started.md for new features
            - Create feature-specific documentation files when appropriate
            
            ## Current App Context
            # CUSTOMIZE: Replace with your project's context
            This is a React Todo App with features like:
            - Todo creation, editing, deletion with character limits
            - Priority system (high/medium/low with color indicators)  
            - Share functionality to X/Twitter (individual and bulk)
            - Responsive design for mobile/tablet/desktop
            - Dark/light theme toggle
            - Creation date display for todos
            - Task completion tracking and statistics
            - Todo count badge in app title
            
            Focus on documenting the changes found in the modified files above.
          claude_args: "--max-turns 15 --dangerously-skip-permissions"

      # Create pull request with documentation updates
      - name: Create Pull Request
        uses: peter-evans/create-pull-request@v6
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          commit-message: "docs: update via docusaurus-expert agent"
          title: "📚 Documentation Update"
          body: |
            Automated documentation update based on pull request changes.
            
            **Changed files:**
            ```
            ${{ steps.changed.outputs.files }}
            ```
            
            This PR was automatically generated by the Docusaurus Expert Agent
            based on the code changes in the original pull request.
          branch: docs/auto-${{ github.sha }}
          base: main
          # CUSTOMIZE: Add team reviewers if needed
          # team-reviewers: |
          #   documentation-team
```

## Key Benefits

1. **Automated Documentation**: Never forget to update docs when code changes
2. **Consistent Quality**: Agent follows project-specific documentation standards
3. **CI/CD Integration**: Seamlessly integrates with existing development workflows
4. **Context-Aware**: Analyzes actual code changes to generate relevant documentation
5. **Customizable**: Fully customizable prompts and rules for your specific project needs

## Best Practices

1. **Exclude Documentation Folders**: Always exclude your docs folder from triggering workflows to prevent infinite loops
2. **Customize File Extensions**: Only monitor file types that actually need documentation
3. **Project-Specific Context**: Provide detailed project context to the agent for better results
4. **Review Process**: Set up proper reviewers for auto-generated documentation PRs
5. **Testing**: Test the workflow thoroughly before deploying to production

## Conclusion

This automated documentation system transforms how teams maintain project documentation. By leveraging Claude Code's agent system with Docusaurus, you can ensure your documentation stays current and comprehensive without manual intervention.

The key is proper configuration and customization for your specific project needs. Start with the basic setup and gradually refine the prompts and rules to match your documentation standards.

Remember: Good documentation is not just about having it - it's about keeping it accurate and up-to-date. This automation system helps ensure both.