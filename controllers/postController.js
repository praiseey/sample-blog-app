// var Post = require('../models/post');
var models = require('../models');

// Display post create form on GET.
// exports.post_create_get = function(req, res, next) {
//         // renders a post form
//         res.render('forms/post_form', { title: 'Create Post', layout: 'layouts/detail'});
//         console.log("Post form renders successfully");
// };

// Handle post create on POST.
exports.post_create_post = function(req, res, next) {

      models.Postpraise.create({
            post_title: req.body.post_title,
            post_body: req.body.post_body
        }).then(post => {
            res.json({
                success: 'Post created successfully',
                post: post
            });
        }).catch(err => {
            console.log('There was an error: ' + err);
            res.status(404).send(err);
        });
};

// Display list of all posts.
exports.post_list = function(req, res, next) {
        // controller logic to display all posts
        models.Postpraise.findAll(
            ).then(posts => {
            res.json({
                success: 'All posts rendered successfully',
                posts: posts
            });
        }).catch(err => {
            console.log('There was an error: ' + err);
            res.status(404).send(err);
        });
        
};

// Display detail page for a specific post.
exports.post_detail = function(req, res, next) {
        // find a single post 
        models.Postpraise.findById(
            req.params.postpraise_id
        ).then(post => {
            res.json({
                success: 'Post detail rendered successfully',
                post: post
            });
        }).catch(err => {
            console.log('There was an error: ' + err);
            res.status(404).send(err);
        });
};

// Handle post update on GET
exports.post_update_get = function(req, res, next) {
    
    console.log("ID is " + req.params.postpraise_id);
    models.Postpraise.findById(
        req.params.postpraise_id
    ).then(post => {
        res.json({
            success: 'Post updated successfully'
        });
    }).catch(err => {
        console.log('There was an error: ' + err);
        res.status(404).send(err);
    });
};

// Handle post update on POST.
exports.post_update_post = function(req, res, next) {
    
        console.log("ID is " + req.params.postpraise_id);
        models.Postpraise.update(
        // Values to update
            {
                post_title: req.body.post_title,
                post_body: req.body.post_body
            },
          { // Clause
                where: 
                {
                    id: req.params.postpraise_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(post => {
             res.json({
                 success: 'Post updated successfully',
                 post: post
             });
               
        }).catch(err => {
        console.log('There was an error: ' + err);
        res.status(404).send(err);
    });
};


// Handle post delete on GET.
exports.post_delete_get = function(req, res, next) {
    models.Postpraise.destroy({
        where: {
            id: req.params.post_praise_id
        }
    }).then(post => {
        res.json({
            success: 'Post deleted successfully'
        });
    }).catch(err => {
        console.log('There was an error: ' + err);
        res.status(404).send(err);
    });
};

// Handle post delete on POST.
exports.post_delete_post = function(req, res, next) {
          models.Postpraise.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.postpraise_id
            }
          }).then(post => {
              res.json({
                  success: 'Post deleted successfully',
        
              });
        }).catch(err => {
        console.log('There was an error: ' + err);
        res.status(404).send(err);
    });

 };

// // Display post delete form on GET.
// exports.post_delete_get = function(req, res, next) {
//       models.Post.destroy({
//             // find the post_id to delete from database
//             where: {
//               id: req.params.post_id
//             }
//           }).then(function() {
//           // If an post gets deleted successfully, we just redirect to posts list
//           // no need to render a page
//             res.redirect('/blog/posts');
//             console.log("Post deleted successfully");
//           });
// };

// // Handle post delete on POST.
// exports.post_delete_post = function(req, res, next) {
//           models.Post.destroy({
//             // find the post_id to delete from database
//             where: {
//               id: req.params.post_id
//             }
//           }).then(function() {
//           // If an post gets deleted successfully, we just redirect to posts list
//           // no need to render a page
//             res.redirect('/blog/posts');
//             console.log("Post deleted successfully");
//           });

//  };

// // Display post update form on GET.
// exports.post_update_get = function(req, res, next) {
//         // Find the post you want to update
//         console.log("ID is " + req.params.post_id);
//         models.Post.findById(
//                 req.params.post_id
//         ).then(function(post) {
//               // renders a post form
//               res.render('forms/post_form', { title: 'Update Post', post: post, layout: 'layouts/detail'});
//               console.log("Post update get successful");
//           });
        
// };

// // Handle post update on POST.
// exports.post_update_post = function(req, res, next) {
//         console.log("ID is " + req.params.post_id);
//         models.Post.update(
//         // Values to update
//             {
//                 post_title: req.body.post_title,
//                 post_body: req.body.post_body
//             },
//           { // Clause
//                 where: 
//                 {
//                     id: req.params.post_id
//                 }
//             }
//         //   returning: true, where: {id: req.params.post_id} 
//          ).then(function() { 
//                 // If an post gets updated successfully, we just redirect to posts list
//                 // no need to render a page
//                 res.redirect("/blog/posts");  
//                 console.log("Post updated successfully");
//           });
// };

// // Display detail page for a specific post.
// exports.post_detail = function(req, res, next) {
//         // find a post by the primary key Pk
//         models.Post.findByPk(
//                 req.params.post_id
//         ).then(function(post) {
//         // renders an inividual post details page
//         res.render('pages/post_detail', { title: 'Post Details', post: post, layout: 'layouts/detail'} );
//         console.log("Post deteials renders successfully");
//         });
// };


// // Display list of all posts.
// exports.post_list = function(req, res, next) {
//         // controller logic to display all posts
//         models.Post.findAll(
//         ).then(function(posts) {
//         // renders a post list page
//         console.log("rendering post list");
//         res.render('pages/post_list', { title: 'Post List', posts: posts, layout: 'layouts/list'} );
//         console.log("Posts list renders successfully");
//         });
        
// };

// This is the blog homepage.
exports.index = function(req, res) {

      // find the count of posts in database
      models.Post.findAndCountAll(
      ).then(function(postCount) {
          
       
        // find the count of authors in database
 
        // find the count of comments in database
 
        // find the count of categories in database
 
        res.render('pages/index', {title: 'Homepage', postCount: postCount, layout: 'layouts/main'});
        
        // res.render('pages/index_list_sample', { title: 'Post Details', layout: 'layouts/list'});
        // res.render('pages/index_detail_sample', { page: 'Home' , title: 'Post Details', layout: 'layouts/detail'});

      })
    
    
    };


 