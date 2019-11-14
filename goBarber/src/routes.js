/**
 * CRIAÇÃO DO ROTEAMENTO
 */
import { Router } from 'express';
import multer from 'multer';
// Configurações do multer
import multerConfig from './config/multer';
// Controladores
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
// Middleware de autenticação
import authMiddleware from './app/middlewares/auth';
// Criação das rotas
const routes = new Router();
// Configuração do upload
const upload = multer(multerConfig);
// Rotas de criação de usuário e sessão
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// Middleware global de autenticação. Só vale para as rotas abaixo dele. Login
routes.use(authMiddleware);
// Upload de dados do usuário logados
routes.put('/users', UserController.update);
// Pegando o arquivo
routes.post('/files', upload.single('file'), FileController.store);
// Listando os usuários providers
routes.get('/providers', ProviderController.index);
// Marcando um horário
routes.post('/appointments', AppointmentController.store);
// Listando todos os horários agendados
routes.get('/appointments', AppointmentController.index);
// Listando a agenda do prestador de serviços
routes.get('/schedule', ScheduleController.index);
export default routes;
