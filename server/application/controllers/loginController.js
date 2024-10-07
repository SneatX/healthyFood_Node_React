const passport = require('passport');

function logout (req, res) {
    req.logout(err => {
        if (err) {
            console.error('Error al cerrar sesión:', err);
            return res.status(500).send("Error durante el logout.").redirect('/');
        }
        req.session.destroy(err => {
            if (err) {
                console.error('Error al destruir la sesión:', err);
                return res.status(500).send("Error durante el logout.").redirect('/');
            }
            res.clearCookie('connect.sid')
            res.redirect(`http://localhost:${process.env.VITE_PORT}/login`)
        });
    });
}

function googleAuthCallback (req, res, next) {
    passport.authenticate('google', async (err, user, info) => {
        if (err) {
            console.error('Error en la autenticación:', err);
            if (err.code === 11000) {
                return res.redirect('/?error=El email ya está en uso');
            }
            return next(err);
        }
        if (!user) {
            console.log('Autenticación fallida o cancelada:', info);
            return res.redirect('/');
        }

        req.logIn(user, (err) => {
            if (err) {
                console.error('Error al iniciar sesión:', err);
                return next(err);
            }
            return res.redirect(`http://localhost:${process.env.VITE_PORT}`);
        });
    })(req, res, next);
};

module.exports = { googleAuthCallback, logout };