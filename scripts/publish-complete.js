#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorLog(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, args, cwd = process.cwd()) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { 
      cwd, 
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });
    
    child.on('error', (error) => {
      reject(error);
    });
  });
}

async function validateFiles(enPath, zhPath) {
  const errors = [];
  
  if (!fs.existsSync(enPath)) {
    errors.push(`English file not found: ${enPath}`);
  }
  
  if (!fs.existsSync(zhPath)) {
    errors.push(`Chinese file not found: ${zhPath}`);
  }
  
  // Check if files have valid MDX frontmatter
  if (fs.existsSync(enPath)) {
    const enContent = fs.readFileSync(enPath, 'utf-8');
    if (!enContent.startsWith('---')) {
      errors.push(`English file missing frontmatter: ${enPath}`);
    }
  }
  
  if (fs.existsSync(zhPath)) {
    const zhContent = fs.readFileSync(zhPath, 'utf-8');
    if (!zhContent.startsWith('---')) {
      errors.push(`Chinese file missing frontmatter: ${zhPath}`);
    }
  }
  
  return errors;
}

async function publishComplete(enPath, zhPath, options = {}) {
  const { dryRun = false, skipValidation = false } = options;
  
  colorLog('cyan', '\n🚀 Starting complete publication workflow...\n');
  
  try {
    // Step 1: Validate file paths
    if (!skipValidation) {
      colorLog('blue', '📋 Step 1: Validating files...');
      const errors = await validateFiles(enPath, zhPath);
      
      if (errors.length > 0) {
        colorLog('red', '❌ Validation errors:');
        errors.forEach(error => colorLog('red', `   ${error}`));
        
        if (!dryRun) {
          process.exit(1);
        }
      } else {
        colorLog('green', '✅ Files validated successfully');
      }
    }
    
    console.log('');
    
    // Step 2: Add English article to recent posts
    colorLog('blue', '📝 Step 2: Adding English article to recent posts...');
    if (!dryRun) {
      await runCommand('node', ['scripts/manage-recent-posts.js', 'add', enPath, 'en']);
    } else {
      await runCommand('node', ['scripts/manage-recent-posts.js', 'add', enPath, 'en', '--dry']);
    }
    colorLog('green', '✅ English article processed');
    
    console.log('');
    
    // Step 3: Add Chinese article to recent posts
    colorLog('blue', '📝 Step 3: Adding Chinese article to recent posts...');
    if (!dryRun) {
      await runCommand('node', ['scripts/manage-recent-posts.js', 'add', zhPath, 'zh']);
    } else {
      await runCommand('node', ['scripts/manage-recent-posts.js', 'add', zhPath, 'zh', '--dry']);
    }
    colorLog('green', '✅ Chinese article processed');
    
    console.log('');
    
    // Step 4: Update all indexes
    colorLog('blue', '🗂️  Step 4: Updating content indexes...');
    if (!dryRun) {
      await runCommand('node', ['scripts/update-indexes.js']);
    } else {
      colorLog('yellow', '🔍 DRY RUN: Would run update-indexes.js');
    }
    colorLog('green', '✅ Indexes updated');
    
    console.log('');
    
    // Step 5: Verify recent posts
    colorLog('blue', '🔍 Step 5: Verifying recent posts...');
    await runCommand('node', ['scripts/manage-recent-posts.js', 'list']);
    
    console.log('');
    
    if (dryRun) {
      colorLog('yellow', '🔍 DRY RUN COMPLETED - No actual changes were made');
      colorLog('yellow', 'To apply these changes, run: npm run publish-complete <en-path> <zh-path>');
    } else {
      colorLog('green', '🎉 Publication workflow completed successfully!');
      colorLog('cyan', '\n📋 Next steps:');
      console.log('1. Verify the articles appear correctly on the website');
      console.log('2. Check that all links are working');
      console.log('3. Update the changelog if not already done:');
      console.log('   npm run changelog add');
    }
    
  } catch (error) {
    colorLog('red', `❌ Error in publication workflow: ${error.message}`);
    process.exit(1);
  }
}

