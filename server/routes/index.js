import { userController, roleController, documentController } from '../controllers';

const indexRoute = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Users API',
  }));
  app.post('/api/user', userController.create);
  app.get('/api/user', userController.list);
  app.post('/api/role', roleController.create);
  app.get('/api/role', roleController.getAllRoles);
  app.post('/api/document', documentController.create);
  app.get('/api/document', documentController.list);
  // app.put('/api/updaterole/:roleId/title/:roleTitle', roleController.updateRole);
  app.put('/api/updaterole/:roleId', roleController.updateRole);
  app.delete('/api/deleterole/:roleId', roleController.deleteRole);
  app.get('/api/getrole:roleId', roleController.getRole);
};

export default indexRoute;

