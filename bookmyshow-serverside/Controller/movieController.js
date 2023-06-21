const BookingModel = require("../Schema/bookMovieSchema");

// Function to store booking details
const storeBooking = async (req, res) => {
  try {
    const { movie, slot, seats } = req.body;

    // Create a new instance of BookingModel with the provided movie, slot, and seats
    const myData = new BookingModel({ movie, slot, seats });

    // Save the booking data to the database
    const data = await myData.save();

    return res.status(200).json({
      message: "Booking successful",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({
      message: "something went wrong!",
      status: 500,
      data: {},
    });
  }
};

// Function to get the last booking
const getBooking = async (req, res) => {
  try {
    // Find the last booking in the database by sorting in descending order and limiting to 1
    const [data] = await BookingModel.find().sort({ _id: -1 }).limit(1);

    if (data.length === 0) {
      // If no booking found, return a message indicating no previous booking
      return res.status(200).json({
        message: "No previous Booking found!",
        status: 200,
        data: null,
      });
    }

    // If a booking is found, return the last booking data
    return res.status(200).json({
      message: "last booking!",
      status: 200,
      data: data,
    });
  } catch (error) {
    console.log("error", error.message);
    return res.status(500).json({
      message: "something went wrong!",
      status: 500,
      data: {},
    });
  }
};

module.exports = { storeBooking, getBooking };
