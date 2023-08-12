import { Request, Response } from "express";
import Todo from "../models/TodoModel";

const AddTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            description: req.body.description
        })
        todo.save().then(() => {
            res.send({ status: 'Ok', data: todo })
        })
    }
    catch (err) {
        console.log('error', err)
        res.send('error' + err);
    }
}

const GetTodo = async (req: Request, res: Response) => {
    try {
        const todo = await Todo.find()
        res.send({ status: 'Ok', todo })
    }
    catch (err) {
        console.log('error', err)
        res.send('error');
    }
}

const UpdateTodo = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        await Todo.findByIdAndUpdate(id, { title, description }, { new: true })
            .then((updatedTodo) => res.json(updatedTodo))
            .catch((err) => res.status(500).json({ error: err.message }));
    }
    catch (err) {
        console.log('error', err)
        res.send('error');
    }
}

const DeleteTodo = async (req: Request, res: Response) => {
    console.log('hi', req.params)
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete(id)
        res.send({ status: 'Ok', todo })
    }
    catch (err) {
        console.log('error', err)
        res.send('error');
    }
}

module.exports = { AddTodo, GetTodo, UpdateTodo, DeleteTodo };