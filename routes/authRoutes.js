const requireLogin = require('../middlewares/requireLogin');

const passport = require('passport');
// const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.model('users');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/', successRedirect: '/dashboard' }),
  );

  
  // app.get(
  //   '/auth/facebook',
  //   passport.authenticate('facebook', {
  //     scope: ['email']
  //   })
  // );

  // app.get('/auth/facebook/callback',
  //   passport.authenticate('facebook', { failureRedirect: '/', successRedirect: '/dashboard' })
  // );

  // app.post('/auth/customRegister', async(req, res) => {
  //   const { name, email, username, password } = req.body;
  //   const saltRounds = 10

  //   bcrypt.genSalt(saltRounds, function (saltError, salt) {
  //     if (saltError) {
  //       throw saltError
  //     } else {
  //       bcrypt.hash(password, salt, async function(hashError, hash) {
  //         if (hashError) {
  //           throw hashError
  //         } else {
  //           const existingUser = await User.findOne({ username });
  //           if (existingUser) {
  //             res.status(409).send({message: 'User Already Exists'});
  //             res.redirect('/dashboard');
  //           }else{
  //             const user = await new User({ 
  //               name,
  //               email,
  //               username,
  //               hash
  //             }).save();
  //             res.send(user);
  //           }
  //         }
  //       });
  //     }
  //   });
  // });

  // app.post('/auth/customLogin',
  //   passport.authenticate('local', { failureRedirect: '/register'})
  // );

  // app.post('/auth/customLogin', async(req, res) => {
  //   const { username, password } = req.body;
  //   const existingUser = await User.findOne({ username });
  //   if (existingUser) {
  //     bcrypt.compare(password, existingUser.hash, function(error, isMatch) {
  //       if (!isMatch) {
  //         res.status(403).send({ error: 'Entered password is incorrect!'});
  //       } else {
  //         req.user = existingUser;
  //         res.send(existingUser);
  //       }
  //     });
  //   }
  // });

  app.get('/api/logout', requireLogin,  (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
