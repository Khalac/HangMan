import mongoose from "mongoose";

const { Schema } = mongoose;

const uri =
  "mongodb+srv://dinhanhquoc2525:dinhanhquoc182002@comingsoon.kxtinoj.mongodb.net/Email?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
    console.log("MongoDB is not connected.");
  }
};

export default connectDB;
