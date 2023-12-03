const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');

const app = new Koa();
const router = new Router();

app.use(cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(bodyParser());

const items = {};

router.post('/item', ctx => {
    const item = ctx.request.body;
    if (!item.user_id || !Array.isArray(item.keywords) || !item.description) {
        ctx.status = 405;
        return;
    }

    const id = Math.random().toString(36).substr(2, 9); 
    item.id = id;
    item.date_from = new Date().toISOString(); 
    items[id] = item;

    ctx.status = 201;
    ctx.body = item;
});

router.get('/item/:id', ctx => {
    const item = items[ctx.params.id];
    if (item) {
        ctx.body = item;
    } else {
        ctx.status = 404;
    }
});

router.delete('/item/:id', ctx => {
    const id = ctx.params.id;
    if (items[id]) {
        delete items[id];
        ctx.status = 204;
    } else {
        ctx.status = 404;
    }
});

router.get('/items', ctx => {
    ctx.body = Object.values(items);
});

router.get('/', ctx => {
    ctx.type = 'text/html';
    ctx.body = 'Hello, Koa!';
});

router.options('/', ctx => {
    ctx.status = 204;
});

router.options('/items', ctx => {
    ctx.status = 204;
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
