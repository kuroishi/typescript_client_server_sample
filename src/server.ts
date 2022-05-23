import { Server, createServer } from 'net';
import { logger } from './logger';

function newServer(): Server {
  const server = createServer((socket) => {
    const clientAddress = `${socket.remoteAddress}:${socket.remotePort}`;

    logger(() => `connect client = ${clientAddress}`);

    socket.setEncoding('utf8');

    socket.on('data', (data: string) => {
      const trimmedData = data.trim();

      logger(() => `received data[${trimmedData}]`);
      socket.write(`★${trimmedData}★`);
    });

    socket.on('close', () =>
      logger(() => `disconnect client = ${clientAddress}`)
    );
  });

  server.on('error', (err) => {
    throw err;
  });

  server.on('close', () => logger(() => 'echo server, shutdown'));

  return server;
}

export const server = newServer();
