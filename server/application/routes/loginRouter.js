const express = require('express');
const router = express.Router();
const passport = require('passport');

const { 
    configPassportGoogleOAuth,
    serializeAndDeserializeUser
} = require('../middlewares/passportAuthConfig.js');
const authController = require('../controllers/loginController.js');

// Configuración de Passport
serializeAndDeserializeUser()
configPassportGoogleOAuth()

// LogOut endpoint

router.get("/logout", authController.logout)

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/calback',  authController.googleAuthCallback)


module.exports = router;