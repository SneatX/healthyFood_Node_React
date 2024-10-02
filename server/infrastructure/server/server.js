const express = require('express')
const passport = require('passport')
const cors = require('cors')

const { jsonParseErrorHandler } = require('../middlewares/errorHandling')
const { limiTotal } = require('../middlewares/rateLimit')

const indexRouter = require('../../application/routes/indexRouter')
const sessionManager = require('../middlewares/sessionOAuth')
const loginRouter = require('../../application/routes/loginRouter')

const createServer = () => {
    const app = express()

    const corsOptions = {
        origin: '*', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
        credentials: true, 
    }
    app.use(cors(corsOptions))

    app.use(jsonParseErrorHandler)
    app.use(limiTotal)

    app.use("/", indexRouter)
    app.use("/login", sessionManager, passport.initialize(), passport.session(), loginRouter)

    return app
}

module.exports = createServer