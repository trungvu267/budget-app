import { useRef } from "react"
import { Modal,FloatingLabel, Form,Button} from "react-bootstrap"
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
           
            <FloatingLabel label='Name' className='mb-3'>
                <Form.Control type="text" ref={nameRef} placeholder='Name' required/>
            </FloatingLabel>
            <FloatingLabel label='Number'>
                <Form.Control 
                    type="number" 
                    min={0} 
                    ref={maxRef}
                    placeholder='Number'
                    required      
                />
            </FloatingLabel>
            <div className="d-flex justify-content-end mt-3">
                <Button type="submit">Add New Budget</Button>
            </div>
        </Modal.Body>
        </Form>
    </Modal>
  )
}

export default AddBudgetModal