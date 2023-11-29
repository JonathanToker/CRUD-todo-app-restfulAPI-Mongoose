import mongoose, { Schema } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);
const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);
export default Todo;

// module.exports = mongoose.models.User;
// || mongoose.model("User", userSchema)
