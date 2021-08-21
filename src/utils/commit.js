'use strict'

const {
    exec
} = require('child_process')

const chalk = require('chalk')

let args = process.argv
args.splice(0, 2)

let str = args.join(' ')

exec('git add .', cbAdd)

function cbAdd(err, strout, stdin) {
    if (err) {
        console.log(err)
        return
    }
    exec(`git commit -m "${str}"`, cbCommit)
    console.log({strout})
    console.log({stdin})
}

function cbCommit(err, strout, stdin) {
    if (err) {
        console.log(err)
        return
    }
      console.log({ strout })
      console.log({ stdin })
    console.log('commit done msg : ', str)
}

// npm run commit -- message