const express = require('express')
const passport = require('passport')
const session = require('express-session');
const cors = require('cors')

const { jsonParseErrorHandler } = require('../middlewares/errorHandling')
const { limiTotal } = require('../middlewares/rateLimit')

const indexRouter = require('../../application/routes/indexRouter')
const sessionManager = require('../middlewares/sessionOAuth')
const loginRouter = require('../../application/routes/loginRouter')

const createServer = () => {
    //Creacion del servidor con express
    const app = express()

    //Conficuracion del cors para permitir el acceso desde otros dominios
    const corsOptions = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    }
    app.use(cors(corsOptions))

    //Configuracion de la sesion y passport
    app.use(sessionManager)

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(jsonParseErrorHandler)
    app.use(limiTotal)

    app.use("/", indexRouter)
    app.use("/login", loginRouter)

    return app
}

module.exports = createServer