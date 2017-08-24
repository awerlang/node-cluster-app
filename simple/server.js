/* eslint-env node */
const cluster = require('cluster');

if (cluster.isMaster) {
    const numWorkers = require('os').cpus().length;
    for (let i = 0; i < numWorkers; i++) {
        const env = {
            NODE_ENV: process.env.NODE_ENV || "development",
        };
        const newWorker = cluster.fork(env);
        newWorker.process['env'] = env;
    }

    cluster.on('exit', function (worker, code, signal) {
        const newEnv = Object.assign({}, worker.process['env'], {});
        const newWorker = cluster.fork(newEnv);
        newWorker.process['env'] = newEnv;
    });
} else {
    require('./app');
}
