var express = require('express');
var router = express.Router();
const staffController = require('../controllers/staffController');
const passportJWT = require('../middleware/passportJWT');

/* GET users listing. */
// http://localhost:3000/staff
router.get('/', [ passportJWT.isLogin] ,staffController.index);

// get by ID
// http://localhost:3000/staff/608538d1012328249c19906c
router.get('/:id', staffController.show);

// delete by ID
// http://localhost:3000/staff/608538d1012328249c19906c
router.delete('/:id', staffController.destroy);

// update by ID
// http://localhost:3000/staff/608538d1012328249c19906c
router.put('/:id', staffController.update);

// http://localhost:3000/staff
router.post('/', staffController.insert);




module.exports = router;
 