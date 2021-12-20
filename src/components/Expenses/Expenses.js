import React, { useState } from "react";

import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filteredYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

   

    return (

        <div>

            <Card className="expenses">
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
            
            <ExpensesList items = {filteredExpenses} />


            </Card>
        </div>
    );

}


export default Expenses;