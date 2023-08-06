import { useState } from 'react';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [filterYear,setFilterYear] = useState('2020');
  const filterChangeHandler = ()=>{
    setFilterYear(filterYear)
  }
   
  return (
    <>
        <Card className='expenses'>
          <ExpenseFilter selected={filterYear} onChange={filterChangeHandler}/>
    {
      expenses.map(expense=>(
        <ExpenseItem key={expense.id} expense={expense}/>    
      ))
    }
    
    </Card>
    </>
  )
}

export default Expenses