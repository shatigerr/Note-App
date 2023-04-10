import mongoose from "mongoose"

const  db = async () => 
{
    try
    {
        await mongoose.connect(process.env.DB_URL)
        console.log("CONNECTION SUCCESFUL");
    }catch(err)
    {
        console.log("ERROR: " + err);
    }
    
}

export default db; 