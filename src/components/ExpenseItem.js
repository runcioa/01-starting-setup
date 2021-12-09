// src\components\ExpenseItem.js


import './ExpenseItem.css'

function ExpenseItem(props) {

    const month = props.date.toLocaleString('it-IT', { month: 'long' })
    const day = props.date.toLocaleString('it-IT', { day: '2-digit' })
    const year = props.date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description"><h2>{props.title}</h2></div>
            <div className="expense-item__price">{props.amount}</div>
        </div>

    );
}

export default ExpenseItem;