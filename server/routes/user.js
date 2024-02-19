import express from 'express';
const router = express.Router();
import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  getUserById,
  createUserFollower,
} from '../controllers/user.js';
import protect from '../middleware/authentication.js';
import checkObjectId from '../middleware/checkObjectId.js';

// Register user.
router.post('/register', registerUser);

// Logout user.
router.post('/logout', logoutUser);

// Login user.
router.post('/login', loginUser);

// Get, update, and delete user profile.
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteUserProfile);

//  Get an user by id.
router.get('/:id', protect, checkObjectId, getUserById);

// Create an user follower.
router.put(':/id/followers', protect, checkObjectId, createUserFollower);

export default router;
