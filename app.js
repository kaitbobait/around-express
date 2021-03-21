const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

app.use('/', userRouter);
app.use('/', cardRouter);

app.listen(PORT, () => {
  // if everything works fine, the console will show which port the application is listening to
  console.log(`App listening at port ${PORT}, k byeBYE!`);
});
