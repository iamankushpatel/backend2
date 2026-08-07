import mongoose, {schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema=new schema(
    {
        username: {             
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName:{
            type: String,
            required: true,
            trim: true,
            index:true
        },
        avatar:{
            type: String,//cloudnary service
            required: true,
        },
        coverImage:{
            type: String,
        }, 
        watchHistory:[
            {
            type:schema.type.ObjectID,
            ref:"video",
        },
        ] ,
        password:{
            type:String,
            required:[true,"password is required"],
        },
        refreshTokens:{
            type:String,            
        },
        
    },{
        timestamp:true
        })

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10)
    next()
})

userSchema.methods.isPasswordCorrect=async function (password) {
    return await bcrypt.compare(password,this.password)
}
userSchema.methods.generateAccessToken=function(){
    jwt.sign(
        {
            _id:this._id,
            emial:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRAY
        }
    )
}
userSchema.methods.generateRefreshToken=function(){
    jwt.sign(
        {
            _id:this._id,
            emial:this.email,
            username:this.username,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRAY
        }
    )
}

export const User=mongoose.model("User",userSchema)


