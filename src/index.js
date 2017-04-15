import Express from 'express';
import Parser from 'body-parser';

import users from './routes/users.js';
import items from './routes/items.js';

const app = Express();
const port = process.env.PORT || 5000;

app.use(Parser.json());
app.use('/users', users);
app.use('/items', items);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;
