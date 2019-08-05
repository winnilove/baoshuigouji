const Koa = require('koa')
const mount = require('koa-mount')
const graphqlHTTP = require('koa-graphql')
const schema = require('./graphql/schema')

const {database} =require('./mongodb' )
database() // 链接数据库并且初始化数据模型


const app = new Koa()
const port = 9000

app.use(mount('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
})))

app.listen(port)
app.on('error',err => {
    log.error('server error',err)
})
console.log('server listen port:' + port)