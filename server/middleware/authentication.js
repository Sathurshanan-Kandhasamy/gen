import jwt from 'jsonwebtoken';
import asyncHandler from './asyncHandler.js';
import User from '../models/user.js';

// Protect middleware.
const protect = asyncHandler(async (request, response, next) => {
  // Read the jwt from the cookie.
  const token = request.cookies.jwt;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = await User.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      console.log(error);
      response.status(401);
      throw new Error('Not authorized, token failed.');
    }
  } else {
    response.status(401);
    throw new Error('Not authorized, no token.');
  }
});

export default protect;
