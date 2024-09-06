import User from "../models/userModel.js";


//Route to login or register user.
export const emailLogin = async (req, res) => {
    const {email} = req.body;
    try {
        let user = await User.findOne({email});

        if(!user) {
            user = new User({email});
            await user.save();
        }

        res.status(200).json({message: "User logged in successfully", user});

    } catch (error) {
        console.log("Error in email login controller", error.message);
        res.status(500).json({message: "Server error", error: error.message});
    }
}

//for Admin only -> to get all the users.
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in get all users", error.message);
        res.status(500).json({message: "Server error", error: error.message});
    }
}

