// tree.js
import fs from 'fs';
import path from 'path';

function tree(dir, prefix = '') {
  const items = fs.readdirSync(dir).filter(f => !f.startsWith('.') && f !== 'node_modules');
  items.forEach((item, i) => {
    const isLast = i === items.length - 1;
    const fullPath = path.join(dir, item);
    const isDir = fs.statSync(fullPath).isDirectory();
    console.log(`${prefix}${isLast ? '└── ' : '├── '}${item}`);
    if (isDir) tree(fullPath, prefix + (isLast ? '    ' : '│   '));
  });
}

console.log('.');
tree('.');