const express=require("express");
const cors = require("cors");
const connect=require("./configs/db")
const quizController=require("./controller/quiz.controller")
const app=express();
app.use(express.json());
app.use(cors());
app.use("/quiz",quizController)

app.listen(process.env.PORT || 5500,async function (){
   try{
      await connect()
   console.log("listening on port 2345")  
   }
  catch(err){
   console.log("some error")
  } 
})