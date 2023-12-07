const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');


router.get('/users', userController.getUsers);
router.post('/user/new', userController.createUser);
router.post('/user/login', userController.loginUser);
router.delete('/user/delete/:id', userController.deleteUser);
router.put('/user/update/:id', userController.updateUser);

router.get('/user/profile', verifyToken, userController.getUserProfile);




module.exports = router;
