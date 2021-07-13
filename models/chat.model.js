const {client} = require('../core/db.connect')

const db = client.db('db_wa')
const dbCollect = db.collection('collect_wa')

function findAll() {
    return dbCollect.find().toArray()
}

module.exports= {
    findAll
}