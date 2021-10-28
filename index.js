import express from 'express';

const app = express();
const port = process.env.PORT || 3011;

app.get('/', (req, res) => res.send('Hello Guys'));

app.listen(port, () => console.log(`Listening on http://localhost:${port}`));