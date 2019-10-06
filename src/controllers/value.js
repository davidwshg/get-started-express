export default {

  get(req, res) {
    res.status(200).send(['v1', 'v2', 'v3', 'v4', 'v5']);
  },

};
