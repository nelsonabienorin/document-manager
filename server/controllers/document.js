import {
  Document
} from '../models';

const documentController = {
  create(req, res) {
    return Document.create(
        req.body
      )
      .then(document => res.status(201).send(document))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Document
      .all()
      .then(document => res.status(200).send(document))
      .catch(error => res.status(400).send(error));
  },
};
export default documentController;
