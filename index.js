#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const files = require('./lib/files');
const inputs = require('./lib/inputs');
const utils = require('./lib/utils');

(async function init() {
  clear();
  console.log(chalk.yellow(figlet.textSync('Repo Automation')));

  try {
    // if (files.fileExists('.git')) {
    //   console.log(chalk.red('Oops! You are in an directory with an existing .git file'));
    //   const { isAlreadyGit } = await inputs.errors.exisitingGitRepo();

    //   if (String(isAlreadyGit)) {
    //     isAlreadyGit.toLowerCase() === 'yes' ? utils.removeGit() : process.exit();
    //   }
    // }

    console.log(chalk.green('Ready to start!'));
    const repoInputs = await inputs.repo();

    if (repoInputs.cwd) {
      await utils.processRequest({ ...repoInputs, destinationPath: process.cwd() });
      process.exit();
    } else {
      const projectPathInputs = await inputs.projectPath();
      await utils.processRequest({ ...repoInputs, ...projectPathInputs });
    }
  } catch (err) {
    console.log(chalk.red(err));
    process.exit();
  }
})();
