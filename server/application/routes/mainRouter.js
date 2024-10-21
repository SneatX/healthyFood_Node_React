const express = require('express');
const router = express.Router();
const loginRouter = require('./loginRouter')
const apiRouter = require('./apiRouter')


//Api endpoints

router.use("/api", apiRouter)

//Manejo de rutas generales
router.use("/login", loginRouter)

//Rutas específicas del index
router.get("/auth-check", (req, res) => {
    // console.log("user:",req.user)
    if (req.user) {
        res.status(200).json({
            authenticated: true,
            user: req.user,  
            msj: "Estás autenticado"
        });
    } else {
        res.status(401).json({
            authenticated: false,
            user: null, 
            msj: "No estás autenticado"
        });
    }
});

module.exports = router