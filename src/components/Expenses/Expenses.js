import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses({ expenses }) {
  const [year, setFilterYear] = useState("");

  function onSelectFilter(year) {
    setFilterYear(year);
  }
  function mapExpenses() {
    return expenses
      .filter((expense) => {
        if (year) {
          // console.log(
          //   expense.date.getFullYear() == year,
          //   expense.date.getFullYear() === year,
          //   expense.date.getFullYear(),
          //   year
          // );
          if (expense.date.getFullYear() == year) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      })
      .map((expense) => {
        return (
          <Card className="expenses" key={expense.id}>
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              id={expense.id}
              date={expense.date}
            />
          </Card>
        );
      });
  }

  return (
    <div>
      <ExpensesFilter
        selected={year}
        onFilterSelected={onSelectFilter}
      ></ExpensesFilter>
      {mapExpenses()}
    </div>
  );
}
export default Expenses;
