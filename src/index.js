// require('dotenv').config()

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB()

.then(()=>{
    app.listen(process.env.PORT ||8000)
    console.log(`server is running at PORT: ${process.env.PORT}`);
    
})
.catch((err) =>{
    console.log("mongo db connection failed!!",err);
    
})









// (async=>{
//     try {
//     await mongoose.connect(`${MONGODB_URL}/{DB_NAME}`)
//     app.on("error",(error)=>{
//         console.log("ERROR: ",error);
//         throw error;
//     })

//     app.listen(process.env.PORT,()=>{
//         console.log(`server is listening on PORT = ${process.env.PORT}` );
//     })
// } catch (error) {
//     console.log("ERROR:",error);
//     throw error;
// }
// })()