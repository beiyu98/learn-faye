const Faye = require('faye');
const logger = require('debug')('client:two');
logger.enabled = true;


const client = new Faye.Client('http://localhost:3000/');

client.subscribe('/msg', function(message) {
    logger('Got a message: ' + message.text);
});