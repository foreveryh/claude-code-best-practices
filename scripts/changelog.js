#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const CHANGELOG_PATH = path.join(process.cwd(), 'CHANGELOG.md');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

function validateDate(dateString) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(dateString)) {
    return false;
  }
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date) && date.toISOString().startsWith(dateString);
}

function checkFileExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath.replace(/^\//, ''));
  return fs.existsSync(fullPath);
}

function ensureDirectoryExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath.replace(/^\//, ''));
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

function formatChangelogEntry(data) {
  const { title, category, sourceUrl, author, type, enPath, zhPath, sourcePath, imagesPath, description } = data;
  const date = getCurrentDate();
  
  return `
## [${date}] - ${title}

### Added
- **[${category}]** New ${type.toLowerCase()}: "${title}"
  - Source: ${sourceUrl}
  - Author: ${author}
  - Languages: EN/ZH
  - Type: ${type}
  - Description: ${description}
  - Files:
    - EN: \`${enPath}\`
    - ZH: \`${zhPath}\`
    - Source: \`${sourcePath}\`${imagesPath ? `\n    - Images: \`${imagesPath}\`` : ''}

`;
}

async function addChangelogEntry(dryRun = false) {
  console.log(`\n📝 ${dryRun ? 'DRY RUN - ' : ''}Adding new content publication to changelog...\n`);
  
  try {
    const title = await prompt('📚 Article title: ');
    const description = await prompt('📝 Brief description: ');
    const category = await prompt('🏷️  Category (best-practices/community-tips/cursor/sub-agents/tools/advanced): ');
    const type = await prompt('📄 Type (Article/Tutorial/Guide/Review/Analysis): ');
    const sourceUrl = await prompt('🔗 Original source URL: ');
    const author = await prompt('👤 Original author: ');
    
    // Validate category
    const validCategories = ['best-practices', 'community-tips', 'cursor', 'sub-agents', 'tools', 'advanced'];
    if (!validCategories.includes(category)) {
      console.warn(`⚠️  Warning: '${category}' is not a standard category. Valid categories are: ${validCategories.join(', ')}`);
      const proceed = await prompt('Do you want to continue anyway? (y/n): ');
      if (proceed.toLowerCase() !== 'y' && proceed.toLowerCase() !== 'yes') {
        console.log('Operation cancelled.');
        return;
      }
    }
    
    // Generate file paths based on title
    const slug = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    
    const enPath = `/content/docs/en/${category}/${slug}.mdx`;
    const zhPath = `/content/docs/zh/${category}/${slug}.mdx`;
    const sourcePath = `/content/sources/${slug}_${getCurrentDate().replace(/-/g, '')}.md`;
    
    // Check for existing files
    const existingFiles = [];
    if (checkFileExists(enPath)) existingFiles.push(`EN: ${enPath}`);
    if (checkFileExists(zhPath)) existingFiles.push(`ZH: ${zhPath}`);
    if (checkFileExists(sourcePath)) existingFiles.push(`Source: ${sourcePath}`);
    
    if (existingFiles.length > 0) {
      console.warn(`\n⚠️  Warning: The following files already exist:`);
      existingFiles.forEach(file => console.warn(`   ${file}`));
      const overwrite = await prompt('Do you want to continue anyway? (y/n): ');
      if (overwrite.toLowerCase() !== 'y' && overwrite.toLowerCase() !== 'yes') {
        console.log('Operation cancelled.');
        return;
      }
    }
    
    const hasImages = await prompt('🖼️  Does this article have images? (y/n): ');
    let imagesPath = '';
    if (hasImages.toLowerCase() === 'y' || hasImages.toLowerCase() === 'yes') {
      imagesPath = `/public/images/${slug}/`;
    }
    
    const entryData = {
      title,
      description,
      category,
      type,
      sourceUrl,
      author,
      enPath,
      zhPath,
      sourcePath,
      imagesPath
    };
    
    const newEntry = formatChangelogEntry(entryData);
    
    if (dryRun) {
      console.log('\n🔍 DRY RUN - This is what would be added to the changelog:');
      console.log('=' .repeat(80));
      console.log(newEntry);
      console.log('=' .repeat(80));
      console.log('\n📁 File paths that would be suggested:');
      console.log(`   EN: ${enPath}`);
      console.log(`   ZH: ${zhPath}`);
      console.log(`   Source: ${sourcePath}`);
      if (imagesPath) {
        console.log(`   Images: ${imagesPath}`);
      }
      console.log('\n📝 To actually add this entry, run: npm run changelog add');
      return;
    }
    
    // Read current changelog
    const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
    
    // Find the position to insert (after "## Publication History" but before first existing entry)
    const historyIndex = changelog.indexOf('## Publication History');
    if (historyIndex === -1) {
      console.error('❌ Could not find "## Publication History" section in changelog');
      process.exit(1);
    }
    
    // Find the next section or existing entry
    const nextSectionIndex = changelog.indexOf('\n## [', historyIndex + 1);
    const insertIndex = nextSectionIndex === -1 ? changelog.length : nextSectionIndex;
    
    // Insert the new entry
    const updatedChangelog = 
      changelog.slice(0, insertIndex) + 
      newEntry + 
      changelog.slice(insertIndex);
    
    // Write back to file
    fs.writeFileSync(CHANGELOG_PATH, updatedChangelog);
    
    // Ensure directories exist
    ensureDirectoryExists(enPath);
    ensureDirectoryExists(zhPath);
    ensureDirectoryExists(sourcePath);
    if (imagesPath) {
      ensureDirectoryExists(path.join(imagesPath, 'placeholder.txt'));
    }
    
    console.log('\n✅ Changelog updated successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Create the content files at the specified paths');
    console.log('2. Run: npm run recent-posts add <article-path> <language>');
    console.log('3. Run: npm run update-indexes');
    console.log('4. Or run: npm run publish-complete <en-path> <zh-path> to automate steps 2-3');
    console.log('\n📁 File paths:');
    console.log(`   EN: ${enPath}`);
    console.log(`   ZH: ${zhPath}`);
    console.log(`   Source: ${sourcePath}`);
    if (imagesPath) {
      console.log(`   Images: ${imagesPath}`);
    }
    
  } catch (error) {
    console.error('❌ Error updating changelog:', error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

async function showStats() {
  try {
    const changelog = fs.readFileSync(CHANGELOG_PATH, 'utf-8');
    
    // Count entries
    const entries = (changelog.match(/## \[\d{4}-\d{2}-\d{2}\]/g) || []).length;
    
    // Count by category
    const categories = {};
    const categoryMatches = changelog.match(/\*\*\[([^\]]+)\]\*\*/g) || [];
    categoryMatches.forEach(match => {
      const category = match.replace(/\*\*\[([^\]]+)\]\*\*/, '$1');
      categories[category] = (categories[category] || 0) + 1;
    });
    
    console.log('\n📊 Changelog Statistics:');
    console.log(`   Total Publications: ${entries}`);
    console.log('\n📂 By Category:');
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count}`);
    });
    
    // Get latest entry
    const latestMatch = changelog.match(/## \[(\d{4}-\d{2}-\d{2})\] - (.+)/);
    if (latestMatch) {
      console.log(`\n📅 Latest Publication: ${latestMatch[1]} - ${latestMatch[2]}`);
    }
    
  } catch (error) {
    console.error('❌ Error reading changelog:', error.message);
  }
}

function showHelp() {
  console.log(`
📚 Changelog Manager for deeptoai

Usage:
  node scripts/changelog.js [command] [options]

Commands:
  add         Add a new content publication entry
  add --dry   Preview what would be added without making changes
  stats       Show changelog statistics
  help        Show this help message

Examples:
  node scripts/changelog.js add
  node scripts/changelog.js add --dry
  node scripts/changelog.js stats

Features:
  ✓ File existence validation
  ✓ Category validation
  ✓ Automatic directory creation
  ✓ Dry-run mode for previewing changes
`);
}

async function main() {
  const command = process.argv[2];
  const flag = process.argv[3];
  
  switch (command) {
    case 'add':
      const isDryRun = flag === '--dry' || flag === '-d';
      await addChangelogEntry(isDryRun);
      break;
    case 'stats':
      await showStats();
      break;
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
    default:
      console.log('❓ Use "node scripts/changelog.js help" for usage information');
      await showStats(); // Show stats by default
  }
}

main().catch(console.error);