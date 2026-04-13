import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  payment: {
    type: String,
  },
  review: {
    type: String,
  },
  like: {
    type: Number,
  },
  unlike: {
    type: Number,
  },
  role: {
    type: String,
  },
  otp: {
    type: String,
  },
  profileImg:{
    type:String
  }
});

const User = mongoose.model("User", userSchema);
export default User;
