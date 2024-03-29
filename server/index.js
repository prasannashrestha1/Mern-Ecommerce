import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";

//configure the dotenv file
dotenv.config();

//connect with database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb succcessfully ${conn.connection.host}`);
  } catch (error) {
    console.log(`Erorr in mongodb ${error}`);
  }
};
connectDB();

const app = express();
//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./clients/build")));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./clients/build/index.html"));
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Port running at ${PORT}`);
});
