import { useState } from "react"

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";
import AddNewExpense from "./AddNewExpense";

const NewExpense = (props) => {
    const [addingEnabled, setAddingEnabled] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setAddingEnabled(false);
    }

    const onAddNewExpanseHandler = () => {
        setAddingEnabled(true);
    }

    const onCancelHandler = () => {
        setAddingEnabled(false);
    }

    return (
        <div className="new-expense">
            {
            !addingEnabled ? 
                <AddNewExpense onAddClick={onAddNewExpanseHandler}/> 
                :
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler} />
            }
        </div>
    )
}

export default NewExpense;