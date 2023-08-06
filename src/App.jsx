
import { useState } from 'react';
import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'
const DUMMY_EXPENSES = [
  {id:1,title:'Car Instance',amount:123.3,date:new Date(2023,12,25)},
  {id:2,title:'Car Instance2',amount:225.3,date:new Date(2022,12,29)},
  {id:3,title:'Car Instance3',amount:629.3,date:new Date(2021,11,15)}
];
function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
  const addNewExpense = (expense)=>{
    setExpenses((prevState=>{
      return [expense,...prevState]
    }));
  }
  return (
    <>
    <NewExpense onAddExpense={addNewExpense}/>
      <Expenses expenses={expenses}/>
    </>
  )
}

export default App
