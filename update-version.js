import readline from 'readline';
import { readFileSync, writeFileSync } from 'fs';
import { promisify } from 'util';
import semver from 'semver';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionAsync = promisify(rl.question).bind(rl);

(async () => {
  // Leer el contenido del package.json
  const packageJson = JSON.parse(readFileSync('package.json', 'utf-8'));

  const answer = await questionAsync(`Ingrese la nueva versión (actual ${packageJson.version}): `);

  if (semver.valid(answer)) {
    const newVersion = semver.clean(answer);
    packageJson.version = newVersion; // Actualizar la versión en el objeto packageJson
    writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf-8'); // Escribir el archivo actualizado
    console.log(`La versión se ha actualizado a ${newVersion}`);
  } else {
    console.log('Versión inválida. Por favor, ingrese una versión válida (por ejemplo, 1.2.3)');
    process.exit(1);
  }

  rl.close();
})();
