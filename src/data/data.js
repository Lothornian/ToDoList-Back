import item from './item';
import user from './user.js';

export let item1 = new item( 'First thing', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com' );
export let item2 = new item( 'second thing', "I'll do this after the first thing", '4/16/17', 'KyleRHunt@Gmail.com' );

export const user1 = new user( 'Kyle Hunt', 'KyleRHunt@Gmail.com' );

export items = [item1, item2];
