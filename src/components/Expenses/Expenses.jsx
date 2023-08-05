import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = () => {
    const expenses = [
        {id:1,title:'Car Instance',amount:123.3,date:new Date(2023,2,25)},
        {id:2,title:'Car Instance2',amount:225.3,date:new Date(2022,2,25)},
        {id:3,title:'Car Instance3',amount:629.3,date:new Date(2021,6,15)}
      ];
  return (
    <>
        <Card className='expenses'>
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