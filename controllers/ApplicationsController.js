const Application = require('../models/application');
const { check, validationResult } = require('express-validator');;

exports.adopt = (req, res) => {
    req.flash('form', 'Points:' + req.body.points + ' || ' + req.body.dog + ', its a dog for you!');
    res.redirect('/');
};


exports.countPoints = (req, res, next) => {
    var points = 0;   
    points = parseInt(req.body.age) + parseInt(req.body.height) / 2 + parseInt(req.body.weight) / 2;
    if (req.body.dog == '1')
        points = points + 20;
    if (req.body.sport == '1')
        points = points + 20;
    req.body.points = points;
    next();
};

exports.validate = [
    check('age').isLength({ min: 1 }).withMessage('Age is required.'),
    check('height').isLength({ min: 1 }).withMessage('Height is required.'),
    check('weight').isLength({ min: 1 }).withMessage('Weigh is required.')
];

exports.checkValidation = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.render('home', {
            validated: req.body,
            errors: errors.mapped(),
            showLightbox: 'true'
        });
    }

    next();
};

exports.findDog = (req, res, next) => {

    var dogs = ['French Bulldog', 'Maltese', 'Labrador retriever', 'golden retriever', 'German Shepherd', 'Bull terrier', 'Shiba']

    if (parseInt(req.body.points) < 50)
        req.body.dog = dogs[0];
    else if (parseInt(req.body.points) < 100)
        req.body.dog = dogs[1];
    else if (parseInt(req.body.points) < 120)
        req.body.dog = dogs[2];
    else if (parseInt(req.body.points) < 140)
        req.body.dog = dogs[3];
    else if (parseInt(req.body.points) < 160)
        req.body.dog = dogs[4];
    else if (parseInt(req.body.points) < 180)
        req.body.dog = dogs[5];
    else
        req.body.dog = dogs[6];


    next();
};