const fs = require('fs')

function summarizeFilesInDirectorySync(directory) {
    return fs.readdirSync(directory).map(files => ({
        directory,
        files
    }));
}

console.log(summarizeFilesInDirectorySync('__tests__'))

module.exports = summarizeFilesInDirectorySync;