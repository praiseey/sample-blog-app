var models  = require('../models');
var express = require('express');
var router  = express.Router();


// Require our controllers.
var user_controller = require('../controllers/userController');

/// USER ROUTES ///

// GET USER home page.
//router.get('/', timesheet_controller.index); 

// GET request for creating a User. NOTE This must come before routes that display User (uses id).
router.get('user/create', user_controller.user_create_get);

// POST request for creating User.
router.post('/create', user_controller.user_create_post);

// GET request for one User.
router.get('/:id', user_controller.user_detail);

// GET request for list of all Users.
router.get('/users', user_controller.user_list);

// GET request to update User.
router.get('/:id/update', user_controller.user_update_get);

// POST request to update User.
router.post('/:id/update', user_controller.user_update_post);

// GET request to delete User.
router.get('/:id/delete', user_controller.user_delete_get);

// POST request to delete User.
router.post('/:id/delete', user_controller.user_delete_post);

// export all the router created
//module.exports = router;


router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function() {
    res.redirect('/');
  });
});


module.exports = router;
