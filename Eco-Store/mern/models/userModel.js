import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true  },
    email: { type: String, required: true, unique: true, lowerCase: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    // profilePicture:{ type: String}
  },
  {
    //options
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
