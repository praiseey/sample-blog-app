var userpraise = require('../models/user');
var models = require('../models');

// Display author create form on GET.
exports.user_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
        console.log("User form renders successfully");
};

// // Handle author create on POST.
exports.user_create_post = function(req, res, next) {

     models.userpraises.create({
            full_name: req.body.full_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            console.log("User created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/users');
      });
};

// // Display user delete form on GET.
 exports.user_delete_get = function(req, res, next) {
//         // GET logic to delete a user here
            models.userpraises.findById(
                req.params.userpraises_id
                ).then(function(user){
                // renders user delete page
                res.render('pages/user_delete', { title: 'Delete User', user: user,  layout: 'layouts/detail'});
            });

 };

// // Handle user delete on POST.
exports.user_delete_post = function(req, res, next) {
//         // POST logic to delete a user here
            models.userpraises.destroy(
                {
                    where: {
                        id: req.params.userpraises_id
                    }
            }).then(function(user){
                console.log('User deleted successfully');
                // redirect to users list
                res.redirect('/blog/users');
            });
//         // If an author gets deleted successfully, we just redirect to authors list
//         // no need to render a page
//         res.redirect('/authors');
 };

// // Display user update form on GET.
 exports.user_update_get = function(req, res, next) {
//         // GET logic to update an author here
            console.log('ID is ' + req.params.id);
            models.userpraises.findById(
                req.params.id
                ).then(function(user) {
                    // render user update form
                    res.render('forms/user_form', { title: 'Update Update', user: user, layout: 'layouts/detail'});
                    console.log("User update get successful");
                });

 };

// // Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update an author here
            console.log('ID is ' + req.params.id);
            models.userpraises.update(
                // values to update
                {
                    full_name: req.body.full_name,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password
                },
                { // Clause
                    where:
                    {
                        id: req.body.id
                    }
                }
                ).then(function(user) {
                    // redirect to users page after successful user update
                    res.redirect('/blog/users');
                    console.log('User updated successfully');
                });

 };

// // Display list of all users.
exports.user_list = function(req, res, next) {
//         // GET controller logic to list all authors
        models.userpraises.findAll(
            ).then(function(users) {
                // renders all authors list
                res.render('pages/user_list', { title: 'User List',  users: users, layout: 'layouts/list'} );
                console.log("Users list rendered successfully");
            });
         
 };

// // Display detail page for a specific author.
// exports.author_detail = function(req, res, next) {
//         // GET controller logic to display just one author
        
//         // renders an individual author details page
//         res.render('pages/author_detail', { title: 'Author Details',  layout: 'layouts/detail'} );
// };

 