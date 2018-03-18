const restify = require('restify');

const server = restify.createServer();
server.get(/.*/, restify.plugins.serveStatic({
    directory: __dirname + '/dist',
    default: 'index.html',
    maxAge: 0
}));

server.listen(12345, () => {
    console.log('%s listening at %s', server.name, server.url);
});