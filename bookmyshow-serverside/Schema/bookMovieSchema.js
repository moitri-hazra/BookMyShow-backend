const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the bookMovieSchema using the Mongoose Schema constructor
const bookMovieSchema = new Schema({
    movie: { type: String, default: "" }, 
    slot: { type: String, default: "" }, // Field to store the slot 
    seats: { // Field to store seat information 
        A1: { type: Number, default: 0 }, 
        A2: { type: Number, default: 0 }, 
        A3: { type: Number, default: 0 }, 
        A4: { type: Number, default: 0 }, 
        D1: { type: Number, default: 0 }, 
        D2: { type: Number, default: 0 }  
    }
}, { timestamps: true }); // The timestamps option adds createdAt and updatedAt fields to track document creation and modification times

// Create and export the BookMovieTicket model using the bookMovieSchema
module.exports = mongoose.model('bookmovieticket', bookMovieSchema);
