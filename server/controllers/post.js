import asyncHandler from '../middleware/asyncHandler.js';
import Post from '../models/post.js';

// Description:  Get all the posts.
// Route:        GET /api/posts
// Access:       Public
export const getPosts = asyncHandler(async (request, response) => {
  const posts = await Post.find({});
  response.status(200).json(posts);
});

// Description:  Get a post by id.
// Route:        GET /api/posts/:id
// Access:       Public
export const getPostById = asyncHandler(async (request, response) => {
  const post = await Post.findById(request.params.id);
  if (post) {
    response.status(200).json(post);
  } else {
    response.status(404);
    throw new Error('Resource not found.');
  }
});

// Description:  Create a post.
// Route:        POST /api/posts
// Access:       Private
export const createProduct = asyncHandler(async (request, response) => {
  const { text, photo } = request.body;
  const post = new Post({
    text,
    photo,
    postedBy: request.user._id,
  });
  const createdPost = await post.save();
  response.status(201).json(createdPost);
});

// Description:  Update a post.
// Route:        PUT /api/post/:id
// Access:       Private
export const updatePost = asyncHandler(async (request, response) => {
  const { text, photo } = request.body;
  const post = await Post.findById(request.params.id);
  if (post) {
    post.text = text;
    post.photo = photo;

    const updatedPost = await post.save();
    response.status(200).json(updatedPost);
  } else {
    response.status(404);
    throw new Error('Resource not found.');
  }
});

// Description:  Delete a post.
// Route:        DELETE /api/post/:id
// Access:       Private
export const deleteProduct = asyncHandler(async (request, response) => {
  const post = await Post.findById(request.params.id);
  if (post) {
    await Post.deleteOne({ _id: post._id });
    response.status(200).json({ message: 'Post deleted.' });
  } else {
    response.status(404);
    throw new Error('Resource not found.');
  }
});

// Description:  Create a comment.
// Route:        POST /api/post/:id/comment
// Access:       Private
export const createComment = asyncHandler(async (request, response) => {
  const post = await Post.findById(request.params.id);
  if (post) {
    const comment = {
      text: request.body.text,
      postedBy: request.user._id,
    };
    post.comments.push(comment);
    await post.save();
    response.status(201).json({ message: 'Comment added.' });
  } else {
    response.status(404);
    throw new Error('Resource not found.');
  }
});

// Description:  Create or remove a like.
// Route:        POST /api/post/:id/like
// Access:       Private
export const createLike = asyncHandler(async (request, response) => {
  const post = await Post.findById(request.params.id);
  if (post) {
    const alreadyLiked = post.likes.find(
      (id) => id.toString() === request.user._id.toString()
    );
    if (alreadyLiked) {
      post.likes = post.likes.filter(
        (id) => id.toString() !== request.user._id.toString()
      );
      await post.save();
      response.status(200).json({ message: 'Like removed.' });
    }

    post.likes.push(request.user._id);
    await post.save();
    response.status(201).json({ message: 'Like added.' });
  } else {
    response.status(404);
    throw new Error('Resource not found.');
  }
});