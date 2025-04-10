const mongoose = require("mongoose");
const mongouri = "mongodb://localhost:27017/i-notebook";

const connecttomongo =  () => {
    mongoose.connect(mongouri);
    console.log("Connected successfully");
};

module.exports = connecttomongo;
