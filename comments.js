// Create web server
var express = require('express');
var router = express.Router();

// Import comments controller
var commentsController = require('../controllers/commentsController');

// GET request for creating a comment. NOTE This must come before route that displays comment (uses id).
router.get('/comment/create', commentsController.comment_create_get);

// POST request for creating comment.
router.post('/comment/create', commentsController.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', commentsController.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', commentsController.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', commentsController.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', commentsController.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', commentsController.comment_detail);

// GET request for list of all comment items.
router.get('/comments', commentsController.comment_list);

module.exports = router;