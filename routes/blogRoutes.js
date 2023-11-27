const express = require('express');
const blogController = require('../controller/blogControllers');

const router = express.Router();

//home route
router.get('/', blogController.blog_index);

//create page route
router.get('/create', blogController.blog_create_get);

//adding new blog
router.post('/', blogController.blog_create_post);

//detail request
router.get('/:id', blogController.blog_details);

//delete request
router.delete('/:id', blogController.blog_delete);

module.exports = router;
