import './ExpenseDate.css';
import React from 'react';

let ExpenseDate = (props)=>{

    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="exd_month">{month}</div>
            <div className="exd_day">{day}</div>
            <div className="exd_year">{year}</div>
        </div>
    );
}

export default ExpenseDate;