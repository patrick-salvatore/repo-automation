const { execSync, exec } = require('child_process');
const os = require('os');
const path = require('path');

function removeGit() {
  execSync('rm -rf .git', function asd(error) {
    if (error) {
      console.error({
        success: false,
        error,
      });
    }
  });
}

function cloneRepo(repo) {
  const cmd = 'git clone' + repo;
  execSync(cmd, function asd(error) {
    if (error) {
      console.error({
        success: false,
        error,
      });
    }
  });
}

function createDirectory(destinationPath, folderName = '') {
  const cmd = `mkdir ${destinationPath}/${folderName}`;
  execSync(cmd);
}

async function processRequest({ repoUrl, cwd, destinationPath, folderName }) {
  if (cwd) {
    // if (files.fileExists('.git')) {
    //   console.log(chalk.red('Oops! You are in an directory with an existing .git file'));
    //   const { isAlreadyGit } = await inputs.errors.exisitingGitRepo();

    //   if (String(isAlreadyGit)) {
    //     isAlreadyGit.toLowerCase() === 'yes' ? utils.removeGit() : process.exit();
    //   }
    // }
    const gitCmd = `git clone ${repoUrl}`;
    execSync(gitCmd, { stdio: 'inherit' });
  } else {
    destinationPath = destinationPath
      ? path.join(os.homedir(), 'Desktop', destinationPath)
      : path.join(os.homedir(), 'Desktop');
    createDirectory(destinationPath, folderName);
    const gitCmd = `git clone ${repoUrl} ${destinationPath}/${folderName}`;
    execSync(gitCmd, { stdio: 'inherit' });
    process.chdir(`${destinationPath}/${folderName}`);
  }
}

export { removeGit, cloneRepo, processRequest };
