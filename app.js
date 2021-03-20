const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;

const fs = require('fs').promises;
const userRouter = require('./routes/users');

app.use('/', userRouter);

function getFileContent(path) {
  return fs.readFile(path, { enconding: 'utf-8' })
    .then(JSON.parse)
    .catch((err) => {
      console.log(err);
    });
};

app.get('/cards', (req, res) => {
  res.send(cards);
});

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}, k byeBYE!`);
});



 //user.find()
  //someArray.find((arrayItem) => arrayItem.someProp === propValueWeWantToFind)
  //This will return the first item in the array for which that callback returns true.
//curl -v GET 'http://localhost:3000/users/' | python -m json.tool