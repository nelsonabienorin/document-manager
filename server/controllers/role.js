import { Role } from '../models';

const roleController = {
  create(req, res) {
    return Role.create(
      req.body
      )
      .then(role => res.status(201).send(role))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Role
      .all()
      .then(role => res.status(200).send(role))
      .catch(error => res.status(400).send(error));
  },
};

export default roleController;
