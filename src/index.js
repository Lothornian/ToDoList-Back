import Express from 'express';
import Parser from 'body-parser';

import {loadData} from './data/data.js';
import {deleteData} from './data/data.js';
import users from './routes/users.js';
import items from './routes/items.js';

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = Express();
const port = process.env.PORT || 4000;

if( ENV == 'development' ){
  deleteData();
  loadData();
};

app.use(Parser.json());
app.use('/users', users);
app.use('/items', items);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;
