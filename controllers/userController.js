var User = require('../models/user');

// Display user create form on GET.
exports.user_create_get = function(req, res, next) {
        // create user GET controller logic here 
        res.render('forms/user_form', { title: 'Create User',  layout: 'layouts/detail'});
};

// Handle user create on POST.
exports.user_create_post = function(req, res, next) {
     // create author POST controller logic here
     // If an author gets created successfully, we just redirect to authors list
     // no need to render a page
     res.redirect("/users");
};

// Display user delete form on GET.
exports.user_delete_get = function(req, res, next) {
        // GET logic to delete a user here
        
        // renders user delete page
        res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
};

// Handle user delete on POST.
exports.user_delete_post = function(req, res, next) {
        // POST logic to delete an author here
        // If a user gets deleted successfully, we just redirect to users list
        // no need to render a page
        res.redirect('/users');
};

// Display user update form on GET.
exports.user_update_get = function(req, res, next) {
        // GET logic to update a user here
        
        // renders user form
        res.render('forms/user_form', { title: 'Update User',  layout: 'layouts/detail'});
};

// Handle post update on POST.
exports.user_update_post = function(req, res, next) {
        // POST logic to update a user here
        // If a user gets updated successfully, we just redirect to users list
        // no need to render a page
        res.redirect("/users");
};

// Display list of all users.
exports.user_list = function(req, res, next) {
        // GET controller logic to list all users
        
        // renders all users list
        res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list'} );
};

// Display detail page for a specific user.
exports.user_detail = function(req, res, next) {
        // GET controller logic to display just one user
        
        // renders an individual user details page
        res.render('pages/user_detail', { title: 'User Details',  layout: 'layouts/detail'} );
};

 