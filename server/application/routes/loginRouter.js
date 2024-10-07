const express = require('express');
const router = express.Router();
const passport = require('passport');

const { 
    configPassportGoogleOAuth,
    configPassportDiscordOAuth,
    serializeAndDeserializeUser
} = require('../middlewares/passportAuthConfig.js');
const authController = require('../controllers/loginController.js');

// Configuración de Passport
serializeAndDeserializeUser()
configPassportGoogleOAuth()
configPassportDiscordOAuth()

// LogOut endpoint

router.get("/logout", authController.logout)

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/calback',  authController.googleAuthCallback)

// Discord OAuth
router.get('/auth/discord', passport.authenticate('discord', { scope: ['identify', 'email'] }))
router.get('/auth/discord/calback',  authController.discordAuthCallback)


module.exports = router;