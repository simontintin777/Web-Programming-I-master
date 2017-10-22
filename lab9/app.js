const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const static = express.static(__dirname + '/public');
const exphbs = require('express-handlebars');
const session = require('express-session');
const Handlebars = require('handlebars');
const flash = require('connect-flash');
const passport = require("passport");

const handlebarsInstance = exphbs.create({
    defaultLayout: 'main',
    // Specify helpers which are only registered on this instance.
    helpers: {
        asJSON: (obj, spacing) => {
            if (typeof spacing === "number")
                return new Handlebars.SafeString(JSON.stringify(obj, null, spacing));
        
            return new Handlebars.SafeString(JSON.stringify(obj));
        }
    }
});



app.use("/public", static);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(flash());
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', handlebarsInstance.engine);
app.set('view engine', 'handlebars');

require('./routes/index')(app, passport);
require('./routes/passport')(passport);

// configRoutes(app);


app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});