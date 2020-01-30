import { Router } from 'express';

import UserController from './app/controller/UserController';

import SessionController from './app/controller/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);

export default routes;
