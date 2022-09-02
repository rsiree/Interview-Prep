const mongoose=require("mongoose")
const quizSchema=new mongoose.Schema({
    id:{type:Number,require:true},
    category:{type:String,require:true},
    question:{type:String,require:true},
    answer:{type:String,require:true},
 },{
    versionKey:false,
    timestamps:true
 }
 );
 module.exports=mongoose.model("quiz",quizSchema);