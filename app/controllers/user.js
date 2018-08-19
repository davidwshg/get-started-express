import db from '../services/sequelize';

class User {

  async get(req, res) {
    try {
      const users = await db.user.findAll();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async getForId(req, res) {
    try {
      const user = await db.user.findOne({ where: { id: req.params.id } });
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async create(req, res) {
    try {
      const { firstName, lastName } = req.body;
      const user = await db.user.create({ firstName, lastName });
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async update(req, res) {
    try {
      const { firstName, lastName } = req.body;
      const user = await db.user.find({ where: { id: req.params.id } });
      user.updateAttributes({ firstName, lastName });
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  async delete(req, res) {
    try {
      const user = await db.user.destroy({ where: { id: req.params.id } });
      res.status(200).send({});
    } catch (error) {
      res.status(500).send(error)
    }
  }

}

export default new User;