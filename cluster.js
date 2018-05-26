const cluster = require('cluster');
const os = require('os');

const logger = require('./services/winston');

const cpus = os.cpus();

logger.info('executed thread');

if (cluster.isMaster) {
  logger.info('thread master');

  cpus.forEach(() => cluster.fork());

  cluster.on('listening', (worker) =>
    logger.info('cluster conected', worker.process.pid));

  cluster.on('exit', (worker) => {
    logger.info('cluster %d disconnected', worker.process.pid);
    cluster.fork();
  })
}
else {
  logger.info('thread slave');
  require('./app.js');
}
