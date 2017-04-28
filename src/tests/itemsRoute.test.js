import test from 'ava';

import {loadData} from '../data/data.js';
import {deleteData} from '../data/data.js';

import { getItem } from '../routes/items.js';
import { item2 } from '../data/data.js';

test.before( "Clear and load data", t => {
  deleteData();
  loadData();
});

test( 'Getting a specific item from Mongo',async t => {
  let response = await getItem(2);
  let testItem = response[0];
  t.is( testItem.id, item2.id, "Item returned from Mongo does not match" );
});