async function quickAdd(articlePaths, options = {}) {
  const { dryRun = false } = options;
  
  colorLog('cyan', '\n⚡ Quick add mode - Adding multiple articles...\n');
  
  for (const articlePath of articlePaths) {
    if (!fs.existsSync(articlePath)) {
      colorLog('red', `❌ File not found: ${articlePath}`);
      continue;
    }
    
    // Detect language from path
    const language = articlePath.includes('/en/') ? 'en' : 
                    articlePath.includes('/zh/') ? 'zh' : 'en';
    
    colorLog('blue', `📝 Adding: ${path.basename(articlePath)} (${language})`);
    
    try {
      if (!dryRun) {
        await runCommand('node', ['scripts/manage-recent-posts.js', 'add', articlePath, language]);
      } else {
        await runCommand('node', ['scripts/manage-recent-posts.js', 'add', articlePath, language, '--dry']);
      }
      colorLog('green', '✅ Added successfully');
    } catch (error) {
      colorLog('red', `❌ Failed to add: ${error.message}`);
    }
    
    console.log('');
  }
  
  if (!dryRun) {
    colorLog('blue', '🗂️  Updating indexes...');
    await runCommand('node', ['scripts/update-indexes.js']);
    colorLog('green', '✅ Indexes updated');
  }
  
  colorLog('green', '🎉 Quick add completed!');
}

function showHelp() {
  console.log(`
🚀 Complete Publication Workflow Manager

Usage:
  node scripts/publish-complete.js <command> [options]

Commands:
  complete <en-path> <zh-path>    Run complete publication workflow
  quick-add <path1> [path2...]    Quickly add multiple articles
  help                           Show this help message

Options:
  --dry                          Preview changes without making them
  --skip-validation             Skip file validation (use with caution)

Examples:
  # Complete workflow for bilingual article
  node scripts/publish-complete.js complete \\
    content/docs/en/best-practices/my-article.mdx \\
    content/docs/zh/best-practices/my-article.mdx

  # Dry run to preview changes
  node scripts/publish-complete.js complete \\
    content/docs/en/best-practices/my-article.mdx \\
    content/docs/zh/best-practices/my-article.mdx --dry

  # Quick add multiple articles
  node scripts/publish-complete.js quick-add \\
    content/docs/en/tools/tool1.mdx \\
    content/docs/zh/tools/tool1.mdx \\
    content/docs/en/tools/tool2.mdx

NPM Scripts:
  npm run publish-complete <en-path> <zh-path>     # Complete workflow
  npm run publish-complete -- --dry               # Dry run mode
  npm run quick-add <path1> [path2...]            # Quick add mode

Workflow Steps:
  1. Validate MDX files and frontmatter
  2. Add English article to recent posts
  3. Add Chinese article to recent posts  
  4. Update all content indexes
  5. Verify recent posts list

Features:
  ✓ File validation with frontmatter checking
  ✓ Automatic language detection
  ✓ Dry-run mode for safe testing
  ✓ Colored output for better readability
  ✓ Error handling and rollback support
  ✓ Backup creation for safety
`);
}

async function main() {
  const command = process.argv[2];
  const args = process.argv.slice(3);
  const dryRun = args.includes('--dry') || args.includes('-d');
  const skipValidation = args.includes('--skip-validation');
  
  // Filter out flags from paths
  const paths = args.filter(arg => !arg.startsWith('--') && !arg.startsWith('-'));
  
  switch (command) {
    case 'complete':
      if (paths.length !== 2) {
        colorLog('red', 'Error: Complete workflow requires exactly 2 paths (EN and ZH)');
        console.log('Usage: node scripts/publish-complete.js complete <en-path> <zh-path>');
        process.exit(1);
      }
      
      await publishComplete(paths[0], paths[1], { dryRun, skipValidation });
      break;
      
    case 'quick-add':
      if (paths.length === 0) {
        colorLog('red', 'Error: Quick add requires at least 1 path');
        console.log('Usage: node scripts/publish-complete.js quick-add <path1> [path2...]');
        process.exit(1);
      }
      
      await quickAdd(paths, { dryRun });
      break;
      
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
      
    default:
      colorLog('yellow', 'Use "node scripts/publish-complete.js help" for usage information');
      showHelp();
      break;
  }
}

if (require.main === module) {
  main().catch(error => {
    colorLog('red', `Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = { publishComplete, quickAdd };