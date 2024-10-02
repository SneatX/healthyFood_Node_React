const express = require('express');

const router = express.Router();

router.get("/auth-check", (req, res) => {
    if(req.isAuthenticated){
        res.status(200).json({authenticated: true, user: req.user, msj: "Estás autenticado"});
    }else{
        res.status(401).json({authenticated: false, user: req.user, msj: "No estás autenticado"});
    }
})

module.exports = router;