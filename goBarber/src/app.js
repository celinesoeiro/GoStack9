/**
 * CRIAÇÃO DA APLICAÇÃO
 */
import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  // Método Middlewares
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  // Método Routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
