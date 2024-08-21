import mongoose, { Schema, Document } from "mongoose";
import { email_validator } from "../constants/regex_constants";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  isCreator: boolean;
  isVerified: boolean;
  verifyCode: string;
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true, // remove extra spaces by users
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    unique: true,
    match: [email_validator, "Please provide valid email"],
  },

  password: {
    type: String,
    required: [true, "Passwor is required"],
  },

  isCreator: {
    type: Boolean,
    required: true,
    default: false,
  },

  isVerified: {
    type: Boolean,
    required: true,
    default: false,
  },

  verifyCode: {
    type: String,
    required: false,
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
