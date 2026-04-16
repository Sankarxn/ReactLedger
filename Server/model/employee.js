import mongoose, { Schema } from "mongoose";

const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }


})


const employee = mongoose.model("Employee", employeeSchema);

export default employee;
