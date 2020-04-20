const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  fileExists: (filePath, directory) => {
    try {
      if (directory) {
        filePath = `${directory}/${filePath}`
      }
      return fs.existsSync(filePath);
    } catch (err) {
      return false;
    }
  },
  directoryExists: (directoryPath) => {
    try {
      return fs.statSync(directoryPath).isDirectory();
    } catch (err) {
      throw Error(err);
    }
  },
};
