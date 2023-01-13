const mongoose = require("mongoose");
const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    event_id: {
        type:Number,
        required:true
    },
    title: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      timestamp: {
        type: Date,
        default: Date.now
      },
      event_date: {
        type: Date,
        required: true
      },
      event_time: {
        type: Date,
        required: true
      },
      priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
      },
      action: {
        type: String
      },
     
      data: {
        type: Schema.Types.Mixed
      }
  },
  { strict: false }
);

module.exports = mongoose.model("Event", EventSchema);
