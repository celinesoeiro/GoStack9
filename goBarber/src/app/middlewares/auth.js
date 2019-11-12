import jwt from 'jsonwebtoken';
import { promisify } from 'util'; // permite utilizar async/await em funções de callback

import authConfig from '../../config/auth';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization; // pega o token bearer

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided.' });
  }

  // separa o token no espaço, descartando o bearer e deixando só o token
  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log(decoded);
    req.userId = decoded.id;
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid Token' });
  }
};
