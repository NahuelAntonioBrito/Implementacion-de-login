import mongoose from "mongoose";

const userCollection = 'users'
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    password: {type: String, required: true},
    role: String,
})

const userModel = mongoose.model(userCollection, userSchema)
export default userModel