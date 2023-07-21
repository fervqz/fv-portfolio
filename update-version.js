import readline from 'readline';
import semver from 'semver';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la nueva versión (por ejemplo, 1.2.3): ', (answer) => {
  if (semver.valid(answer)) {
    const newVersion = semver.clean(answer);
    process.env.npm_package_version = newVersion;
    console.log(`La versión se ha actualizado a ${newVersion}`);
    rl.close();
  } else {
    console.log('Versión inválida. Por favor, ingrese una versión válida (por ejemplo, 1.2.3)');
    rl.close();
    process.exit(1);
  }
});
