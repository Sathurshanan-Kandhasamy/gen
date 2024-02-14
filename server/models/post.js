import mongoose from 'mongoose';

// Like schema.
const likeSchema = mongoose.Schema(
  {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  {
    timestamps: true,
  }
);

// Comment schema.
const commentSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: 'Text is required',
    },
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
    likes: [likeSchema],
    comments: [commentSchema],
    postedBy: { type: mongoose.Schema.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Post', postSchema);
