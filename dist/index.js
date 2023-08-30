import express from 'express';
import { getFlashcards } from './model.js';
import cors from 'cors';
const app = express();
app.use(cors());
const port = 3601;
app.get('/', (req, res) => {
    res.send(`
<h1>Test API</h1>	
<ul>
	<li><a href="/flashcards">flashcards</a></li>
</ul>
	`);
});
app.get('/flashcards', (req, res) => {
    res.json(getFlashcards());
});
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map