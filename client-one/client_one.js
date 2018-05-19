const Faye = require('faye');
const logger = require('debug')('client:one');


const client = new Faye.Client('http://localhost:3000/');

setInterval(()=>{
    client.publish('/msg', {
        text: 'Hello world'+Date.now(),
      });
},3000)
