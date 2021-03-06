/**
 * a koa2 demo
 */

const Koa = require('koa')
const app = new Koa()

const showUrl = require('./middleware/ShowUrl')
// app.use(ctx => {
//   // console.log(ctx)
//   ctx.body = 'Hello koa'
// })
app.use(showUrl)
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.listen(3000)
