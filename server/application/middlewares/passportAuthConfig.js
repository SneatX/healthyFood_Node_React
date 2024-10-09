const passport = require("passport")
const User = require('../../domain/models/userModel');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;


function serializeAndDeserializeUser() {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser(async (user, done) => {
        try {
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}
function configPassportGoogleOAuth() {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ['profile', 'email']

    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let userInstance = new User();
            let dataUser = [{
                $match: {
                    email: profile._json.email
                }
            }];
            let resAgregate = await userInstance.aggregate(dataUser)
            let [user] = resAgregate

            if (resAgregate.length) return done(null, user);

            let data = {
                name: profile.displayName,
                username: profile._json.email.match(/^[^@]+/)[0],
                img: profile._json.picture,
                email: profile._json.email,
                provider: 'google',
                password: null
            }
            await userInstance.insert(data)
            let userCreate = await userInstance.aggregate(dataUser)
            done(null, userCreate);
        } catch (error) {
            console.error('Error saving/updating user:', error);
            done(error, null);
        }
    }));
}

function configPassportGithubOAuth() {
    passport.use(new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let userInstance = new User();
            let dataUser = [{
                $match: {
                    email: profile.profileUrl
                }
            }];
            let resAgregate = await userInstance.aggregate(dataUser)
            let [user] = resAgregate

            if (resAgregate.length) return done(null, user);

            let data = {
                name: profile.username,
                username: profile.username,
                img: profile.photos[0].value,
                email: profile.profileUrl,
                provider: 'github',
                password: null
            }
            await userInstance.insert(data)
            let userCreate = await userInstance.aggregate(dataUser)
            done(null, userCreate);
        } catch (error) {
            console.error('Error saving/updating user:', error);
            done(error, null);
        }
    }

    ))
}

function configPassportDiscordOAuth() {
    passport.use(new DiscordStrategy({
        clientID: process.env.DISCORD_CLIENT_ID,
        clientSecret: process.env.DISCORD_CLIENT_SECRET,
        callbackURL: process.env.DISCORD_CALLBACK_URL,
        scope: ['identify', 'email']
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            let userInstance = new User();
            let dataUser = [{
                $match: {
                    email: profile.email
                }
            }];
            let resAgregate = await userInstance.aggregate(dataUser)
            let [user] = resAgregate

            if (resAgregate.length) return done(null, user);

            let data = {
                name: profile.global_name,
                username: profile.username,
                img: profile.avatar ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png` : '',
                email: profile.email,
                provider: 'discord',
                password: null
            }
            await userInstance.insert(data)
            let userCreate = await userInstance.aggregate(dataUser)
            done(null, userCreate);
        } catch (error) {
            console.error('Error saving/updating user:', error);
            done(error, null);
        }
    }));
}


module.exports = { configPassportGoogleOAuth, serializeAndDeserializeUser, configPassportDiscordOAuth, configPassportGithubOAuth };