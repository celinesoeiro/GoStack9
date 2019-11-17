import { Router } from 'express';

import userController from './app/controllers/UserController';
import studentController from './app/controllers/StudentController';
import sessionController from './app/controllers/SessionController';
import planController from './app/controllers/PlanController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

routes.use(authMiddlewares);

// Atualização dos dados do administrador
routes.put('/users', userController.update);
// Cadastro de alunos novos
routes.post('/students', studentController.store);
// Atualização de dados de um aluno
routes.put('/students', studentController.update);
// Listagem de todos os alunos
routes.get('/students', studentController.index);
// Gestão de planos - Criação de um novo plano
routes.post('/plans', planController.store);
// Gestão de planos - Listagem de todos os planos
routes.get('/plans', planController.index);
// Gestao de planos - Atualização de plano
routes.put('/plans', planController.update);
// Gestão de planos - Deleta um plano
routes.delete('/plans', planController.delete);
export default routes;
