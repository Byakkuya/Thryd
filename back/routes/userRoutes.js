import express  from "express";
import { signupUsers,loginUsers, logoutUsers,followUnFollowUser, updateUser, getUserProfile } from "../controllers/userController.js"; 
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

//user routes
router.post("/update/:id",protectRoute,updateUser);
router.post("/signup", signupUsers);
router.post("/login", loginUsers);
router.post("/logout", logoutUsers);
router.post("/follow/:id",protectRoute,followUnFollowUser);

//post routes







router.get("/profile/:id",getUserProfile);

export default router;