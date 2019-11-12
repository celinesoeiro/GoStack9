import { Router } from 'express';

import userController from './app/controllers/UserController';
import studentController from './app/controllers/StudentController';
import sessionController from './app/controllers/SessionController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);

routes.put('/users', userController.update);
routes.get('/students', studentController.show);
routes.put('/students', studentController.update);
routes.post('/students', studentController.store);

export default routes;
