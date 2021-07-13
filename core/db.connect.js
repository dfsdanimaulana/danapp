const {MongoClient} = require('mongodb')
require('dotenv').config()

const client = new MongoClient(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//connect to mongodb server
const dbConnect = client.connect()

module.exports = {
    dbConnect,
    client
}