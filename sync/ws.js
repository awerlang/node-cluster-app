/* eslint-env node */

setTimeout(() => {
    console.log('ws started')

    // tell master process this one has started
    process.send({TYPE: 'ws'})
}, 5000)
