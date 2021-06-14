const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');
const passportJWT = require('../middleware/passportJWT');

/* GET users listing. */
// http://localhost:3000/user/
router.get('/', userController.index);

// http://localhost:3000/user/me
router.get('/me', [ passportJWT.isLogin] , userController.me);

// http://localhost:3000/user/login
router.post('/login', userController.login);

// http://localhost:3000/user/register
router.post('/register',[
    body('name').not().isEmpty().withMessage('กรุณาป้อนชื่อสกุลด้วย'),
    body('email').not().isEmpty().withMessage('กรุณาป้อนชื่อ email ด้วย').isEmail().withMessage('รูปแบบอีเมลไม่ถูกต้อง'),
    body('password').not().isEmpty().withMessage('กรุณาป้อนชื่อ password ด้วย').isLength({min:3}).withMessage('รหัสต้องสามตัวขึ้นไป'),
], userController.register);

module.exports = router;
 