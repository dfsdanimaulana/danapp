'use strict'

const fs = require('fs')
const { getImageById } = require('../models/methods/profile.method')

async function deleteOldImage(id) {
    // get oldimage name from database
    const oldImage = await getImageById(id)
    const imageName = oldImage.image

    if (imageName === 'male.png' || imageName === 'female.png') {
        return
    }
    const thumPath = `./images/profile/${imageName}`
    const profilePath = `./images/thumb/${imageName}`

    try {
        if (fs.existsSync(thumPath) && fs.existsSync(profilePath)) {
            fs.unlinkSync(thumPath)
            fs.unlinkSync(profilePath)
        } else {
            return
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = deleteOldImage