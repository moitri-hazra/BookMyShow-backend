# Bookmyshow - Backend

This Node.js backend application utilizes MongoDB to store and retrieve user data, which is then seamlessly displayed on the UI, providing a flexible and user-friendly experience.

## Link to website -> [BookMyShow](https://bookmyshow-iwij.onrender.com/)


## Technologies used
- Express.
   
    To Create Server.
- MongoDB.

    To store and retrive the data of the user.

### Usage 
The backend of the application works in conjunction with the Front-end to handle user data. It utilizes the powerful capabilities of MongoDB Atlas, a cloud-based database service, to store and retrieve the user data.

When a user interacts with the frontend, such as making a booking, the backend receives the data from the frontend. It securely stores the received data in the MongoDB Atlas database for future reference.

The backend seamlessly handles the storage and retrieval of user data, ensuring that the necessary information is stored accurately and efficiently. When a user performs an operation, such as booking a movie ticket or updating their seat selection, the backend fetches the relevant data from the database and presents it back to the user.

By utilizing the capabilities of MongoDB Atlas, the backend provides a reliable and scalable solution for managing user data. It ensures that the operations performed by users are successfully completed and the data remains easily accessible for future interactions.

This integrated approach between the frontend and backend, coupled with the power of MongoDB Atlas, delivers a seamless and efficient user experience while maintaining the integrity and persistence of user data.



### End points
1. `Post` [url](https://bookmyshow-api.onrender.com/api/booking)

   This is a post request endpoint which is used to store the booking details of the user.

2. `Get` [url](https://bookmyshow-api.onrender.com/api/booking)

   This is a get request endpoint which is used to get the last booking deatils of user.



