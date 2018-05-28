const chalk = require('chalk');
const semver = require('semver');
const packageConfig = require('../package.json');
const shell = require('shelljs');
const execSync = require('child_process').execSync;

function exec(cmd) {
    return execSync(cmd).toString().trim();
}

const versionRequirements = [{
    name: 'node',
    version: semver.clean(process.version),
    required: packageConfig.engines.node
}];

if (shell.which('npm')) {
    versionRequirements.push({
        name: 'npm',
        version: exec('npm --version'),
        required: packageConfig.engines.npm
    });
}

module.exports = function checkVersions() {
    const warnings = [];

    for (let i = 0; i < versionRequirements.length; i++) {
        const mod = versionRequirements[i];
        if (!semver.satisfies(mod.version, mod.required)) {
            warnings.push(`${mod.name}: ${chalk.red(mod.version)} should be ${chalk.green(mod.required)}`);
        }
    }

    if (warnings.length) {
        console.log('');
        console.log(chalk.yellow('To use this template, you must update following to modules:'));
        console.log();

        for (let i = 0; i < warnings.length; i++) {
            console.log(`  ${warnings[i]}`);
        }

        console.log();
        process.exit(1);
    }
};
