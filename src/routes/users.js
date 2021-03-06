import { Router } from 'express';
import { users } from '../data/data.js';
import { getCollection } from '../db.js';
import User from "../data/user.js";

const router = new Router();

router.get( '/', (req, res) => {

  return res.json(users)

});

router.get ( '/:email', (req,res) => {

  let user = users.filter( user => user.email === req.params.email);
  return res.json(user);

});

router.post ( '/', (req,res) => {
  let user = new User(req.body.name, req.body.email );
  console.log(user);
  storeUser(user);
  return res.json(user);
});

const storeUser = async(user) => {
  const userCollection = await getCollection('users');
  userCollection.insertOne(user);
  console.log("stored");
}

export default router;
