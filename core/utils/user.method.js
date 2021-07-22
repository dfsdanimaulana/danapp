const moment = require('moment')

const users = []

const u = {
  userJoin: (name, id) => users.push({ name, id }),

  getCurrentUser: (id) => {
    return users.find(user => user.id === id)
  },

  formatName: (obj) => {
    const time = moment().format('hh:mm A')
    return {
      name: obj.name,
      content: obj.msg,
      pos: 'right',
      timeSend: time,
    }
  },

}

module.exports = u 
