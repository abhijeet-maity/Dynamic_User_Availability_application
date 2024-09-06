import userAvailability from "../models/userAvailabilityModel.js";

//Rote to add the availability details of the user to database.
export const addingUserAvailability = async (req, res) => {
    const {user, startDate, endDate, duration } = req.body;
    try {
        const newAvailability = new userAvailability({user, 
            startDate, 
            endDate, 
            duration,
        });

        await newAvailability.save();
        res.status(200).json(newAvailability);
    } catch (error) {
        console.log("Error in adding userAvailability controller", error.message);
        res.status(500).json({message : error.message});
    }
}
  
//Route to get the availability details of the current user or any specific user.
export const getUserAvailability = async (req, res) => {
    const user = req.params.userId;
    try {
        const userAvailableDetail = await userAvailability.find({user : user});

        if(!userAvailableDetail) {
           return res.status(404).json({message : "User availability not found"});
        }

        res.status(200).json(userAvailableDetail);

    } catch (error) {
        console.log("Error in getUserAvailability controller", error.message);
        res.status(500).json({message: error.message});
    }
}

//Route to delete the availability of user by user only.
export const deleteUserAvailability = async (req, res) => {
    
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const deletedUser = await userAvailability.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found or already deleted' });
        }
        res.status(200).json({ message: 'User availability deleted successfully', deletedUser });
    } catch (error) {
        console.log("Error in delete user Availability", error.message);
        res.status(500).json({message: "Server error", error: error.message});
    }
}