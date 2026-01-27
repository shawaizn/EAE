import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseActivityFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const activities = {};

  // Split by lesson sections
  const lessonSections = content.split(/##\s+Module\s+(\d+)\s+Lesson\s+(\d+):/);

  for (let i = 1; i < lessonSections.length; i += 3) {
    const moduleId = lessonSections[i];
    const lessonId = lessonSections[i + 1];
    const lessonContent = lessonSections[i + 2];

    const key = `${moduleId}-${lessonId}`;

    // Extract sections
    const skillMatch = lessonContent.match(/\*\*Skills You're Building:\*\*\s*\*\*(.*?)\*\*/s);
    const connectionMatch = lessonContent.match(/\*\*Connection:\*\*\s*(.*?)(?=\n\*\*Activity:|\n---)/s);
    const activityMatch = lessonContent.match(/\*\*Activity:\*\*\s*(.*?)(?=\n---|\n\*\*Why this matters:)/s);
    const whyMattersMatch = lessonContent.match(/\*\*Why this matters:\*\*\s*(.*?)(?=\n---|\n📚)/s);
    const learnersMatch = lessonContent.match(/📚\s+\*\*For Learners:\*\*\s*(.*?)(?=\n---|\n💼)/s);
    const employeesMatch = lessonContent.match(/💼\s+\*\*For Employees:\*\*\s*(.*?)(?=\n---|\n🚀)/s);
    const selfEmployedMatch = lessonContent.match(/🚀\s+\*\*For Self-Employed:\*\*\s*(.*?)(?=\n---|\n🏢)/s);
    const businessesMatch = lessonContent.match(/🏢\s+\*\*For Businesses:\*\*\s*(.*?)(?=\n---|\n##|$)/s);

    activities[key] = {
      skill: skillMatch ? skillMatch[1].trim() : '',
      connection: connectionMatch ? connectionMatch[1].trim() : '',
      activity: activityMatch ? activityMatch[1].trim() : '',
      whyMatters: whyMattersMatch ? whyMattersMatch[1].trim() : '',
      learners: learnersMatch ? learnersMatch[1].trim() : '',
      employees: employeesMatch ? employeesMatch[1].trim() : '',
      selfEmployed: selfEmployedMatch ? selfEmployedMatch[1].trim() : '',
      businesses: businessesMatch ? businessesMatch[1].trim() : ''
    };
  }

  return activities;
}

// Parse all module files
const allActivities = {};

for (let i = 1; i <= 7; i++) {
  const filePath = path.join(__dirname, '..', `module_${i}_activities_elevated.md`);
  if (fs.existsSync(filePath)) {
    const moduleActivities = parseActivityFile(filePath);
    Object.assign(allActivities, moduleActivities);
  }
}

// Output as JavaScript
const output = `export const activityData = ${JSON.stringify(allActivities, null, 2)};`;

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data', 'activityData.js'),
  output
);

console.log('Activity data parsed successfully!');
console.log(`Total lessons: ${Object.keys(allActivities).length}`);
