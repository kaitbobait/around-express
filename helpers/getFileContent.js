function getFileContent(path) {
  return fs.readFile(path, { enconding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => {
      console.log(err);
    });
};

module.exports = getFileContent;