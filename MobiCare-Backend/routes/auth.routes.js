const router = require("express").Router();
const authController = require('../controller/auth.controller');

router.post('/login',authController.login_Handler);
router.post('/token',authController.refrshAccessToken)

module.exports = router;