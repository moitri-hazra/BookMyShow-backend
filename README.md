# Bookmyshow - Backend

This Node.js backend application utilizes MongoDB to store and retrieve user data, which is then seamlessly displayed on the UI, providing a flexible and user-friendly experience.

## Link to website -> [BookMyShow](https://bookmyshow-iwij.onrender.com/)


## Technologies used
- Express.
   
    To Create Server.
- MongoDB.

    To store and retrive the data of the user.

### Usage 
It takes the user data from the [Front-end](https://github.com/moitri-hazra/BookMyShow-frontend) and uses [Mongo DB Atlas](https://www.mongodb.com/cloud/atlas/register) to store the data recieved and fetches the data back from the database to show the user that the 
operation was successfully completed.

### End points
1. `Post` [url](https://bookmyshow-api.onrender.com/api/booking)/api/booking 

   This is a post request endpoint which is used to store the booking details of the user.

2. `Get` [url](https://bookmyshow-api.onrender.com/api/booking)/api/booking

   This is a get request endpoint which is used to get the last booking deatils of user.



