import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pasword: {
    type: String,
    required: true,
    unique: true,
  },
});

export default userSchema;
