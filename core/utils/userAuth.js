const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string()
    .max(20)
    .min(3),
    
    username: Joi.string()
    .alphanum()
    .min(4)
    .max(10)
    .required(),
    
    email: Joi.string()
    .email(),

    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    
    password_check: Joi.ref('password'),
    
})


module.exports = schema