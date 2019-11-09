/**
 * CRIAÇÃO DO ROTEAMENTO
 */

import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// Middleware global de autenticação. Só vale para as rotas abaixo dele
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
