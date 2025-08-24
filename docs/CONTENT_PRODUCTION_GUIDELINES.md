# Content Production Guidelines

## 📋 **Critical Pre-Production Checklist**

> **⚠️ MANDATORY**: Complete ALL items before starting content creation

### 🔍 **Step 1: Source Analysis (REQUIRED)**
- [ ] **Image Inventory**: Scan source article for ALL images, charts, diagrams, GIFs
- [ ] **Content Type Assessment**: Determine if this should be:
  - [ ] **Faithful Translation** (preserve original structure and all content)
  - [ ] **Adaptation** (modify for target audience)
  - [ ] **Summary** (condensed version)
- [ ] **Translation Requirements**: Confirm specific style and quality requirements

### 🖼️ **Step 2: Image Processing (MANDATORY)**
- [ ] **Download ALL images** from source article
- [ ] **Create image directory**: `public/images/[article-slug]/`
- [ ] **Verify image accessibility**: Test all downloaded images
- [ ] **Update image paths**: Replace all external URLs with local paths

### 📝 **Step 3: Content Creation Standards**

#### **For Faithful Translations:**
- [ ] **Complete Content**: Translate 100% of original content (no omissions)
- [ ] **Preserve Structure**: Maintain all original headings, sections, formatting
- [ ] **Accurate Facts**: All data, statistics, and technical details must match exactly
- [ ] **Natural Flow**: Use target language sentence structure (not word-for-word)

---

## 🌐 **Translation Quality Standards**

### **Chinese Translation Requirements**

#### **Style Guidelines:**
- **Target Audience**: AI-interested general readers (not academic)
- **Writing Style**: Storytelling approach - engaging and accessible
- **Tone**: Conversational, clear, and compelling
- **Avoid**: Academic jargon, overly formal language

#### **Language Quality:**
- **Sentence Structure**: Use natural Chinese word order
- **Sentence Length**: Break long English sentences into shorter, natural Chinese sentences
- **Flow**: Prioritize readability over literal translation

#### **Technical Standards:**
- **Terminology**: Use industry-standard Chinese translations
- **First Usage**: Add English original in parentheses for technical terms
  - Example: `大语言模型 (LLM)`, `检索增强生成 (RAG)`
- **Consistency**: Maintain consistent terminology throughout

#### **Format Preservation:**
- **Markdown**: Preserve ALL formatting (headers, bold, italic, code blocks)
- **Code Blocks**: Keep syntax highlighting and structure
- **Links**: Maintain all original links
- **Images**: Update to local paths, preserve alt text

---

## 🖼️ **Image Handling Standards**

### **Mandatory Image Processing Steps**

1. **Identification Phase**
   ```bash
   # Scan source for images (manual review required)
   grep -o 'https://[^)]*\.\(png\|jpg\|jpeg\|gif\|svg\|webp\)' source-file.md
   ```

2. **Download Phase**
   ```bash
   # Create directory
   mkdir -p public/images/[article-slug]
   
   # Download each image
   curl -o public/images/[article-slug]/image-name.ext https://source-url
   ```

3. **Path Replacement Phase**
   - Replace: `https://example.com/images/chart.png`
   - With: `/images/[article-slug]/chart.png`

4. **Verification Phase**
   - [ ] All images accessible at local paths
   - [ ] No broken image links in content
   - [ ] Images display correctly in development

### **Image Directory Structure**
```
public/images/
├── article-slug/
│   ├── diagram1.png
│   ├── screenshot2.jpg
│   └── animation.gif
└── another-article/
    └── chart.svg
```

---

## ⚠️ **Common Mistakes to Avoid**

### **Translation Errors**
❌ **Creating summaries instead of faithful translations**
✅ **Translate complete content while adapting language naturally**

❌ **Word-for-word literal translation**  
✅ **Natural target language flow with accurate meaning**

❌ **Skipping technical terms explanation**
✅ **Provide Chinese term + English original on first use**

### **Image Errors**
❌ **Leaving external image URLs**
✅ **Download and localize ALL images**

❌ **Missing images from original content**
✅ **Account for every image, chart, and visual element**

❌ **Broken local image paths**
✅ **Test all image links before publication**

### **Content Structure Errors**
❌ **Reorganizing content structure**
✅ **Preserve original organization and flow**

❌ **Omitting sections or details**
✅ **Include all content from original**

---

## 🔄 **Quality Assurance Process**

### **Pre-Publication Review**
1. **Content Completeness Check**
   - [ ] All sections from original present
   - [ ] No content omitted or condensed
   - [ ] All data and facts preserved accurately

2. **Image Completeness Check**
   - [ ] All images from original downloaded
   - [ ] All image paths updated to local
   - [ ] All images display correctly

3. **Translation Quality Check**
   - [ ] Natural Chinese language flow
   - [ ] Appropriate terminology used
   - [ ] Engaging storytelling style maintained
   - [ ] Technical accuracy preserved

4. **Format Integrity Check**
   - [ ] Markdown formatting preserved
   - [ ] Code blocks properly formatted
   - [ ] Links functional
   - [ ] Front matter valid

### **Post-Production Validation**
```bash
# Run our validation tools
npm run publish-dry <en-path> <zh-path>

# Visual inspection
npm run dev
# Navigate to articles and verify:
# - Images display correctly
# - Content reads naturally
# - All formatting intact
```

---

## 📚 **Best Practices**

### **Translation Workflow**
1. **Read entire source** before beginning translation
2. **Identify complex technical sections** that need careful handling
3. **Research proper Chinese terminology** for technical terms
4. **Translate in sections** while maintaining overall flow
5. **Review for natural language flow** after completion

### **Image Workflow**
1. **Inventory all visual elements** before starting
2. **Download images early** in the process
3. **Test image accessibility** immediately after download
4. **Update paths systematically** throughout content

### **Quality Control**
1. **Always use dry-run mode** for initial testing
2. **Review in development environment** before publishing
3. **Get native speaker review** for important translations
4. **Maintain translation memory** for consistency

---

## 🚀 **Enhanced Workflow Integration**

This enhanced guidance integrates with our existing workflow:

```bash
# 1. Content Analysis & Preparation
curl -s "https://r.jina.ai/YOUR_URL" > content/sources/article_$(date +%Y%m%d).md
# → Review source content
# → Identify all images
# → Plan translation approach

# 2. Image Processing
mkdir -p public/images/[article-slug]
# → Download all images
# → Update paths in content

# 3. Content Creation
# → Create faithful translation following guidelines
# → Verify image paths and content completeness

# 4. Quality Assurance
npm run publish-dry <en-path> <zh-path>
# → Review in development
# → Verify all requirements met

# 5. Publication
npm run publish-complete <en-path> <zh-path>
```

---

## 🎯 **Success Metrics**

A successful content production meets these criteria:
- ✅ **100% content fidelity** - No omissions or summarization
- ✅ **100% image localization** - All visuals properly downloaded
- ✅ **Natural language quality** - Reads like native content
- ✅ **Technical accuracy** - All facts and data preserved
- ✅ **Format integrity** - All formatting preserved perfectly