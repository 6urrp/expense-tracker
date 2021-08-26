import { useState } from "react";

import ExpensesList from "./ExpensesList"
import Card from "../UI/Card"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021")

    const saveExpenseFilterYear = (year) => {
        setFilteredYear(year);
    }

    const filteredArray = props.items.filter(item => item.date.getFullYear().toString() === filteredYear)
    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selectedYear={filteredYear} onSaveExpenseYear={saveExpenseFilterYear}/>
                <ExpensesChart expenses={filteredArray} />
                <ExpensesList items={filteredArray} />
            </Card>
        </div>
    )
}

export default Expenses;