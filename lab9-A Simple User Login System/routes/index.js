// const path = require('path');
// const loginRoutes = require('./login');
// const passport = require('passport');

module.exports = function (app, passport) {

        app.get("/", (req, res) => {
            res.render("layouts/login", {message: req.flash('loginMessage')});
        });

        app.post('/login',
        passport.authenticate('local', { successRedirect: 'private',
                                        failureRedirect: '/',
                                        failureFlash: true })
        );
        
        app.get("/private", (req, res, next) => {
            if(!req.isAuthenticated()){
                res.redirect("/");
            }
            else { 
                res.render("layouts/private",req.user);
            }
        });

        app.use("*",(req,res) => {
            res.status(404).json({error: "Unvalie Symbol Not Found"});
        });
  
}