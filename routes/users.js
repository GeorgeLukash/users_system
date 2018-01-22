const router = require('express').Router();
const bodyParser = require('body-parser');

let users = require('../models/data');

var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/users', (req, res) => {
    if (req.query.delete) {
        users = users.filter((el) => {
            return el.id !== req.query.delete;
        });
        res.render('users', {
            users
        });
    } else {
        res.render('users', {
            users
        });
    }
});

router.get('/users/:id', (req, res) => {
    if (req.params.id) {
        const user = users.find(user => user.id == req.params.id);
        res.render('users', {
            user
        });
    }
});

router.post('/users', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    
    let user = req.body;
    let id = [];
    let max;

    for (let i = 0; i < users.length; i++) {
        id.push(+users[i].id);
    }
    max = id[0];
    for (let i = 0; i < id.length; i++) {
        if (max < id[i]) {
            max = id[i];
        }
    }
    user.id = (max + 1).toString();
    users.push(user);
    res.render('users', {
        users
    });
});

router.post('/users/edit', urlencodedParser, (req, res) => {
    if (!req.body) return res.sendStatus(400);

    if (req.body.id) {
        const user = users.find(user => user.id == req.body.id);
        user.name = req.body.name;
        user.lastname = req.body.lastname;
        user.email = req.body.email;
        user.age = req.body.age;
        res.render('users', {
            users
        });
    }
});


module.exports = router;