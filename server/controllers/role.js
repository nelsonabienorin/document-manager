import {
  Role
} from '../models';

const roleController = {
  /**
   * Create a new role
   * Route: POST: /roles/
   * @param {Object} req request object
   * @param {Object} res response object
   * @returns {void} no returns
   */
  create(req, res) {
    return Role.create(
        req.body
      )
      .then(role => res.status(201).send({
        message: 'Role has been created',
        role
      }))
      .catch(error => res.status(400).send(error));
  },
  getAllRoles(req, res) {
    return Role
      .all()
      .then(role => res.status(200).send({
        message: 'You have successfully retrieved all roles',
        role
      }))
      .catch(error => res.status(400).send(error));
  },
  updateRole(req, res) {
    // What does roleInstance does ?
    // Can't title field under Role table be unique?
    // req.roleInstance.updateRole(req.body)
    return Role.find({
        where: {
          id: req.params.roleId,
          title: req.body.roleTitle
        },
      })
      .then((updatedRole) => {
        res.status(200)
          .send({
            message: 'This role has been updated',
            updatedRole,
          });
      })
      .catch(error =>
        res.status(400)
        .send(error)
      );
  },
  deleteRole(req, res) {
    // Role.roleInstance.destroy()
    return Role.findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(400).send({
            message: 'Role not found',
          });
        }
        return role
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
    // .then(() => {
    //   res.status(200)
    //     .send({
    //       message: 'This role has been deleted'
    //     });
    // });
  },
  getRole(req, res) {
    Role.findById(req.params.roleId)
      .then((role) => {
        if (!role) {
          return res.status(404)
            .send({
              message: 'This role does not exist'
            });
        }
        res.status(200)
          .send({
            message: 'This role has been retrieved successfully',
            role
          });
      });
  }
};

export default roleController;