import { useRef } from "react"
import { Modal, Form,Button } from "react-bootstrap"
import { useBudgets } from "../contexts/BudgetsContext"


const AddBudgetModal = ({budgetModalShow,setBudgetModalShow}) => {




    const nameRef = useRef()
    const maxRef = useRef()

    const {addBudget} = useBudgets()

    const handleSubmit = (e) => {

        e.preventDefault()
        addBudget({
            
            name: nameRef.current.value,
            max: parseFloat(maxRef.current.value)            
        })
        setBudgetModalShow(false)
    }

    const handleHideModal =() =>{
        setBudgetModalShow(false)
    }
  return (
    <Modal show={budgetModalShow} onHide={handleHideModal} backdrop="static">
        <Form 
            onSubmit={handleSubmit}
            >
        <Modal.Header closeButton>
            <Modal.Title>New Budget</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" ref={nameRef} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Maximum</Form.Label>
                <Form.Control 
                    type="number" 
                    min={0} 
                    ref={maxRef}
                    required      
                />
            </Form.Group>
            <div className="d-flex justify-content-end mt-3">
                <Button type="submit">Add New Budget</Button>
            </div>
        </Modal.Body>
        </Form>
        
    </Modal>
  )
}

export default AddBudgetModal