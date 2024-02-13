import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
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
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  about: {
    type: String,
    trim: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
});

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
