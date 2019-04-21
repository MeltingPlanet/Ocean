/*
const mqtt = require('mqtt');
const MaxApi = require('max-api');

const TOPIC = 'tags';
const client = mqtt.connect('mqtt://10.0.0.254:1883');

client.subscribe(TOPIC);
client.on('message', (topic, message) => {
  console.info(message.toString());
  MaxApi.post(message.toString());
});
*/

var mqtt = require('mqtt');
const MaxApi = require('max-api');

var client  = mqtt.connect('mqtt://test.mosquitto.org');
 
client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt');
    }
  })
})
 
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  MaxApi.post(message.toString());
  client.end();
});