import { Router } from 'Express';

import { getCollection } from '../db.js';
import { items } from '../data/data.js';
import Item from '../data/item.js';

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

  return await ( await itemsCollection.find({ active: true}) ).toArray();
}//end getAllItems

/*
 * getItem
 * Used to get detailed information for a specific item
 *
 * @param id - the id of the item
 * @return an item
 */
export const getItem = async(id) => {
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

/*
 * /items/ Post Route
 * Used to store a new item in Mongo
 *
 * @param id The Id of the item
 * @param summary The one line summary of the item
 * @param description The long description or details of the item
 * @param dueDate The due date for the item. in mm/dd/yyyy format
 * @param user the user who owns the item
 *
 * @return The newly created instance of the item.
 */
router.post( '/', (req,res) => {
  let item = new Item(
    req.body.id,
    req.body.summary,
    req.body.description,
    req.body.dueDate,
    req.body.user
  ); //end new Item
  storeItem(item);
  return res.json(item);
}); //end router.post ( '/'

/*
 * storeItem
 * Used to store an item in the attached database
 *
 * @param item The item to be stored.
 */
const storeItem = async(item) => {
  const itemCollection = await getCollection('items');
  itemCollection.insertOne(item);
} // end storeItem

/*
 * /items/:itemId Delete route
 * Used to delete an item from the list.
 * Note: The item is archived and still exists in the database.
 */
router.delete( '/:itemId', (req,res) => {
  removeItem(req.params.itemId);
  return res.send( `item ${req.params.itemId} has been deleted` );
});

/*
 * removeItem
 * Used to set the active flag to false on an item.
 * This will effectivly delete the item for the user.
 */
const removeItem = async(itemId) => {
  const itemCollection = await getCollection('items');
  itemCollection.updateOne(
    { id: parseInt(itemId) },
    {
      $set: { "active": false }
    }
  );
}

/*
 * deleteItem
 * Used to remove an item from the database.
 * Don't remove data, it doesn't end well..
 */
 const deleteItem = async(itemId) => {
   const itemCollection = await getCollection('items');
   itemCollection.deleteOne(
     { id: parseInt(itemId) }
   );
 }

export default router;
