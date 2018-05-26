const app = require('./config/express');

const port = process.env.port;

app.listen(port, () => console.log(`Server run in port ${port}`))