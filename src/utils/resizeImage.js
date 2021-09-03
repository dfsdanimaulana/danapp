'use strict'

const sharp = require('sharp')

exports.profileImage = function (imagePath) {
    // get image name
    const getName = imagePath.split('\\')[1]
    // resized image location
    const resizedImagePath = './images/profile/' + getName
    // resize image
    return (
        sharp(imagePath)
            .resize(400, 400)
            // .jpeg({ quality: 80, chromaSubsampling: '4:4:4' })
            .toFile(resizedImagePath)
    )
}
exports.thumbnailImage = function (imagePath) {
    const getName = imagePath.split('\\')[1]
    const resizedImagePath = './images/thumbnail/' + getName
    return sharp(imagePath).resize(200, 200).toFile(resizedImagePath)
}
