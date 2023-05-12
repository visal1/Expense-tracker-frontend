
import './ExpenseItem.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

let ExpenseItem = (props) => {


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item-desc">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;