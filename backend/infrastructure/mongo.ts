import {Db, MongoClient, ObjectID} from "mongodb";

export let mongo: Db = null;

/*
    Initialize database
 */
export async function initDB() {
    let client = await MongoClient.connect(process.env['MONGODB_ADDRESS'], {useNewUrlParser: true});
    mongo = client.db('paste');
}