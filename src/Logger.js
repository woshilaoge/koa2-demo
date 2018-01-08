const Koa = require('koa')
const app = new Koa()
/**
 * 
 * @param {String} format
 * @returns
 */
const logger = format => {
  format = format || `@method "@url"`

  return async (ctx, next) => {
    const str = format.replace('@method', ctx.method).replace('@url', ctx.url)
    console.log(str)

    await next()
  }
}

app.use(logger())

app.listen(3000)


