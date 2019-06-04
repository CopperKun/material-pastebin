import {Db, MongoClient, ObjectID} from "mongodb";

export let mongo: Db = null;

 const uri = "Connection String Here";

/*
    Initialize database
 */
export async function initDB() {
    let client = await MongoClient.connect(uri);
    mongo = client.db('paste');
}