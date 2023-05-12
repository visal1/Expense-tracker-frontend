import './App.css';
import React,{usestate} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

let Dummy_Expense = [
    {
        id:'e1',
        title:"School Fee",
        amount:8000,
        date:new Date(2021,5,9)
    },
    {
        id:'e2',
        title:"Tution Fee",
        amount:500,
        date:new Date(2021,5,12)
    },
    {
        id:'e3',
        title:"Electricity Bill",
        amount:250,
        date:new Date(2021,8,12)
    },
    {
        id:'e4',
        title:"Gym Fee",
        amount:900,
        date:new Date(2021,5,11)
    }
];

const App = ()=>{

    const [expenses,setExpenses] = usestate(Dummy_Expense);

    const addExpenseHandler = (expense)=> {
        const updatedExpenses = [expense, ...expenses];
        setExpenses(updatedExpenses);
    };

    return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses item={expenses}/>
    </div>
    );
    
}

export default App;