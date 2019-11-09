/**
 * CRIAÇÃO DA APLICAÇÃO
 */
import express from 'express';
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
  }

  // Método Routes
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
