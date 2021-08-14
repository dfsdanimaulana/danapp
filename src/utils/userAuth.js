const Joi = require('joi')
const validator = require('validator')

const schema = Joi.object({
    name: Joi.string()
    .max(20)
    .min(3),

    username: Joi.string()
    .min(4)
    .max(10)
    .required(),

    email: Joi.string()
    .email(),

    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    password_check: Joi.ref('password'),

})

const validate = (data) => {
    // true and false
    const {
        name,
        username,
        email,
        password,
        password_check
    } = data

    const err = {}

    if (!validator.isAlpha(name)) {
        err.name = 'Invalid name, name must be alpha only!'
    }
    if (!validator.isAlphanumeric(password)) {
        err.password = 'Password must no contain any special characters!'
    }
    if (!validator.isByteLength(username, {
        min: 4, max: 10
    })) {
        err.nameLength = username.length < 4 ?
        'Minimal 4 characters': 'Maximal 10 characters'
    }
    if (!validator.isByteLength(password, {
        min: 6, max: 20
    })) {
        err.passLength = password.length < 6 ?
        'Minimal 6 characters': 'Maximal 20 characters'
    }
    if (!validator.isAlphanumeric(username)) {
        err.username = 'Username must no contain any special characters!'
    }
    return err
}
module.exports = {
    schema,
    validate
}