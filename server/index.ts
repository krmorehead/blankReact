import express from 'express';
import path from 'path';
import {Routes} from "./enums";

export class Server {
  app: any;
  constructor() {
    this.app = express();

    const port = process.env.port || 8080;

    this.initializeRoutes();

    this.app.listen(port, () => {
      console.log( `server started at http://localhost:${ port }` );
    });
  }
  initializeRoutes() {
    this.app.use(express.static(path.join(__dirname, '../dist')));

    this.app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist', 'index.html'));
    });

    this.app.get(`/${Routes.healthcheck}`, (req, res) => {
      res.send({message: 'all is well with the world'});
    })
  }
}

new Server();
