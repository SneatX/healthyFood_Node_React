const sessionMiddleware = (req, res, next) => {
    if (req.session && req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'No autorizado. Inicia sesión.' });
    }
};

module.exports = sessionMiddleware;
