import { useState } from 'react';
import ExpenseFilter from '../NewExpense/ExpenseFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({expenses}) => {
  const [filterYear,setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear)=>{
    setFilterYear(selectedYear)
  }
  const filterExpenseYear = expenses.filter(expense=>{
    return expense.date.getFullYear().toString() === filterYear
  });

  return (
    <>
        <Card className='expenses'>
          <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
          <ExpensesChart expenses={filterExpenseYear}/>
    {
      filterExpenseYear.length === 0?(<p>no expenses found</p>):(filterExpenseYear.map(expense=>(
        <ExpenseItem key={expense.id} expense={expense}/>    
      )))
      
    }
    
    </Card>
    </>
  )
}

export default Expenses