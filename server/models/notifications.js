const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotificationSchema = new Schema(
  {
    not_id: {
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

module.exports = mongoose.model("notifications", NotificationSchema);
