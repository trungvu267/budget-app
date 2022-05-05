import {useState } from 'react';

import './App.css';


import { Container,Stack,Button, } from 'react-bootstrap';

import { useBudgets } from './contexts/BudgetsContext';

import BudgetCard from './component/BudgetCard';
import AddBudgetModal from './component/AddBudgetModal';
import AddExpenseModal from './component/AddExpenseModal';
import TotalCard from './component/TotalCard';


function App() {
  const {budgets,expenses} = useBudgets()

  const [budgetModalShow, setBudgetModalShow] = useState(false)
  const [showExpenseModal,setShowExpenseModal] = useState(false)
  const [defaultValue,setDefaultValue] = useState()



  
  const budgetElement = budgets.map(budget=>{
    const expense = expenses.filter(expense => expense.budgetId === budget.id ).map(e=> e.amount)
  
    const getSum = (total, expense) => (
      total + expense
    )
    const total = expense.reduce(getSum,0)
    
  
    return(
      <BudgetCard 
        key={budget.id} 
        budget={budget} 
        amount={total}
        setShowExpenseModal={setShowExpenseModal}
        setDefaultValue={setDefaultValue}
      />  
    )
})

  return (
    <div className="App">
      <Container>
        <Stack direction="horizontal" className='my-4'>
          <h1 className='me-auto'>Budget-App</h1>
          <Button className = 'me-2' onClick={()=>setBudgetModalShow(true)}>Add Budget</Button>
          <Button variant='outline-primary' onClick={() => setShowExpenseModal(true)}>Add Expense</Button>
        </Stack>
        <div className='wrapper'>
          {budgetElement}
          <TotalCard/>

        </div>
      </Container>
       <AddBudgetModal 
        budgetModalShow={budgetModalShow} 
        setBudgetModalShow={setBudgetModalShow}/>
       <AddExpenseModal 
        showExpenseModal={showExpenseModal} 
        setShowExpenseModal={setShowExpenseModal}
        defaultValue={defaultValue}
        />

    </div>
  );
}

export default App;
