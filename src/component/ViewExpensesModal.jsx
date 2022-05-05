import { Modal,Table,Button } from "react-bootstrap"
import { useBudgets } from "../contexts/BudgetsContext"

const ViewExpensesModal = ({showViewExpenseModal,setShowViewExpenseModal,budgetId}) => {
  const {expenses,deleteBudget,deleteExpense} = useBudgets()
  const handleRemoveExpense = (id) =>{
    deleteExpense(id)
  }
  const handleRemoveBudget = (id) =>{
    deleteBudget(id)
  }
  const expenseTable = expenses.filter(expense=> expense.budgetId === budgetId).map((expense,index)=>{
    const {id,amount,desc} = expense
    return(

    <tr key={id}>
     <td>{index+1}</td>
     <td>{desc}</td>
     <td>{amount}</td>
     <td className="d-flex justify-content-center">
       <Button 
        className="btn-close"
        variant='outline-danger' 
        size='sm'
        onClick={()=>handleRemoveExpense(expense.id)}
        ></Button></td>
    </tr>
    )
  })

  return (
    <Modal 
      show={showViewExpenseModal}
      onHide={()=>{setShowViewExpenseModal(false)}}
    >

        <Modal.Header closeButton>
            <Modal.Title className="me-auto">Name-Expenses</Modal.Title>
            <Button 
              variant='outline-danger' 
              size='sm'
              onClick={()=>handleRemoveBudget(budgetId)} 
            >Delete</Button>
        </Modal.Header>
        <Modal.Body>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name Expense</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {expenseTable}
            </tbody>
           
        </Table>
        </Modal.Body>

    </Modal>
  )
}

export default ViewExpensesModal