import express, { Request, Response } from 'express';
import { router } from './route/routes';
const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});