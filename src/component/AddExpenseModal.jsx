import React, {useRef } from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { useBudgets } from '../contexts/BudgetsContext'

const AddExpenseModal = ({showExpenseModal,setShowExpenseModal,defaultValue}) => {

    const descRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const {budgets,addExpense} = useBudgets()


    const optionsElememt = budgets.map(budget=>(
        <option value={budget.id} key={budget.id}>{budget.name}</option>
    ))
    const handleSubmit = (e) =>
    {       
        e.preventDefault()
        addExpense({
            desc: descRef.current.value,
            amount: parseFloat(amountRef.current.value) , 
            budgetId: budgetIdRef.current.value,
        })
        setShowExpenseModal(false)
    }
  return (
    <Modal show={showExpenseModal} onHide={()=>{setShowExpenseModal(false)}} backdrop="static">
        <Form 
            onSubmit = {handleSubmit}
        >
            <Modal.Header closeButton>
                <Modal.Title>New Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type='text' ref={descRef} required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Require!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type='number' min={0} ref={amountRef} required/>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Require!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Budget</Form.Label>
                    <Form.Select ref={budgetIdRef} defaultValue={defaultValue}>{optionsElememt}</Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-end mt-3'>
                    <Button variant='outline-primary' type='submit'>Add expense</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}

export default AddExpenseModal