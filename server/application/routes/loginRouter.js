const passport = require('passport');
const configPassportGoogleOAuth = require('../middlewares/googleOAuth.js');
const authController = require('../controllers/loginController.js');
const express = require('express');
const router = express.Router();

// Configuración de estrategias de Passport
configPassportGoogleOAuth(passport)

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/calback',  authController.googleAuthCallback)


module.exports = router;