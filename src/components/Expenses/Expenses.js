import './Expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

let Expenses = (props)=>{

    return (
        <Card className="expenses">

            {
                props.item.map(
                    expense => (
                        <ExpenseItem 
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount}
                        />
                    )
                )
            }

        </Card>
    );
}

export default Expenses;