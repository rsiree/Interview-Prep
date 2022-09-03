const express=require("express");
const router=express.Router();
const Quiz=require("../models/quiz.model")
router.get("/",async(req,res)=> {
    try{
        const quiz=await Quiz.find().lean().exec();
         console.log("hii")
        res.send(quiz)
    }
    catch(e){
        return res.status(500).send("message");
    }
    
 })

//  router.get("/",async(req,res)=> {
//   try{
//       const quiz=await Quiz.find().lean().exec();
//        console.log("hii")
//       res.send(quiz)
//   }
//   catch(e){
//       return res.status(500).send("message");
//   }
  
// })

 router.get("/:id", async (req, res) => {
    try {
      const quiz = await Quiz.findById(req.params.id)
        .lean()
        .exec();
      return res.send(quiz);
    } catch (err) {
      return res.status(500).send("no");
    }
  });


 module.exports=router;