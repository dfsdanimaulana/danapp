const moment = require('moment')

const users = []

module.exports = {

    userJoin: function(name, id) {
        users.push({
            name, id
        })
    },

    getCurrentUser: function(id) {
        return users.find((user) => user.id === id)
    },

    formatName: function (obj) {
        return {
            name: obj.name,
            content: obj.msg,
            pos: 'right',
            timeSend: moment().format('hh:mm A')
        }
    }
}