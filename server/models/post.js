import mongoose from 'mongoose';

// Comment schema.
const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Text is required',
    },
    likes: [likeSchema],
    postedBy: { type: mongoose.Schema.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

// Post schema.
const postSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Text is required',
    },
    photo: {
      type: String,
      default: '',
    },
    likes: [
      {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'User',
      },
    ],
    comments: [commentSchema],
    postedBy: { type: mongoose.Schema.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
