import { Router } from 'Express';
import { users } from '../data/data.js';

const router = new Router();

router.get( '/', (req, res) => {

  return res.json(users)

});

router.get ( '/:email', (req,res) => {

  let user = users.filter( user => user.email === req.params.email);
  return res.json(user);

});

export default router;
