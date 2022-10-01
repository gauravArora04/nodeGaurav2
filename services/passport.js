const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const FacebookStrategy = require('passport-facebook').Strategy;
// const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser);
      }
      const user = await new User({ 
        googleId: profile.id,
        name: profile.displayName,
        email: profile._json.email,
        profilePic: profile._json.picture
      }).save();
      done(null, user);
    }
  )
);

// passport.use(
//     new FacebookStrategy({
//       clientID: keys.facebookAppID,
//       clientSecret: keys.facebookAppSecret,
//       callbackURL: "/auth/facebook/callback",
//       profileFields   : ['id','displayName','name','picture.type(large)','email'],
//       proxy: true
//     },
//     async(accessToken, refreshToken, profile, done) => {
//       const existingUser = await User.findOne({ facebookId: profile.id });
//       if (existingUser) {
//         return done(null, existingUser);
//       }
//       const user = await new User({ 
//         facebookId: profile.id,
//         name: profile.displayName,
//         email: profile._json.email,
//         profilePic: profile.photos[0].value
//       }).save();
//       done(null, user);
//     }
//   )
// );

// passport.use(
//   new LocalStrategy(
//     (username, password, done) => {
//       User.findOne({ username }, function(err, user) {
//         if (err) { return done(err); }
//         if (!user) {
//           return done(null, false);
//         }
//         if (user) {
//           bcrypt.compare(password, user.hash, function(error, isMatch) {
//             if (!isMatch) 
//               return done(null, false);
//             else 
//               return done(null, user);
//           });
//         }
//       });
//     }
// ));