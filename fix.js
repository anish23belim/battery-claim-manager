const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  if (file === 'src\\lib\\prisma.ts' || file === 'src/lib/prisma.ts') return;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Try replacing multiline
  let changed = false;
  
  if (content.includes('import { PrismaClient } from "@prisma/client";')) {
    content = content.replace(/import { PrismaClient } from "@prisma\/client";\s*const prisma = new PrismaClient\(\);/g, 'import prisma from "@/lib/prisma";');
    content = content.replace(/import { PrismaClient } from "@prisma\/client";\s*\n\s*const prisma = new PrismaClient\(\);/g, 'import prisma from "@/lib/prisma";');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
