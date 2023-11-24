import mongoose from "mongoose";

const { Schema } = mongoose;

const EmailSchema = new Schema({
  email: { type: String, required: true },
});

const Email = mongoose.model("Email", EmailSchema);

export default Email;
