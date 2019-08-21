const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const views = require('koa-views');
const static = require('koa-static')
const app = new Koa()

const Router = require('koa-router')
const staticPath = './static'

let router = new Router()
app.use(static(
  path.join( __dirname,  staticPath)
))
app.use(views(__dirname + '/templates',{
  extension: 'html'
}))
router.get('/', async ( ctx )=>{
  await ctx.render("index.html")
}).get('/meter', async (ctx) => {
  await ctx.render('meter.html')
}).get('/tel', async (ctx) => {
  await ctx.render('tel.html')
}).get('/cat', async (ctx) => {
  await ctx.render("cat.html")
})

app.use(router.routes())

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')