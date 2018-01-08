const Koa = require('koa')
const app = new Koa()
const compose = require('koa-compose')
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

const random = async (ctx, next) => {
  if ('/random' == ctx.path) {
    ctx.body = Math.floor(Math.random() * 10)
  } else {
    console.log('no random')
    await next()
    console.log('no random next')
  }
}

async function backwards(ctx, next) {
  if ('/backwards' == ctx.path) {
    ctx.body = 'sdrawkcab'
  } else {
    await next()
  }
}

async function pi(ctx, next) {
  if ('/pi' == ctx.path) {
    ctx.body = String(Math.PI)
  } else {
    console.log('no pi')
    await next()
  }
}

const all = compose([random, backwards,logger(), pi])

app.use(all)

app.listen(3000)
