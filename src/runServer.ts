import { logger } from './logger';
import { server } from './server';

const address = 'localhost';
const port = 3000;

const options = {
  host: address,
  port: port,
};

server.listen(options, () =>
  logger(() => `echo server[${address}:${port}], startup`)
	     );
