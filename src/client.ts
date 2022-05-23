import net from 'net';
import { logger } from './logger';

export function sendMessage(
  address: string,
  port: number,
  message: string
): Promise<string> {
  return new Promise((resolve) => {
    const client = net.createConnection({ host: address, port: port }, () =>
      logger(() => `start client`)
    );

    client.setEncoding('utf8');

    client.on('connect', () => {
      logger(() => `connected server[${address}:${client.remotePort}]`);
      client.write(message);
      logger(() => `send message[${message}]`);
    });

    client.on('data', (data: string) => {
      resolve(data);
      client.end();
      client.destroy();
    });
  });
}
