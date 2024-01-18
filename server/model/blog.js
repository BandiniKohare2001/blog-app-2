import { Schema , model } from "mongoose";

const blogapp = new Schema ({
 
    title:{
        type: String,
        required : true
    },
    description:{
        type:String,
    }
},{
    timestamps:true
})

const Blog = model ('Blog' , blogapp);
export default Blog;