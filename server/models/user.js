const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlegth: 5,
      select: false,
    },
    
    contactNumber: {
      type: Number,
    },
    batch_year: {
      type: Date,
    },
    branch: {
      type: String,
    },
    reg_id: {
      type: Number,
    },
    employment_type: {
      type: Number,
    },
    current_company: {
      type: String,
    },
    post: {
      type: String,
    },
    address: {
        type: String,
      }
  },
  { strict: false }
);

module.exports = mongoose.model("user", UserSchema);
