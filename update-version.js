import readline from 'readline';
import { readFileSync, writeFileSync } from 'fs';
import semver from 'semver';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Leer el contenido del package.json
const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

rl.question(`Ingrese la nueva versión (actual ${packageJson.version}): `, (answer) => {
  if (semver.valid(answer)) {
    const newVersion = semver.clean(answer);
    packageJson.version = newVersion; // Actualizar la versión en el objeto packageJson
    writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8'); // Escribir el archivo actualizado
    console.log(`La versión se ha actualizado a ${newVersion}`);
    rl.close();
  } else {
    console.log('Versión inválida. Por favor, ingrese una versión válida (por ejemplo, 1.2.3)');
    rl.close();
    process.exit(1);
  }
});
