import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minLength: 2,
      maxLength: 20,
      trim: true,
    },

    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
      lowerCase: true,
      Match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "email is not valid"],
    },

    password: {
      type: String,
      required: [true, "password is required"],
      minLength: 6,
      maxLength: 20,
      select: false,
    },
  },
  { TimeRanges: true }
);

export default mongoose.model("User", UserSchema);
