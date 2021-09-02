'use strict'

const bcrypt = require('bcryptjs')
const { schema, validate } = require('../utils/userAuth')

const { message, profile } = require('../models/methods')

const params = {}

exports.view = function (req, res) {
    if (req.session.isAuth && req.session.user) {
        return res.redirect('/chat')
    }
    res.render('signup', params)
}

exports.addUser = async function (req, res) {
    // if (req.body) return res.send(validate(req.body))
    try {
        const { error, value } = await schema.validate(req.body)
        if (error) {
            console.log(error)
            return res.send(error)
        }
        const data = value
        data.username = data.username.replace(/ /g, '_')
        const email = data.email
        const user = await profile.getByEmail(email)

        // cek if user alredy exists

        if (user) {
            req.flash('email_error', 'User already exists')
            return res.redirect('/signup')
        }

        // hash the password

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(data.password, salt)
        data.password = hashedPassword

        await profile.saveUser(data)

        res.redirect('/contacts')
    } catch (e) {
        return res.send(e)
    }
}

exports.uploadImg = function (req, res, next) {
    console.log(req.file)
    if (!req.file) {
        return res.send('file not found!')
    }
    const image = req.file.path // sudah di process sama multer tinggal ambil pathnya
    res.json({image})

}
/*
{
  fieldname: 'image',
  originalname: 'IMG_5805.JPG',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: 'images',
  filename: '1630432590744-IMG_5805.JPG',
  path: 'images\\1630432590744-IMG_5805.JPG',
  size: 1383158
}
*/
