/**
 * 一个中间件
 * 显示请求的参数
 */

const showUrl = ctx => {
  console.log(`请求参数==>${ctx.request.query}`)
}

module.exports = async (ctx, next) => {
  showUrl(ctx)
  await next()
}
