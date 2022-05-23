import { sendMessage } from './client';
import { logger } from './logger';

const args = process.argv.slice(2);

let address;
let port;
let message;

if (args.length > 2) {
  address = args[0];
  port = parseInt(args[1]);
  message = args[2];
} else if (args.length > 1) {
  address = 'localhost';
  port = parseInt(args[0]);
  message = args[1];
} else if (args.length == 1) {
  address = 'localhost';
  port = 3000;
  message = args[0];
} else {
  address = 'localhost';
  port = 3000;
  message = 'Hello World';
}

sendMessage(address, port, message).then((message) =>
  logger(() => `receive message[${message}]`)
);

