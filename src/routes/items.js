import { Router } from 'Express';

import { getCollection } from '../db.js';
import { items } from '../data/data.js';

/**
 * Items.js
 * This class defines the routes for getting items.
 * Author: Kyle Hunt
 * Created Date: 4/15/17
 * Last Updated: 4/15/17
 */

const router = new Router();

/*
 * getAllItems
 * Used to get all items
 *
 * @return an array of all items.
 *
 * @TODO have it linked to a user
 */
const getAllItems = async() => {
  const itemsCollection = await getCollection('items');

  return await ( await itemsCollection.find({}) ).toArray();
}//end getAllItems

/*
 * getItem
 * Used to get detailed information for a specific item
 *
 * @param id - the id of the item
 * @return an item
 */
const getItem = async(id) => {
  id = parseInt(id);
  const itemsCollection = await getCollection('items');
  const value = await ( await itemsCollection.find({ id }) ).toArray();
  return value;
}//end getItem

/*
 * /items Route
 * Gets all items
 *
 * @TODO only return items for the specified user
 */
router.get( '/', (req, res) => {
  return getAllItems().then(
    items => {
      return res.json(items);
    });
});

/*
 * /items/:id Route
 * Used to get details about a specific item by specifying the id of the item
 *
 * @TODO only return items for the specified user
 */
router.get( '/:item', (req,res) => {
  return getItem( req.params.item ).then(
    item => {
      console.log(item);
      return res.json(item);
    }
  );
});

export default router;
