import { getCollection } from '../db.js';
import item from './item';
import user from './user.js';

export let item1 = new item( 1, 'Thing one', 'This is the first thing I will be doing', '4/15/17', 'KyleRHunt@Gmail.com' );
export let item2 = new item( 2, 'Thing two', "I'll do this after the first thing", '4/16/17', 'KyleRHunt@Gmail.com' );
export let item3 = new item( 3, 'Thing red', "This one is red", '4/16/17', 'KyleRHunt@Gmail.com' );

export const user1 = new user( 'Kyle Hunt', 'KyleRHunt@Gmail.com' );
export const user2 = new user( 'John', 'John@gmail.com' );

export let items = [item1, item2];
export let users = [user1, user2];

export const loadData = async() => {
  const userCollection = await getCollection('users');
  const itemCollection = await getCollection('items');

  await userCollection.insertMany( [user1, user2] );
  await itemCollection.insertMany( [item1, item2, item3] );
}

export const deleteData = async() => {
  const userCollection = await getCollection('users');
  const itemCollection = await getCollection('items');

  await userCollection.remove({});
  await itemCollection.remove({});
}
