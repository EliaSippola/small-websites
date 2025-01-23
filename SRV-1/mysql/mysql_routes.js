const exp = require('express');
const router = exp.Router();
const control = require('./mysql_controller');

// get all news
router.get('/', control.getAll);

// create news
router.post('/', control.create);

// delete news
router.delete('/', control.delete);

// update news
router.put('/:id', control.update);

module.exports = router;