import mongoose from 'mongoose'

const mongoDB = async ()=>{

    try{
        await mongoose.connect(process.env.MDB_URI)
        console.log("mongoDB connected")
    }
    catch(err){
        console.log("having issue in connection mongoDB",err)
    }

}

export default mongoDB;