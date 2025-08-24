# 🚨 CRITICAL REQUIREMENTS CHECKLIST

> **USE THIS EVERY TIME** before starting content production

## ⚠️ MANDATORY BEFORE STARTING

### 🖼️ IMAGE PROCESSING REQUIREMENTS
- [ ] **SCAN ENTIRE SOURCE** for all images/visuals
- [ ] **IDENTIFY EVERY IMAGE** including charts, diagrams, GIFs, screenshots
- [ ] **CREATE IMAGE DIRECTORY**: `public/images/[article-slug]/`
- [ ] **DOWNLOAD ALL IMAGES** to local directory
- [ ] **UPDATE ALL IMAGE PATHS** from external URLs to local paths
- [ ] **VERIFY IMAGE ACCESS** - test every image displays correctly

### 📝 TRANSLATION QUALITY REQUIREMENTS  
- [ ] **FAITHFUL TRANSLATION** - Translate 100% of content (NEVER create summaries)
- [ ] **STORYTELLING STYLE** - Engaging tone for general AI readers (not academic)
- [ ] **TECHNICAL ACCURACY** - All facts, data, statistics match exactly
- [ ] **NATURAL CHINESE FLOW** - Use natural sentence structure
- [ ] **STANDARD TERMINOLOGY** - Use industry terms + English original on first use
- [ ] **FORMAT PRESERVATION** - Keep ALL Markdown formatting

## 🔄 VALIDATION STEPS

### Before Publication:
```bash
# 1. Test with dry run
npm run publish-dry <en-path> <zh-path>

# 2. Start dev server and visually verify
npm run dev
# Check: Images display, content reads naturally, formatting intact
```

### Common Failure Points:
❌ **Missing images** - Source had visuals you didn't download  
❌ **Summary instead of translation** - Restructured instead of faithfully translating  
❌ **Poor Chinese flow** - Literal word-for-word translation  
❌ **Missing technical terms** - Didn't explain terminology properly  
❌ **Broken image paths** - External URLs not replaced with local paths  

## 🎯 SUCCESS CRITERIA

✅ **100% Content Fidelity** - Every section, detail, and fact from original  
✅ **100% Image Localization** - All visuals downloaded and working locally  
✅ **Natural Language Quality** - Reads like native Chinese content  
✅ **Technical Accuracy Preserved** - All data and facts exactly match  
✅ **Complete Format Integrity** - All Markdown formatting maintained  

---

> **Remember**: This checklist exists because these are the most common and critical errors. Use it every time!


# 🚨 CRITICAL REQUIREMENTS CHECKLIST

> **USE THIS EVERY TIME** before starting content production

## ⚠️ MANDATORY BEFORE STARTING

### 🖼️ IMAGE PROCESSING REQUIREMENTS
- [ ] **SCAN ENTIRE SOURCE** for all images/visuals
- [ ] **IDENTIFY EVERY IMAGE** including charts, diagrams, GIFs, screenshots
- [ ] **CREATE IMAGE DIRECTORY**: `public/images/[article-slug]/`
- [ ] **DOWNLOAD ALL IMAGES** to local directory
- [ ] **UPDATE ALL IMAGE PATHS** from external URLs to local paths
- [ ] **VERIFY IMAGE ACCESS** - test every image displays correctly

### 📝 TRANSLATION QUALITY REQUIREMENTS  
- [ ] **FAITHFUL TRANSLATION** - Translate 100% of content (NEVER create summaries)
- [ ] **STORYTELLING STYLE** - Engaging tone for general AI readers (not academic)
- [ ] **TECHNICAL ACCURACY** - All facts, data, statistics match exactly
- [ ] **NATURAL CHINESE FLOW** - Use natural sentence structure
- [ ] **STANDARD TERMINOLOGY** - Use industry terms + English original on first use
- [ ] **FORMAT PRESERVATION** - Keep ALL Markdown formatting

## 🔄 VALIDATION STEPS

### Before Publication:
```bash
# 1. Test with dry run
npm run publish-dry <en-path> <zh-path>

# 2. Start dev server and visually verify
npm run dev
# Check: Images display, content reads naturally, formatting intact
```

### Common Failure Points:
❌ **Missing images** - Source had visuals you didn't download  
❌ **Summary instead of translation** - Restructured instead of faithfully translating  
❌ **Poor Chinese flow** - Literal word-for-word translation  
❌ **Missing technical terms** - Didn't explain terminology properly  
❌ **Broken image paths** - External URLs not replaced with local paths  

## 🎯 SUCCESS CRITERIA

✅ **100% Content Fidelity** - Every section, detail, and fact from original  
✅ **100% Image Localization** - All visuals downloaded and working locally  
✅ **Natural Language Quality** - Reads like native Chinese content  
✅ **Technical Accuracy Preserved** - All data and facts exactly match  
✅ **Complete Format Integrity** - All Markdown formatting maintained  

---

> **Remember**: This checklist exists because these are the most common and critical errors. Use it every time!