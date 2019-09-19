import * as redis from 'redis'
import * as connectRedis from 'connect-redis'
import * as express from 'express'
import * as session from 'express-session'
import idea from './ideaAPI/ideaRoute'
const app: express.Application = express()
const port: number = 3000

let RedisStore = connectRedis(session)
let client: redis.RedisClient = redis.createClient()

app.use(session({
    store: new RedisStore({ client }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: true
    }
}))

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/birds', idea)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.use(express.static('public'))


