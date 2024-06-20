const express= require('express');
const { getAllUsers, registerController, loginController, singleUserController} = require('../controllers/userController');

// router object
const router= express.Router();

    // get all users || GET
router.get('/all-users', getAllUsers);

    // create user || POST
router.post('/register', registerController);    

    // Login || POST
router.post('/login', loginController);

     // get single user || POST
router.get('/single-user/:email', singleUserController);

module.exports= router;