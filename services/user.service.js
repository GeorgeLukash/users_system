//const users = require('../models/data');

module.exports = class UsersService {

    renderUsers(req, res, users) {
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
    }

    findOne(req, res, users) {
        if (req.params.id) {
            const user = users.find(user => user.id == req.params.id);
            res.render('users', {
                user
            });
        }
    }

    add(req, res, users) {
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
    }
};