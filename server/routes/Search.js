import express from 'express';
import User from '../app/controllers/user';
import Document from '../app/controllers/document';
import Auth from '../app/middlewares/Auth';

const searchRouter = express.Router();

searchRouter.route('/users')
  .get(Auth.verifyToken,
    Auth.validateSearch,
    User.search);

searchRouter.route('/documents')
  .get(Auth.verifyToken,
    Auth.validateSearch,
    Document.search);

export default searchRouter;
