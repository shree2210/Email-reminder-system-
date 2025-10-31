import mongoose from "mongoose";

// 🧩 Define Reminder Schema (structure of your MongoDB collection)
const reminderSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    trim: true 
  },
  subject: { 
    type: String, 
    required: true, 
    trim: true 
  },
  message: { 
    type: String, 
    required: true, 
    trim: true 
  },
  date: { 
    type: Date, 
    required: true 
  },
  sent: { 
    type: Boolean, 
    default: false 
  }
}, { 
  timestamps: true   // automatically adds createdAt and updatedAt
});

// 🧱 Export the model so it can be used in server.js
export default mongoose.model("Reminder", reminderSchema);
