const Event=require("../models/event");

module.exports={
    addEvent: async (req, res,next) => 
    {
        try {

            const { title, message, priority, action,  data,event_date,event_time } = req.body;
            if(!title || !message || !priority || !action || !data || !event_date || !event_time)
            {
                return res.status(400).json({
                  success: false,
                  message: "Probably you have missed certain fields",
                });
              }

              let ev_id=9999;
              const lastEvent = await Event.find().sort({date:-1}).limit(1);
               console.log(lastEvent);
              if(!lastEvent)
              ev_id=9999
              else
              ev_id=lastEvent[0].event_id+7;

              var mydate = new Date();
            //   event_date=new Date(event_date);
            //   event_time= new Date(event_time);

              const newEvent = await new Event({
                event_id: ev_id,
                title,
                message,
                timestamp:mydate,
                event_date,
                event_time,
                priority,
                action,
                data
                
              });
              await newEvent.save();
              return res.status(200).json({
                success: true,
                message: "Event registerd successfully",
                response: newEvent
              });


            
        } catch (error)
        {
            return res.status(400).json({ success: false, message: error.message });

        }
    },

    getEvent: async( req,res, next)=>{
        try{


            const query = {};
            if (req.query.title)
              query.title = { $regex: req.query.title, $options: "i" };
      
              if (req.query.message)
              query.message = { $regex: req.query.message, $options: "i" };
      
              if (req.query.action)
              query.skills = { $regex: req.query.skills, $options: "i" };
      
             
              
            const events = await Event.find(query).sort({
              event_date: -1,
            });
            return res.status(200).json({
              success: true,
              message: "Events retrieved successfully",
              events: events,
            });


        }catch(error)
        {
            return res.status(400).json({ success: false, message: error.message });
        }

    }
}