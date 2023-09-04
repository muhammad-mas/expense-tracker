import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses({ expenses }) {
  const [year, setFilterYear] = useState("");

  function onSelectFilter(year) {
    setFilterYear(year);
  }
  let filteredExpenses = expenses.filter((expense) => {
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
  });

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesFilter
        selected={year}
        onFilterSelected={onSelectFilter}
      ></ExpensesFilter>
      <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
    </Card>
  );
}
export default Expenses;
