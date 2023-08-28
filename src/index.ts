import express from 'express';

const app = express();
const port = 3601;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('testing TypeScript222');
});

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
});