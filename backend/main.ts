import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as KoaBodyParser from 'koa-bodyparser';
import * as KoaLogger from 'koa-logger';

import {initDB, mongo} from "./infrastructure/mongo";
var ObjectID = require('mongodb').ObjectID;

const app = new Koa();
const router = new Router();

app.use(KoaBodyParser());
app.use(KoaLogger());

router
.get('/api/post/:id', async (context) => {
    let query = await mongo.collection('posts').findOne({ _id: ObjectID(context.params.id) });
    if(query != null) {
        context.body = query;
    } else {
        context.status = 404;
    }
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
