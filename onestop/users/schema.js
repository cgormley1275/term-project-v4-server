import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    email: String,
    dob: String,
    role: String,
    loginId: String,
    lastActivity: String,
    totalActivity: String,
},
    { collection: "users" }
);

export default userSchema;
