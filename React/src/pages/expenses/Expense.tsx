import { useEffect, useState } from 'react';
import axios from 'axios';

import './Expense.css';


const Expense = () => {
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [expenses, setExpenses] = useState<any>([]);

    useEffect(()=>{
        
    })

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleAddExpense = async () => {
        try {
            await axios.post('http://localhost:4000/expense/create-expense', {
                description: description,
                amount: Number(amount),
                date: new Date(date),
            }, config).then((response: any) => {
                alert('added')
                setDescription('');
                setAmount('');
                setDate('');
            }).catch((err: any) => {
                console.log('expense err', err);
            });

        } catch (error) {
            console.error('Error adding expense:', error);
        }
    };

    const handleFetchExpenses = async () => {
        try {
            const response = await axios.get(
                `http://localhost:4000/expense/get-expense`,{params:{startDate:startDate,endDate:endDate}}
            );
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching expenses:', error);
        }
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='login-form'>
                    <h2>Expense Tracker</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <button onClick={handleAddExpense} type='submit'>Add Expense</button>
                </div>
                <div className='login-form'>
                    <h2>Fetch Expense</h2>
                    <div className="form-group">
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button onClick={handleFetchExpenses} type='submit'>Fetch Expenses</button>
                </div>
            </div>
            <div style={{ margin: '20px' }}>
                <h2 style={{ textDecoration: 'underline',marginLeft:'50%' }}>Expenses</h2>
                <table style={{ border: '1px solid black', width: '50%', borderCollapse: 'collapse',marginLeft:'30%' }}>
                    <thead style={{ border: '1px solid black'}}>
                        <tr>
                            <th style={{ border: '1px solid black', padding: '4px' }}>Description</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Amount</th>
                            <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenses.map((expense:any) => (
                            <tr key={expense._id} style={{ border: '1px solid black' }}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{expense.description}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{expense.amount}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{expense.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default Expense;