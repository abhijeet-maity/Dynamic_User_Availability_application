import mongoose from 'mongoose';

export const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_URI);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1);//success status code = 0, Failure status code = 1.
    }
};

//CBqgLZjQPZ9uAen0