import mongoose from "mongoose";

 const Connection= async() =>{
    const URL= `mongodb://shraddhag02017:Shr1301@ac-ccc0lfg-shard-00-00.euenhc1.mongodb.net:27017,ac-ccc0lfg-shard-00-01.euenhc1.mongodb.net:27017,ac-ccc0lfg-shard-00-02.euenhc1.mongodb.net:27017/?ssl=true&replicaSet=atlas-t6he0y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`;
   // const URL= 'mongodb+srv://shraddhag02017:Shr123@#@blog-app.euenhc1.mongodb.net/?retryWrites=true&w=majority&appName=blog-app'
    try{
      await mongoose.connect(URL)
      .then(() => {
         console.log("Database connected successfully");
      })
      
    }
    catch(error){
       console.log("Error while connection",error);
    }
}
export default Connection;