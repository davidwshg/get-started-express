import cluster from 'cluster';
import os from 'os';
import log from './app/services/winston';

const cpus = os.cpus();

log.info('executed thread');

if (cluster.isMaster) {
  log.info('thread master');
  
  cpus.forEach(() => cluster.fork());
  
  cluster.on('listening', (worker) => log.info('cluster conected', worker.process.pid));
  
  cluster.on('exit', (worker) => {
    log.info('cluster %d disconnected', worker.process.pid);
    cluster.fork();
  })
}
else {
  log.info('thread slave');
  require('./main.js');
}