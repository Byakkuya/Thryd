import express  from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import useRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
dotenv.config();

connectDB();
const app = new express();

const PORT = process.env.PORT || 5000;


//parsing json data in the req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//routes
app.use("/api/users",useRoutes);
app.use("/api/posts",postRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});