import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{
    try {
        const connectionInstances = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB host: ${connectionInstances.connection.host}`);
        
    } catch (error) {
        console.log("MongoDB connecttion ERROR: ", error)
        process.exit(1)
    }

}
export default connectDB
