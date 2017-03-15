import { User } from '../models';

const userController = {
  create(req, res) {
    return User
      .create(
        req.body
      )
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User
      .all()
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error));
  },
};

export default userController;
