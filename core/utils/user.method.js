const time = require('moment')().format('hh:mm A')

const u = {
    formatName: obj =>{
           return {
                name:obj.name,
                content: obj.msg,
                pos: 'left',
                timeSend: time
            }
    }
}

module.exports = u