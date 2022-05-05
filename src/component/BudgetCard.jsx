import React,{useState} from 'react'
import { Stack,Card,ProgressBar,Button } from 'react-bootstrap'

import ViewExpensesModal from './ViewExpensesModal'


const BudgetCard = ({budget,amount,hideBtns,setShowExpenseModal,setDefaultValue}) => {

    const {id,name,max} = budget

    const [showViewExpenseModal,setShowViewExpenseModal] = useState(false)

    const setProgressBarVariant = (amount,max) =>{
        if(amount < max * 0.5)
            return 'primary'
        else if(amount <= max * 0.75)    
            return 'warning'        
        else
            return 'danger'    
    }
    const setBgCard = (amount,max) =>{
       if(amount > max )
        return 'danger'
    }    
    
    const handleViewExpenseBtn = () =>{
        setShowViewExpenseModal(true)
    }
    const handleAddExpenseBtn = () =>{
        setShowExpenseModal(true)
        setDefaultValue(id)
    }
    
  return (
    <>
    <Card 
        className='bg-opacity-10' 
        bg={setBgCard(amount,max)} 
        border={setBgCard(amount,max)}
        >
        <Card.Body>
            <Card.Title className='d-flex justify-content-between fw-normal mb-3 align-items-baseline'>
                <div>{name}</div>
                <div>
                    {amount} / <span className='text-muted fs-6'> {max} </span>
                </div>
            </Card.Title>
            <ProgressBar 
                className='rounded-pill'
                variant={setProgressBarVariant(amount,max)} 
                now={amount} 
                min={0} 
                max={max}/>
            {!hideBtns &&<Stack className='d-flex justify-content-end my-3'direction='horizontal' gap={2}>
                <Button 
                    variant='outline-primary'
                    onClick={handleAddExpenseBtn}
                >Add expense</Button>
                <Button 
                    variant='outline-secondary'
                    onClick={handleViewExpenseBtn}
                >View Expenses</Button>
            </Stack>}
        </Card.Body>
    </Card>
    <ViewExpensesModal 
        showViewExpenseModal={showViewExpenseModal} setShowViewExpenseModal={setShowViewExpenseModal}
        budgetId ={id}
    />
    </>
  )
}

export default BudgetCard