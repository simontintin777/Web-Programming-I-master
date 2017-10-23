// const express = require('express');
var bcrypt = require("bcrypt-nodejs");
const data = require('../data');
const User = data.users;
// const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
  passport.use('local', new LocalStrategy({
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true
    },
      function(req, username, password, done) {
        User.findOne(username).then((user) => {
          bcrypt.compare(password, user.password, function(err, res) {
            if (err) { return Promise.reject("Error") }
            else {
              if (res === true) 
                return done(null, user);
              else 
                return done(null, false, req.flash('loginMessage', 'Incorrect password'));
            }  
          });
        }).catch((error) => {
            // console.log(error);
            return done(null, false, req.flash('loginMessage', 'No user found'));
        });
      
        passport.serializeUser(function(user, done) {
          done(null, user);
        });

        passport.deserializeUser(function(user, done) {
          done(null, user);
        });
      }
    ));
}    
