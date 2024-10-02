const passport = require('passport');
const configPassportGoogleOAuth = require('../middlewares/googleOAuth.js');
const authController = require('../controllers/loginController.js');
const express = require('express');
const router = express.Router();

// Configuración de estrategias de Passport
configPassportGoogleOAuth(passport)

// Rutas
router.get("/", (req, res)=>{
    res.redirect("http://localhost:4321/login");
})

// Google OAuth
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/auth/google/calback',  authController.googleAuthCallback)


module.exports = router;