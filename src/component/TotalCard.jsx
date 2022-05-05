
import { v4 as uuidv4 } from 'uuid';
import { useBudgets } from "../contexts/BudgetsContext"
import BudgetCard from "./BudgetCard"


const TotalCard = () => {

    const {budgets,expenses} = useBudgets()

    const getSum = (total,element) => (total+element)
    const totalMax = budgets.map(budget=>budget.max).reduce(getSum,0)
    const totalAmount = expenses.map(expense=>expense.amount).reduce(getSum,0)

    const totalBudget = {
      id: uuidv4(),
      name:'Total',
      max: totalMax
    }
  return (
    <BudgetCard budget={totalBudget} amount={totalAmount} max={totalMax} hideBtns>

    </BudgetCard>
  )
}

export default TotalCard