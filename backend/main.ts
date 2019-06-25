import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaBodyParser from 'koa-bodyparser';
import * as KoaLogger from 'koa-logger';

import {initDB, mongo} from "./infrastructure/mongo";
import {ObjectId} from "bson";
//var ObjectID = require('mongodb').ObjectID;

const app = new Koa();
const router = new Router();

app.use(KoaBodyParser());
app.use(KoaLogger());

router
.get('/post/:id', async (context) => {
    //let query = await mongo.collection('posts').findOne({ cid: context.params.id.toString() }); //using CID
    let query = await mongo.collection('posts').findOne({ _id: new ObjectId(context.params.id) });
    if(query != null) {
        context.body = query;
        console.log(context.body);
    } else {
        context.status = 404;
    }
})
    .post('/post/', async (context) => {
        let data = context.request.body;
        await mongo.collection('posts').insertOne(data, function (err, records) {
            if(err != null) {
                context.body = err.errmsg;
            } else {
                context.body = records[0]._id;
            }
        });
    })
.get('/*', async (context) => {
    context.body = 'It works!';
});

app.use(router.routes());

(async () => {
    await initDB();
    app.listen(3000);
    console.log('Server running on port 3000');
})();
