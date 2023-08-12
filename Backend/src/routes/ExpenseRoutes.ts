import { Router } from "express";

const { CreateExpense, GetExpense } = require('../controllers/ExpenseController')

const router: Router = Router();

router.post('/create-expense', CreateExpense);
router.get('/get-expense', GetExpense);

module.exports = router;