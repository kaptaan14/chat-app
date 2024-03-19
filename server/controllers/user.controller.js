import User from "../models/user.model.js";

export const getAllUsers = async(req,res)=>{
    try {
        const loggedInUserId = req.user._id
    
        const allUsers = await User.find({_id: {$ne: loggedInUserId}});   //find all users except logged in user
        res.status(200).json(allUsers);

        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"});
    }
}