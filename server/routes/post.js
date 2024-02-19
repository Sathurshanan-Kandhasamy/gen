import express from 'express';
const router = express.Router();
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  createPostComment,
  createPostLike,
} from '../controllers/post.js';
import protect from '../middleware/authentication.js';
import checkObjectId from '../middleware/checkObjectId.js';

// Get all the posts.
router.route('/').get(getPosts).post(protect, createPost);

// Get, update, and delete a post by id.
router
  .route('/:id')
  .get(checkObjectId, getPostById)
  .put(protect, checkObjectId, updatePost)
  .delete(protect, checkObjectId, deletePost);

// Create a post comment
router.post('/:id/comments', protect, checkObjectId, createPostComment);

// Create a post like.
router.post('/:id/likes', protect, checkObjectId, createPostLike);

export default router;
