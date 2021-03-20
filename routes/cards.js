const fs = require('fs').promises;

function getFileContent(path) {
  return fs.readFile(path, { enconding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => {
      console.log(err);
    });
};

app.get('/users', (req, res) => {
  const pathUserData = path.join(__dirname, 'data', 'users.json');
  getFileContent(pathUserData)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    })
});