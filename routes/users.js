'use strict';
var express = require('express');
var router = express.Router();
var UserStore = require('../store/user');

/* GET users listing. */
router.get('/', function (req, res) {
    res.send(UserStore.getUsers());
});

router.get('/:userId', (req, res) => {
    const user = UserStore.getUserById(req.params.userId);
    if (!user) {
        return res.status(404).send({
            message: 'User not found'
        });
    }
    return res.send(user);
});

router.post('/', (req, res) => {
    const data = req.body;
    console.log('Creating user');
    console.log(data);
    UserStore.add(data);
    return res.status(200).send({
        'message': 'User created'
    });
});

router.put('/:userId', (req, res) => {
    const data = req.body;
    data['id'] = req.params.userId;

    UserStore.update(data);
    return res.status(200).send({
        message: 'updated'
    });
});

router.delete('/:userId', (req, res) => {
    const deleted = UserStore.delete(req.params.userId);
    return res.status(deleted ? 200 : 404).send({
        mesage: deleted ? 'deleted' : 'Not found'
    });
});

module.exports = router;
