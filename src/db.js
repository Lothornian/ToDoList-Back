import { MongoClient } from 'mongodb';

const schema = 'ToDoList';
const port = '27017';

const mongoUri = process.env.MONGO_URI || `mongodb://localhost:${port}/${schema}`;

const connect = async () => await MongoClient.connect(mongoUri);

export default connect;

export const getCollection = async (collectionIWant) => {
  const db = await connect();
  return db.collection(collectionIWant);
};
