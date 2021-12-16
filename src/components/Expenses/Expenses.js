import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {

    const [filteredYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilterdYear(selectedYear);

    };


    return (

        <div>

            <Card className="expenses">
                <ExpensesFilter onChangeFilter={filterChangeHandler} selected={filteredYear} />
                {props.items.map((expense) =>
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />)
                }
            </Card>
        </div>

    );

}


export default Expenses;