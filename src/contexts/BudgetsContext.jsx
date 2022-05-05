import React, { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';

import useLocalStorage from "../hooks/useLocalStorage";


const BudgetsContext = React.createContext()


export const useBudgets = () =>{
    return (useContext(BudgetsContext))
}

export const BudgetProvider = ({children}) =>{
    const [budgets,setBudgets] = useLocalStorage('budgets',[])
    const [expenses,setExpenses] = useLocalStorage('expenses',[])
    const getBudgetExpenses = () =>{
        console.log('getBudgetExpenses')
    } 
    const addExpense = ({desc,amount,budgetId}) =>{
        setExpenses(preExpenses =>{
            return [...preExpenses,{id: uuidv4(),desc,amount,budgetId}]
            })
    } 
    const addBudget = ({name, max}) =>{

        setBudgets(preBudgets =>{
            if(preBudgets.find(budget => budget.name === name)) return preBudgets
            return [...preBudgets,{id: uuidv4(),name,max}]
            })
    } 
    const deleteBudget = (id) =>{
        setExpenses(preExpenses=>{
            return preExpenses.filter(expense=>expense.budgetId !== id)
        })
        setBudgets(preBudgets=>{
            return preBudgets.filter(budget=>budget.id !== id)
        })
    } 
    const deleteExpense = (id) =>{
        setExpenses(preExpenses=>{
            return preExpenses.filter(expense=>expense.id !== id)
        })
    }  
    return(
        <BudgetsContext.Provider value={
            {budgets,
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense,}
        }>
            {children}
        </BudgetsContext.Provider>
    )
}