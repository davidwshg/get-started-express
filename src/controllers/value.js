const values = ['v1', 'v2', 'v3'];

export const get = (req, res) => res.status(200).send(values);
export const getById = (req, res) => res.status(200).send(values[req.params.id]);
