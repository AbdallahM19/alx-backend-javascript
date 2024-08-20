import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

export default app;
