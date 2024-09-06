import userSession from "../models/userSessionModel.js";

//For the Admin to add particular session for the selected user.
export const addSession = async (req, res) => {
    try {
        //attendees, 
        const {user, startDate, endDate, type} = req.body;
        //|| !attendees
        if(!user || !startDate || !endDate || !type) {
            return res.status(400).json({message: "Missing Cedentials"});
        }

        const newSession = new userSession({user, 
            startDate, 
            endDate, 
            // attendees, 
            type,
        });

        await newSession.save();
        res.status(200).json(newSession);
    } catch (error) {
        console.log("Error in addSession controller", error.message);
        res.status(500).json({message: "Server error", error: error.message});
    }
}

//Get the details of all the session of current user to notify the user about the scheduled sessions.
export const getSessions = async (req, res) => {
    const userId = req.params.userId;
    try {
        const userSessions = await userSession.find({user : userId});

        if(!userSessions) {
            return res.status(404).json({message: "No sessions found for this user"});
        }

        res.status(200).json(userSessions);
    } catch (error) {
        console.log("Error in getSessions controller", error.message);
        response.status(500).json({message: "Server error", error: error.message});
    }
};

