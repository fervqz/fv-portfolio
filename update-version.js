import readline from 'readline';
import { readFileSync, writeFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = `
Update version - Select update option (current ${packageJson.version}):\n
- Major (M)
- Minor (m)
- Patch (p)
- Skip (enter)
`;

rl.question(question,
  (answer) => {

    let shouldSkip = false;
    let [major, minor, patch] = packageJson.version.split('.').map((v) => parseInt(v));

    switch (answer) {
      case "M":
        major++;
        console.log(`MAJOR version update`);
        break;

      case "m":
        minor++;
        console.log(`MINOR version update`);
        break;

      case "p":
        patch++;
        console.log(`PATCH version update`);
        break;

      default:
        console.log('Skiping version updating');
        shouldSkip = true;
        break;
    }

    if (!shouldSkip) {
      packageJson.version = `${major}.${minor}.${patch}`;
      writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8');
    }

    rl.close();

  });