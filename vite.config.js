// vite.config.js
//import dotenvExpand from 'dotenv-expand';
import { loadEnv, defineConfig } from 'vite';
import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private';

import { createPool } from '@vercel/postgres';
//const pool = createPool({

connectionString: POSTGRES_URL
//});

//export default defineConfig(({ mode }) => {
  // This check is important!
  if (mode === 'development') {
    const env = loadEnv(mode, process.cwd(), '');
    dotenvExpand.expand({ parsed: env });
  }

  return {
    plugins: [
      {
        name: 'vite-plugin-pg',
        config: {
          pg: {
            conn: pool,
            enableCors: true,
          },
        },
      },
    ],
  };
 
//});