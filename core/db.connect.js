const {
    MongoClient
} = require('mongodb')
const dbConfig = require('../config/db.config')

const client = new MongoClient(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//connect to mongodb server
const dbConnect = client.connect()

module.exports = {
    dbConnect,
    client
}