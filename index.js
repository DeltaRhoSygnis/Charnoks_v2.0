
import express from 'express';
import { createServer } from 'vite';

const app = express();
const port = process.env.PORT || 5000;

// Create Vite server in middleware mode
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa'
});

app.use(vite.ssrFixStacktrace);
app.use(vite.middlewares);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${port}`);
});
