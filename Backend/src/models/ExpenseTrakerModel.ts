import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: Date,
});

export const Expense = mongoose.model('Expense', expenseSchema);