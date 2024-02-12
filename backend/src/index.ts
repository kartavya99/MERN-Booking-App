import express, { Request, Response } from "express";
import cores from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";

mongoose.connect(process.env.MONGODB_URL as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cores());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
