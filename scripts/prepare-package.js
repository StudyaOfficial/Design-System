const fs = require('fs');
const path = require('path');

// Read the distribution package.json template
const packageJson = require('../package.dist.json');

// Update version from main package.json (optional)
const mainPackageJson = require('../package.json');
packageJson.version = mainPackageJson.version;

// Write to the dist folder
fs.writeFileSync(
  path.join(__dirname, '../dist/package.json'),
  JSON.stringify(packageJson, null, 2)
);

console.log('✅ package.json copied to dist folder'); 