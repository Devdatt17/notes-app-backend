const express = require('express')
const controllers = require('../controllers/index')

const router = express.Router()

router.get('/',controllers.displayAllNotes)

router.post('/:id',controllers.addNewNotes)

router.delete('/:id',controllers.deleteSingleNote)

router.delete('/',controllers.deleteAllNotes)

router.get('/:id',controllers.displaySingleNote)

router.patch('/:id',controllers.updateSingleNote)

module.exports = router