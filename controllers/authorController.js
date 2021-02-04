var authorPraise = require('../models/author');
var models = require('../models');

// Display author create form on GET.
exports.author_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
        console.log("Author form renders successfully");
};

// // Handle author create on POST.
exports.author_create_post = function(req, res, next) {

     models.authorPraise.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            role: req.body.role,
            email: req.body.email,
            password: req.body.password
        }).then(function() {
            console.log("Author created successfully");
           // check if there was an error during author creation
            res.redirect('/blog/authors');
      });
};

// // Display author delete form on GET.
 exports.author_delete_get = function(req, res, next) {
//         // GET logic to delete a user here
            models.authorPraise.findById(
                req.params.authorPraise_id
                ).then(function(author){
                // renders user delete page
                res.render('pages/author_delete', { title: 'Delete Author', author: author,  layout: 'layouts/detail'});
            });

 };

// // Handle author delete on POST.
exports.author_delete_post = function(req, res, next) {
//         // POST logic to delete a user here
            models.authorPraise.destroy(
                {
                    where: {
                        id: req.params.userpraises_id
                    }
            }).then(function(user){
                console.log('Author deleted successfully');
                // redirect to users list
                res.redirect('/blog/authors');
            });

 };

// // Display author update form on GET.
 exports.author_update_get = function(req, res, next) {
//         // GET logic to update an author here
            console.log('ID is ' + req.params.id);
            models.authorPraise.findById(
                req.params.id
                ).then(function(author) {
                    // render authorr update form
                    res.render('forms/author_form', { title: 'Update Author', author: author, layout: 'layouts/detail'});
                    console.log("Author update get successful");
                });

 };

// // Handle post update on POST.
exports.author_update_post = function(req, res, next) {
        // POST logic to update an author here
            console.log('ID is ' + req.params.id);
            models.authorPraise.update(
                // values to update
                {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    username: req.body.username,
                    role: req.body.role,
                    email: req.body.email
                },
                { // Clause
                    where:
                    {
                        id: req.body.id
                    }
                }
                ).then(function(author) {
                    // redirect to users page after successful user update
                    res.redirect('/blog/authors');
                    console.log('Author updated successfully');
                });

 };

// // Display list of all users.
exports.author_list = function(req, res, next) {
//         // GET controller logic to list all authors
        models.authorPraise.findAll(
            ).then(function(authors) {
                // renders all authors list
                res.render('pages/author_list', { title: 'Author List',  authors: authors, layout: 'layouts/list'} );
                console.log("Authors list rendered successfully");
            });
         
 };

// // Display detail page for a specific author.
 exports.author_detail = function(req, res, next) {
//         // GET controller logic to display just one author
            models.authorPraise.findOne(
            ).then(function(author) {
                // renders an individual author details page
                res.render('pages/author_detail', { title: 'Author Details', author: author, layout: 'layouts/detail'} );
            });
//         
 };

 




// var Author = require('../models/author');

// // Display author create form on GET.
// exports.author_create_get = function(req, res, next) {
//         // create author GET controller logic here 
//         res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
// };

// // Handle author create on POST.
// exports.author_create_post = function(req, res, next) {
//      // create author POST controller logic here
//      // If an author gets created successfully, we just redirect to authors list
//      // no need to render a page
//      res.redirect("/authors");
// };

// // Display author delete form on GET.
// exports.author_delete_get = function(req, res, next) {
//         // GET logic to delete an author here
        
//         // renders author delete page
//         res.render('pages/author_delete', { title: 'Delete Author',  layout: 'layouts/detail'} );
// };

// // Handle author delete on POST.
// exports.author_delete_post = function(req, res, next) {
//         // POST logic to delete an author here
//         // If an author gets deleted successfully, we just redirect to authors list
//         // no need to render a page
//         res.redirect('/authors');
// };

// // Display author update form on GET.
// exports.author_update_get = function(req, res, next) {
//         // GET logic to update an author here
        
//         // renders author form
//         res.render('forms/author_form', { title: 'Update Author',  layout: 'layouts/detail'});
// };

// // Handle post update on POST.
// exports.author_update_post = function(req, res, next) {
//         // POST logic to update an author here
//         // If an author gets updated successfully, we just redirect to authors list
//         // no need to render a page
//         res.redirect("/authors");
// };

// // Display list of all authors.
// exports.author_list = function(req, res, next) {
//         // GET controller logic to list all authors
        
//         // renders all authors list
//         res.render('pages/author_list', { title: 'Author List',  layout: 'layouts/list'} );
// };

// // Display detail page for a specific author.
// exports.author_detail = function(req, res, next) {
//         // GET controller logic to display just one author
        
//         // renders an individual author details page
//         res.render('pages/author_detail', { title: 'Author Details',  layout: 'layouts/detail'} );
// };

 