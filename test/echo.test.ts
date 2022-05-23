import { server } from '../src/server';
import { sendMessage } from '../src/client';

const address = 'localhost';
const port = 3001;

beforeAll(
    () => {
	new Promise((resolve) => {
	server.listen({host: address, port: port},
		      () => {
			  resolve('start')
		      }
		     );
    })}
)

test('echo, Hello World', async () => {
  const reply = await sendMessage(address, port, 'Hello World');
  expect(reply).toBe('★Hello xWorld★');
});

test('echo, Hello World', async () => {
  const reply = await sendMessage(address, port, 'Hello World');
  expect(reply).toBe('★Hello World★');
});


afterAll(() => {
    new Promise((resolve) => {
	server.close(() => {
	    resolve('end');
	});
    });
});
