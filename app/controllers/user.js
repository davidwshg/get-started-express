import db from '../services/sequelize';

class User {

  get(req, res) {
    db.user
      .findAll()
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(err));
  }

  getForId(req, res) {
    db.user
      .findOne({ where: { id: req.params.id } })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(err));
  }

  create(req, res) {
    const { firstName, lastName } = req.body;

    db.user
      .create({ firstName, lastName })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(err));
  }

  update(req, res) {
    const { firstName, lastName } = req.body;

    db.user
      .find({ where: { id: req.params.id } })
      .then(user => user.updateAttributes({ firstName, lastName }))
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(err));
  }

  delete(req, res) {
    db.user
      .destroy({ where: { id: req.params.id } })
      .then(res => res.status(200).send(res))
      .catch(err => res.status(500).send(err));
  }

}

export default new User;