## simple

Spawns as many worker processes as there are CPU cores. Restarts process when they crash.

There's nothing special with the worker `app` and it can be run standalone.

Run with:

```
node simple/server.js
```

## sync

Implements inter-process communication. Worker `app` must start after `ws` has started.

Inside a cluster, `process.send()` becomes available.

Run with:

```
node sync/server.js
```
