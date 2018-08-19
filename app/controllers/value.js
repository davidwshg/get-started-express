class Value {

  get(req, res) {
    const values = ['v1', 'v2', 'v3'];

    res.status(200).send(values);
  }

}

export default new Value;