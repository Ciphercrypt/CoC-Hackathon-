const mongoose = require("mongoose");
const { Schema } = mongoose;

const PhotoPostSchema = new Schema({
  caption: {
    type: String,
  },
  photo: {
    type: String,
    required: true,
  },
  posted_by: {
    type: String,
    required: true,
  },
  posted_by_name: {
    type: String,
   
  },
  posted_by_batch: {
    type: String,
   
  },
  batch:{
    type:Number,
  },
  branch:{
    type:String,
  },
  event_desc:{
    type:String,
  },
  posted_date: {
    type: Date,
    default: Date.now,
  }
  
 
});

module.exports = mongoose.model("PhotoPost", PhotoPostSchema);
