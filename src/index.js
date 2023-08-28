import express from 'express';

const app = express();
const port = 3601;

app.get('/', (req, res) => {
	res.send('testing');
});

app.listen(port, () => {
	console.log(`listening on porst http://localhost:${port}`);
});