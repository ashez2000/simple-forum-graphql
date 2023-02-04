import { startStandaloneServer } from '@apollo/server/standalone';
import config from './config';
import { server } from './app';

async function main() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: config.port },
  });

  console.log(`🚀 Server ready at: ${url}`);
}

main();
