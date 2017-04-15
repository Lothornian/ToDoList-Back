import { Router } from 'Express';
import { items } from '../data/data.js'

const router = new Router();

router.get( '/', (req, res) => {

  return res.json(items);

});

router.get( '/:item', (req,res) => {

  let item = items.filter( item => item.id == req.params.item);
  return res.json(item);

});

export default router;
