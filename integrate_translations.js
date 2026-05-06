// Script to integrate translations into projectsData.ts
const fs = require('fs');

const template = fs.readFileSync('PROJECT_TRANSLATIONS_TEMPLATE.txt', 'utf8');
const currentData = fs.readFileSync('projectsData.ts', 'utf8');

// Parse translations from template
function extract(text, field) {
  const regex = new RegExp(field + ':\\s*\\n\\s*en:\\s*"(.*?)"\\s*\\n\\s*ar:\\s*"(.*?)"\\s*\\n\\s*ku:\\s*"(.*?)"', 's');
  const m = text.match(regex);
  if (!m) return null;
  if (!m[2] && !m[3]) return null; // skip if no translations
  return { en: m[1], ar: m[2], ku: m[3] };
}

function extractFeatures(text) {
  const featMatch = text.match(/features:\s*\n([\s\S]*?)(?=\ntechStack:)/);
  if (!featMatch) return [];
  const featText = featMatch[1];
  const features = [];
  const fr = /\d+:\s*\n\s*title:\s*\n\s*en:\s*"(.*?)"\s*\n\s*ar:\s*"(.*?)"\s*\n\s*ku:\s*"(.*?)"\s*\n\s*description:\s*\n\s*en:\s*"(.*?)"\s*\n\s*ar:\s*"(.*?)"\s*\n\s*ku:\s*"(.*?)"/g;
  let m;
  while ((m = fr.exec(featText)) !== null) {
    features.push({
      title: { en: m[1], ar: m[2], ku: m[3] },
      description: { en: m[4], ar: m[5], ku: m[6] }
    });
  }
  return features;
}

function extractTechStack(text) {
  const tsMatch = text.match(/techStack:\s*\n([\s\S]*?)(?=\n(?:technicalAchievements:|\n─|$))/);
  if (!tsMatch) return [];
  const tsText = tsMatch[1];
  const stacks = [];
  const sr = /\d+:\s*\n\s*category:\s*\n\s*en:\s*"(.*?)"\s*\n\s*ar:\s*"(.*?)"\s*\n\s*ku:\s*"(.*?)"/g;
  let m;
  while ((m = sr.exec(tsText)) !== null) {
    stacks.push({ en: m[1], ar: m[2], ku: m[3] });
  }
  return stacks;
}

// Split template by project headers
const projectBlocks = template.split(/────+\nPROJECT \d+:.*\n────+/).slice(1);

const i18nData = [];
for (let i = 0; i < projectBlocks.length; i++) {
  const p = projectBlocks[i];
  i18nData.push({
    id: i,
    title: extract(p, 'title'),
    category: extract(p, 'category'),
    role: extract(p, 'role'),
    platform: extract(p, 'platform'),
    overview: extract(p, 'overview'),
    technicalAchievements: extract(p, 'technicalAchievements'),
    features: extractFeatures(p),
    techStack: extractTechStack(p),
  });
}

console.log(`Parsed ${i18nData.length} projects`);
for (const d of i18nData) {
  console.log(`  Project ${d.id}: title=${d.title?.ar ? 'OK' : 'MISSING'}, features=${d.features.length}, techStack=${d.techStack.length}`);
}

// Now generate i18n blocks and insert them into projectsData.ts
function toTSString(obj) {
  return `{ en: ${JSON.stringify(obj.en)}, ar: ${JSON.stringify(obj.ar)}, ku: ${JSON.stringify(obj.ku)} }`;
}

let output = currentData;

for (let i = i18nData.length - 1; i >= 0; i--) {
  const d = i18nData[i];
  
  // Build i18n block
  let block = `\n    i18n: {\n`;
  if (d.title) block += `      title: ${toTSString(d.title)},\n`;
  if (d.category) block += `      category: ${toTSString(d.category)},\n`;
  if (d.role) block += `      role: ${toTSString(d.role)},\n`;
  if (d.platform) block += `      platform: ${toTSString(d.platform)},\n`;
  if (d.overview) block += `      overview: ${toTSString(d.overview)},\n`;
  
  if (d.features.length > 0) {
    block += `      features: [\n`;
    for (const f of d.features) {
      block += `        { title: ${toTSString(f.title)}, description: ${toTSString(f.description)} },\n`;
    }
    block += `      ],\n`;
  }
  
  if (d.techStack.length > 0) {
    block += `      techStack: [\n`;
    // We need to get the original technologies arrays from the current data
    // Find the project in the source
    const techMatch = output.match(new RegExp(`id: ${i},[\\s\\S]*?techStack: \\[([\\s\\S]*?)\\]`, 'm'));
    const origTechs = [];
    if (techMatch) {
      const techStr = techMatch[1];
      const techRegex = /technologies: \[(.*?)\]/g;
      let tm;
      while ((tm = techRegex.exec(techStr)) !== null) {
        origTechs.push(tm[1]);
      }
    }
    
    for (let j = 0; j < d.techStack.length; j++) {
      const techs = origTechs[j] || '""';
      block += `        { category: ${toTSString(d.techStack[j])}, technologies: [${techs}] },\n`;
    }
    block += `      ],\n`;
  }
  
  if (d.technicalAchievements) block += `      technicalAchievements: ${toTSString(d.technicalAchievements)},\n`;
  
  block += `    },`;
  
  // Find the closing `},` for this project and insert before it
  // We search for the pattern `id: X,` and then find the next `  },` at project level
  const idPattern = new RegExp(`(\\n  \\{\\n    id: ${i},)`);
  const idMatch = output.match(idPattern);
  if (idMatch) {
    const startPos = output.indexOf(idMatch[1]);
    // Find the closing `  },` for this project block
    let depth = 0;
    let closePos = -1;
    for (let pos = startPos; pos < output.length; pos++) {
      if (output[pos] === '{') depth++;
      if (output[pos] === '}') {
        depth--;
        if (depth === 0) {
          closePos = pos;
          break;
        }
      }
    }
    if (closePos > 0) {
      // Insert i18n block before the closing }
      output = output.slice(0, closePos) + block + '\n  ' + output.slice(closePos);
    }
  }
}

fs.writeFileSync('projectsData.ts', output, 'utf8');
console.log('\\nDone! projectsData.ts updated with all i18n blocks.');
