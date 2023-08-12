import express, { Router } from 'express'

const { AddTodo,GetTodo,UpdateTodo,DeleteTodo } = require('../controllers/TodoController')

const router: Router = express.Router();

router.post("/add-todo", AddTodo);

router.get("/get-todo", GetTodo);

router.put("/update-todo/:id", UpdateTodo)

router.delete("/delete-todo/:id", DeleteTodo)

module.exports = router;
