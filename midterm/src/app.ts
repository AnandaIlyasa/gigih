import express, { Router } from 'express';
import mongoose, { model } from 'mongoose';
import RootRoute from './routes/rootRoute';

require('dotenv').config();

const main = async (): Promise<void> => {
  const app = express()
  app.use(express.json({ type: '*/*' }))

  try {
    if(process.env.DB_CONNECTION_URI === undefined) {
      throw new Error("database URI is undefined");
    }
    await mongoose.connect(process.env.DB_CONNECTION_URI);
    console.log("connected to the database")
  } catch (error) {
    console.log('Error connecting to one datastore: ', error)
  }

  const rootRoute = new RootRoute(app, Router());
  rootRoute.registerRoutes();

  const port = process.env.APP_PORT
  if (port === undefined) {
    throw new Error('Port is undefined.')
  }

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
}

main()
  .then(() => {
    console.log('App started.')
  })
  .catch((error) => {
    console.log('Error starting app: ', error)
  })
