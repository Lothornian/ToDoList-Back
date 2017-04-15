import { Router } from 'Express';

import { getCollection } from '../db.js';
import { items } from '../data/data.js';

const router = new Router();

const getAllItems = async() => {
  const itemsCollection = await getCollection('items');

  return await ( await itemsCollection.find({}) ).toArray();
}

const getItems = async(id) => {
  const itemsCollection = await getCollection('items');

  return await ( await itemsCollection.find({ id }) ).toArray();
}

router.get( '/', (req, res) => {
  return getAllItems().then(
    items => {
      return res.json(items);
    }
  );
});

router.get( '/:item', (req,res) => {

  let item = items.filter( item => item.id == req.params.item);
  return res.json(item);

});

export default router;
