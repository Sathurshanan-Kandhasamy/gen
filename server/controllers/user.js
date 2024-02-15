import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/user.js';
import Post from '../models/post.js';
import generateToken from '../utilities/generateToken.js';

// Description:  Login user and get token.
// Route:        POST /api/users/login
// Access:       Public
export const loginUser = asyncHandler(async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ email }).select('-password');
  if (user && (await user.matchPassword(password))) {
    generateToken(response, user._id);
    response.status(200).json(user);
  } else {
    response.status(401);
    throw new Error('Invalid email or password.');
  }
});

// Description:  Register user.
// Route:        POST /api/users/register
// Access:       Public
export const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    response.status(400);
    throw new Error('User already exists.');
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });
  if (newUser) {
    generateToken(response, newUser._id);
    response.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      created: newUser.created,
      about: newUser.about,
    });
  } else {
    response.status(400);
    throw new Error('Invalid user data.');
  }
});

// Description:  Logout user and clear cookie.
// Route:        POST /api/users/logout
// Access:       Private
export const logoutUser = asyncHandler(async (request, response) => {
  response.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  response.status(200).json({ message: 'Logged out successfully.' });
});

// Description:  Get user profile.
// Route:        POST /api/users/profile
// Access:       Private
export const getUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id).select('-password');
  if (user) {
    response.status(200).json(user);
  } else {
    response.status(404);
    throw new Error('User not found.');
  }
});

// Description:  Update user profile.
// Route:        PUT /api/users/profile
// Access:       Private
export const updateUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);
  if (user) {
    user.name = request.body.name || user.name;
    user.email = request.body.email || user.email;
    if (request.body.password) {
      user.password = request.body.password;
    }
    user.about = req.body.about || user.about;
    user.photo = req.body.photo || user.photo;
    const updatedUser = await user.save();
    response.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      about: updatedUser.about,
      photo: updatedUser.photo,
    });
  } else {
    response.status(404);
    throw new Error('User not found.');
  }
});

// Description:  Delete user profile.
// Route:        DELETE /api/users/profile
// Access:       Private
export const deleteUserProfile = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);
  if (user) {
    await User.deleteOne({ _id: user._id });
    await Post.deleteMany({ _id: user._id });
    await response.status(200).json({ message: 'User deleted successfully.' });
  } else {
    response.status(404);
    throw new Error('User not found');
  }
});

// Description:  Get an user by id.
// Route:        GET /api/users/:id
// Access:       Private
export const getUserById = asyncHandler(async (request, response) => {
  const user = await User.findById(request.params.id).select('-password');
  if (user) {
    response.status(200).json(user);
  } else {
    response.status(404);
    throw new Error('User not found.');
  }
});

// Description:  Follow or unfollow an user.
// Route:        PUT /api/users/:id
// Access:       Private
export const followUnfollowUser = asyncHandler(async (request, response) => {
  const user = await User.findById(request.user._id);
  const followUser = await User.findById(request.params.id);

  if (user && followUser) {
    if (user.following.includes(request.params.id)) {
      user.following = user.following.filter((id) => id !== request.params.id);
      followUser.followers = followUser.filter(
        (id) => id !== request.params.id
      );
    } else {
      user.following.push(request.params.id);
      followUser.followers.push(request.user._id);
    }
    await user.save();
    await followUser.save();

    response.status(200).json(user);
  } else {
    response.status(404);
    throw new Error('User not found');
  }
});
