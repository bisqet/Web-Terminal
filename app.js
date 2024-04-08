import Koa from "koa";

import cors from "@koa/cors";

import Router from "@koa/router";

import favicon from "koa-favicon";

import koaStatic from "koa-static";

import {nodeResolve} from 'koa-node-resolve';

import {RenderResultReadable} from '@lit-labs/ssr/lib/render-result-readable.js';


import {config} from "./config";

import {frontendEntryPoint} from './frontend/app.js';

const app = new Koa();

const {port} = config;

const router = new Router();

router.get('/', async ctx => {
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(frontendEntryPoint({randomValue: Math.random()}));
});

app
  .use(
    cors({
      origin: '*',
    }),
  )
  // .use(bodyParser())
  .use(nodeResolve())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(favicon(config.favicon))
  .use(koaStatic('.'))
  .use(async (ctx, next) => {
    console.log(ctx);
    next();
  })

app.listen(port.http);
/*
* TODO: add https
* TODO: transfer all frontend deps to separate folder keeping w/o build development (mean transfer node_modules to frontend so serve ./frontend not ./)
* */
console.log(`App running on url: http://localhost:${port.http}`)
