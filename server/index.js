const http = require('http');
const faye = require('faye');
const logger = require('debug')('server:index');
logger.enabled = true;
const port = 3000;

const server = http.createServer();
const fayeux  = new faye.NodeAdapter({
    mount:'/',
});
fayeux.attach(server);
fayeux.on('handshake',clientId=>{
    logger(`server event:handshake clientId:${clientId}`);
});
fayeux.on('subscribe',(clientId,channel)=>{
    logger(`server event:subscribe clientId:${clientId} channel:${channel}`);
});
fayeux.on('unsubscribe',(clientId,channel)=>{
    logger(`server event:unsubscribe clientId:${clientId} channel:${channel}`);
});
fayeux.on('publish',(clientId,channel,data)=>{
    logger(`server event:publish clientId:${clientId} channel:${channel} data:${JSON.stringify(data,null,2)}`);
});
fayeux.on('disconnect',clientId=>{
    logger(`server event:disconnect clientId:${clientId}`);
});

server.listen(port);
logger(`server run at port:${port}`);
