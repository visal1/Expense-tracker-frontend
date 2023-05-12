import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [entereddate, setEntereddate] = useState('');

    const titlechangehandler = (event)=> {
        setEnteredTitle(event.target.value)
    };

    const amountchangehandler = (event)=> {
        setEnteredAmount(event.target.value)
    };

    const datechangehandler = (event)=> {
        setEntereddate(event.target.value)
    };

    const submithandler = (event)=> {
        event.preventDefault();

        const exepenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(entereddate)
        }

        props.onsaveExpenseData(exepenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEntereddate('');
    };

    return (
        <form onSubmit={submithandler}>
            <div className='new-expense_cs'>
                <div className='new-expense_c'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titlechangehandler}/>
                </div>
                <div className='new-expense_c'>
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountchangehandler}/>
                </div>
                <div className='new-expense_c'>
                    <label>Date</label>
                    <input type='date' value={entereddate} onChange={datechangehandler}/>
                </div>
            </div>
            <div className='new-expense_as'>
            <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;