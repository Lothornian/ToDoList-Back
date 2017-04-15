import Express from 'express';
import Parser from 'body-parser';

import {loadData} from './data/data.js';
import {deleteData} from './data/data.js';
import users from './routes/users.js';
import items from './routes/items.js';

/*
 * index.js
 * sets up our routes and prepopulates seed data.
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */

const ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const app = Express();
const port = process.env.PORT || 4000;

//Only load seed data when in development
if( ENV == 'development' ){
  deleteData();
  loadData();
};

//Create routes for users and items.
app.use(Parser.json());
app.use('/users', users);
app.use('/items', items);

app.listen(port, () => console.log(`App start: http://localhost:${port}`));

export default app;
