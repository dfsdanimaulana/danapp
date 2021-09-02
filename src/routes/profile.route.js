'use strict'

const router = require('express').Router()

const { isAuth } = require('../utils/middleware')
const { upload } = require('../utils/upload')

const {
    view,
    updateData,
    getUsers,
    deleteUser,
    uploadUserImage,
} = require('../controllers/profile.controller')

router.get('/d/:id', deleteUser)
router.get('/api', getUsers)
router.get('/search', (req, res) => {
    res.render('livesearch')
})
router.get('/:id', isAuth, view)
router.put('/', updateData)
router.post('/', upload.single('image'), uploadUserImage)

module.exports = router
