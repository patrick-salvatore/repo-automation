const fs = require('fs');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  fileExists: (filePath) => {
    try {
      return fs.statSync(filePath).isFile();
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
