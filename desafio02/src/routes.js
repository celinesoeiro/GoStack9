import { Router } from 'express';

import User from './app/models/User';
import Student from './app/models/Student';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.name;
  const student = await Student.create({
    name: 'Celine',
    email: 'celinesoeiro@gmail.com',
    age: 27,
    weight: 60,
    height: 1.63,
  });
  return res.json(student);
});

export default routes;
