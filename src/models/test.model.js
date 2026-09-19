import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },

    kaam: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);

export default Test;