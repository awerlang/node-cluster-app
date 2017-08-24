/* eslint-env node */
const cluster = require('cluster');

if (cluster.isMaster) {
    cluster.fork({TYPE: 'ws'});
    cluster.on('message', (worker, message) => {
        if (message.TYPE === 'ws') {
            cluster.fork({TYPE: 'app'});
        }
    })
} else {
    require('./' + process.env.TYPE);
}
