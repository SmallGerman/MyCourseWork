const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
    Service.find()
        .then(service => res.json(service))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;

    const newTitle = new Service({
        title
    });

    newTitle.save()
        .then(() => res.json('Service added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
