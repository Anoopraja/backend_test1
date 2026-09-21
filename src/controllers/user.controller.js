import bcrypt from "bcrypt";
import User from "../models/user.model.js";



// console.log("REGISTER ROUTE HIT");


const registerUser = async (req,res) => {
    try {

    const { username, gmail, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({

        username,

        gmail,

        password: hash

    });

    console.log("USER CREATED:", user);

    res.status(201).json({

        success: true,

        message: "User registered successfully"

    });

} catch (error) {

    console.log("REGISTER ERROR:", error);

    res.status(500).json({

        success: false,
        message: error.message

    });

}
}

const getAllUser = async (req,res) => {

    try{ 
    const user = await User.find()
      res.status(200).json({
            success: true,
            message: "All users fetched successfully",
            data: user,
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message:"something went wrong",
            data:user

        })
    }

}

const userlogin = async (req,res) => {
    try{
        const { gmail , password } = req.body
        const user = await User.findOne({ gmail });
        if(!user){
             return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
         const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            });
        }
         res.status(200).json({
            success: true,
            message: "Login successful",
            // user: {
            //     id: user._id,
            //     username: user.username,
            //     gmail: user.gmail
            // }
        });



     }catch(err){
        console.log("password galat hai bhai")
        res.status(500).json({
            success: false,
            message: "something went wrong",

        })
    }
}

export {
    registerUser,
    getAllUser,
    userlogin

};