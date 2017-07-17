// mock data
const users = [
    { username: 'username', password: 'password' },
    { username: 'test', password: 'test' }
];

const products = [
    { name: 'Nike shoes', cost: '$13.00' },
    { name: 'Adidas shoes', cost: '$21.00' }
];

// load libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const jsonParser = bodyParser.json();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

// JWT Configuration
const ExtractJWT = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeader();
jwtOptions.secretOrKey = 'redtintIsAwesome';

// JWT Passport Strategy - strategy depends on the passport plugin you want (OAuth, JWT, Auth0)
var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // returns anything that matches username
    user = users.filter(user => {
        return user.username === jwt_payload.username;
    });

    if (user.length) {
        next(null, user);
    } else {
        next(null, false);
    }
});

// Make sure to register middleware
passport.use(strategy);
app.use(passport.initialize());

// load configurations
const port = process.env.PORT || 9000;

app.post('/login', jsonParser, (req, res) => {
    const username = req.body['username'];
    const password = req.body['password'];

    verified = users.filter(user => {
        return user.password === password && user.username === username;
    });

    if (verified.length) {
        const payload = { username: verified[0].username };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.status(200).send(token);
        return;
    } 

    res.sendStatus(401);
});

app.post('/get-products', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).send(products);
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
