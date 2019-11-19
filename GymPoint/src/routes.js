import { Router } from 'express';

import userController from './app/controllers/UserController';
import studentController from './app/controllers/StudentController';
import sessionController from './app/controllers/SessionController';
import planController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AnswerOrderController from './app/controllers/AnswerOrderController';
import authMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);

// ROTAS DOS ALUNOS
// Checkins - Iniciar sessão
routes.post('/students/:id/checkins', CheckinController.store);
// Checkins - Listagem de todas os visitas na academia
routes.get('/students/:id/checkins', CheckinController.index);
// Help Orders - Pergunta de um aluno
routes.post('/students/:id/help-orders', HelpOrderController.store);
// Help Orders - Listagem de todas as perguntas de um aluno
routes.get('/students/:id/help-orders', HelpOrderController.index);
// Autenticação
routes.use(authMiddlewares);
// ROTAS DOS ADMINS
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
// Gestão de matrículas - Matrícula um aluno
routes.post('/enrollments', EnrollmentController.store);
// Gestão de matrículas - Listagem de todas as matrículas
routes.get('/enrollments', EnrollmentController.index);
// Gestão de matrículas - Atualização de todas as matrículas
routes.put('/enrollments', EnrollmentController.update);
// Gestão de matrículas - Cancela uma matrícula
routes.delete('/enrollments', EnrollmentController.delete);
// Help Orders - Respondendo as perguntas
routes.post('/help-orders/:id/answer', AnswerOrderController.store);
// Help Orders - Listagem das perguntas não respondidas
routes.get('/help-orders/answer', AnswerOrderController.index);
// Help Order - Respondendo a uma pergunta
// routes.put('/help-orders/:id/answer', AnswerOrderController.update);
export default routes;
