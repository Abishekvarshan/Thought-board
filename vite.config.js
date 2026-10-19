import { resolve } from 'node:path';

export default {
  server: {
    open: '/The%20Thought%20Board.html',
  },
  build: {
    rollupOptions: {
      input: resolve(process.cwd(), 'The Thought Board.html'),
    },
  },
};
