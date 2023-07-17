import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowerCase: true,
      validate: {
        validator: function (emailUsed) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailUsed);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },
    password: { type: String, required: true ,minLength: 6},
    isAdmin: { type: Boolean, default: true, required: true },
    // profilePicture:{ type: String}
  },
  {
    //options
    timestamps: true,
  }
);

const Admin = mongoose.model('Admin', adminSchema);
export default Admin;
