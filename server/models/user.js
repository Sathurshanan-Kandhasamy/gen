import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Following schema.
const followingSchema = mongoose.Schema(
  {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  {
    timestamps: true,
  }
);

// Follower schema.
const followerSchema = mongoose.Schema(
  {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User',
  },
  {
    timestamps: true,
  }
);

// User schema.
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
    },
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required',
    },
    password: {
      type: String,
      required: 'Password is required',
    },
    about: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      default: '',
    },
    following: [followingSchema],
    followers: [followerSchema],
  },
  {
    timestamps: true,
  }
);

userSchema.methods = {
  matchPassword: async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  },
};

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

export default mongoose.model('User', userSchema);
