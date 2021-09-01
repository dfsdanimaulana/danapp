const moment = require('moment')

const users = []


exports.userJoin = function(name, id) {
    users.push({
        name, id
    })
}

exports.getCurrentUser = function(id) {
    return users.find((user) => user.id === id)
}

exports.formatName = function (obj) {
    return {
        name: obj.name,
        content: obj.msg,
        pos: 'right',
        timeSend: moment().format('hh:mm A')
    }
}
