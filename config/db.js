const mongoose = require('mongoose');
const colors = require('colors');

// const URI = "mongodb+srv://sravi828:%40J$u9yWknPR_935@blood.dtsdcpc.mongodb.net//";

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database ${mongoose.connection.host}`.bgCyan.white);
    }catch(error){
        console.log(`Mongodb Database Error ${error}`.bgRed.white);
    }
};

module.exports = connectDB;

