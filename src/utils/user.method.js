const moment = require('moment')

const users = []

module.exports = {

    userJoin: (name, id) => users.push({
        name, id
    }),

    getCurrentUser: (id) => {
        return users.find((user) => user.id === id)
    },

    formatName: (obj) => {
        return {
            name: obj.name,
            content: obj.msg,
            pos: 'right',
            timeSend: moment().format('hh:mm A')
        }
    }
}