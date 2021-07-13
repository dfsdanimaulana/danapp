const {client} = require('../core/db.connect')

// database
const db = client.db('db_wa')

// collection
const dbCollect = db.collection('collect_wa')

// find 
function findAll() {
    return dbCollect.find().toArray()
}

// add data



module.exports= {
    findAll
}