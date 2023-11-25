import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/helpers/TokenANDcookie.js";
import mongoose from "mongoose";
//signup
export const signupUsers = async (req, res) => {
    try {
        const { name, email,username ,password } = req.body;
        const user = await User.findOne({$or: [{email}, {username}]});

        if(user) {
            res.status(400).json({message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({name, email, username, password: hashedPassword});
        await newUser.save();

        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
            });
            
        } else {
            res.status(400).json({message: "Invalid user data"});
        }

        

        
    } catch (error) {
        res.status(500).json({message: error.message});
    }


};


//login
export const loginUsers = async (req, res) => {
    try{
        const { username, password } = req.body;
        const user = await User.findOne({username});
        const validPassword = await bcrypt.compare(password, user?.password || "");

        if (!user || !validPassword) return res.status(400).json({message: "Invalid username or password"});
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            username: user.username,
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


//logout
export const logoutUsers = async (req, res) => {
    try {
        res.clearCookie("jwt","",{maxpAge: 1});
        res.status(200).json({message: "Logged out successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//follow and unfollow
export const followUnFollowUser = async (req, res) => {
	try {
		const { id } = req.params;
		const userToModify = await User.findById(id);
		const currentUser = await User.findById(req.user._id);

		if (id === req.user._id.toString())
			return res.status(400).json({ error: "You cannot follow/unfollow yourself" });

		if (!userToModify || !currentUser) return res.status(400).json({ error: "User not found" });

		const isFollowing = currentUser.following.includes(id);

		if (isFollowing) {
			// Unfollow user
			await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
			res.status(200).json({ message: "User unfollowed successfully" });
		} else {
			// Follow user
			await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
			await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
			res.status(200).json({ message: "User followed successfully" });
		}
	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log("Error in followUnFollowUser: ", err.message);
	}
};

//update user
export const updateUser = async (req, res) => {
	const { name, email, username, password, bio } = req.body;
	let { profilePic } = req.body;

	const userId = req.user._id;
	try {
		let user = await User.findById(userId);
		if (!user) return res.status(400).json({ error: "User not found" });

		if (req.params.id !== userId.toString())
			return res.status(400).json({ error: "You cannot update other user's profile" });

		if (password) {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			user.password = hashedPassword;
		}

		if (profilePic) {
			if (user.profilePic) {
				await cloudinary.uploader.destroy(user.profilePic.split("/").pop().split(".")[0]);
			}

			const uploadedResponse = await cloudinary.uploader.upload(profilePic);
			profilePic = uploadedResponse.secure_url;
		}

		user.name = name || user.name;
		user.email = email || user.email;
		user.username = username || user.username;
		user.profilePic = profilePic || user.profilePic;
		user.bio = bio || user.bio;

		user = await user.save();
		res.status(200).json({message: "User updated successfully", user});
		
	} catch (err) {
		res.status(500).json({ error: err.message });
		console.log("Error in updateUser: ", err.message);
	}

	
};

//get user profile
export const getUserProfile = async (req, res) => {
    // We will fetch user profile either with username or userId
    // query is either username or userId
    const { query } = req.params;

    try {
        let user;

        // Check if the query is a valid ObjectId (userId)
        if (mongoose.Types.ObjectId.isValid(query)) {
            user = await User.findOne({ _id: query });
        } else {
            user = await User.findOne({ username: query });
        }

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Select fields to exclude from the response
        const filteredUser = {
            _id: user._id,
            username: user.username,
            // Add more fields you want to include in the response here
            // Exclude sensitive fields like password and updatedAt
        };

        res.status(200).json(filteredUser);
    } catch (err) {
        console.error("Error in getUserProfile:", err);
        res.status(500).json({ error: "Server error" });
    }
};
