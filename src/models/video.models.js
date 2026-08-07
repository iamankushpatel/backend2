import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate";
import aggregatePaginate from "mongoose-aggregate-paginate/lib/mongoose-aggregate-paginate";

const videoSchema=new mongoose.schema(
    {
        videoFile:{
            type:true,
            required: true
        },
        thumbnail:{
            type:true,//cloudnary url
            required: true
        },
        title:{
            type:true,
            required: true
        },
        description:{
            type:true,
            required: true
        },
        duration:{
            type:Number,
            required: true
        },
        views:{
            type:Number,
            required: true,
            default:true
        },
        isPublished:{
            type:Boolean,
            default:true
        },
        owner:{
            type:mongoose.schema.types.ObjectID,
            ref:"User"
        }        
    },{timestamp:true});

videoSchema.plugin(mongooseAggregatePaginate);

export const Video=mongoose.model('Video',videoSchema)