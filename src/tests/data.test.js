import test from 'ava';

import { users, items } from '../data/data.js';
import Item from '../data/item.js';

test( 'Verifying test items', t => {
  let itemtest = new Item( 1, 'Thing one', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com' );

  t.deepEqual( items[0], itemtest, "Test items are not being created correctly" );
});
