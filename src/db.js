import { MongoClient } from 'mongodb';

const schema = 'loth-to_do_list';
const port = '27017';

const mongoUri = process.env.MONGO_URI || 'mongodb://Loth:lothornian@ds129281.mlab.com:29281/loth-to_do_list';

//`mongodb://localhost:${port}/${schema}`;

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (collectionIWant) => {
  const db = await connect();
  console.log("connected");
  return db.collection(collectionIWant);
};
