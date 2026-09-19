import express from 'express'
import Test from '../models/test.model.js'

const route = express.Router()

route.get("/all", async (req, res) => {
  try {
    const users = await Test.find();

    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
route.get("/user/:id", async (req, res) => {
  try {
    const users = await Test.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "All users fetched successfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

route.post("/create", async (req, res) => {
    try {
        const { name, kaam } = req.body;

        const user = await Test.create({
            name,
            kaam
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });

    }

    catch (error) {
        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    }
})


route.delete("/delete.:name", async (req, res) => {

    try {
        const user = await Test.findByIdAndDelete(req.params.name)
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
})

export default route;