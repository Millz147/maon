import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  dName: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
