import { Request, Response } from "express";
import { Expense } from "../models/ExpenseTrakerModel"

const CreateExpense = async (req: Request, res: Response) => {
    try {
        const { description, amount, date } = req.body;
        const expense = new Expense({ description, amount, date });
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const GetExpense = async (req: Request, res: Response) => {
    try {
        const { startDate, endDate }: any = req.query;
        console.log(req.query)
        const expenses = await Expense.find({
            date: { $gte: new Date(startDate), $lte: new Date(endDate) },
        });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports = { CreateExpense, GetExpense };