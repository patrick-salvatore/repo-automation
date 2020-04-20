const inquirer = require('inquirer');

const errors = {
  exisitingGitRepo: () => {
    const questions = [
      {
        name: 'isAlreadyGit',
        type: 'list',
        choices: ['Yes', 'No'],
        message: 'Do you wish to continue?',
      },
    ];
    return inquirer.prompt(questions);
  },
};

const inputs = {
  repo: () => {
    const questions = [
      {
        name: 'repoUrl',
        type: 'input',
        message: 'Type in the github:url you wish to clone from',
        validate(value) {
          if (value.length) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        name: 'cwd',
        type: 'confirm',
        message: 'Pull to the current directory?',
      },
    ];
    return inquirer.prompt(questions);
  },
  options: () => {
    const questions = [
      {
        type: 'list',
        message: 'Please specify where project directory',
        name: 'projectPath',
        choices: ['Current directory', 'Specific directory'],
      },
    ];
    return inquirer.prompt(questions);
  },
  projectPath: () => {
    const questions = [
      {
        name: 'destinationPath',
        type: 'input',
        message: 'Type in the path relative to your desktop to clone to (default destination is your desktop)',
      },
      {
        name: 'folderName',
        type: 'input',
        message: 'Type in the name of the new directory to clone to',
        validate(value) {
          if (value.length) {
            return true;
          } else {
            return false;
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};

module.exports = {
  errors,
  ...inputs,
};
