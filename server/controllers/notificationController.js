const NotificationSchema=require("../models/notifications");

module.exports={
    addNotification:async  (req, res,next) => 
    {
        try {

            const { title, message, priority, action,  data } = req.body;
            
        } catch (error)
        {
            return res.status(400).json({ success: false, message: error.message });

        }
    }
}