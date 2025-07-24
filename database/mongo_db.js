import mongoose from "mongoose";
import { NODE_ENV, DB_URL } from "../config/env.js";

if (!DB_URL) {
  throw new Error("DB_URL is not defined");
}

const DB_connection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DB connected successfully in " + NODE_ENV);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default DB_connection;
