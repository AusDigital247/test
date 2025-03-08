const fs = require('fs');
const path = require('path');

// Get the latest backup folder
const backupsDir = path.join(__dirname, '../.backups');
const latestBackup = fs.readdirSync(backupsDir)
  .sort()
  .reverse()[0];

if (!latestBackup) {
  console.error('No backups found');
  process.exit(1);
}

// Restore files from backup
const backupPath = path.join(backupsDir, latestBackup);
const srcPath = path.join(__dirname, '../src');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyDir(backupPath, srcPath);
  console.log('Successfully reverted SEO changes');
} catch (error) {
  console.error('Error reverting changes:', error);
  process.exit(1);
}