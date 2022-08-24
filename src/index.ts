import express from 'express';

const app = express();
const port = 3000;
const responseMessage = `Do you have an item to split? If yes, key in the name of the item. Else, key in No.`

app.use(express.json());


app.post('/names', (_, res) => {
  const data = { message: responseMessage, next: "/item" };
  res.status(200).json(data);
});

app.listen(port, () => console.log(`Running on port ${port}`));
