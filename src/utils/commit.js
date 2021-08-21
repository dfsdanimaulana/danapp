'use strict'

const { exec } = require('child_process')

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
}

function cbCommit(err, strout, stdin) {
    if (err) {
        console.log(err)
        return
    }
    const message = strout
    console.log(chalk.blue(message))
    console.log(chalk.green('commit done msg : ', str))
}

// npm run commit -- message
