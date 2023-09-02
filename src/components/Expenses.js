import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses({ expenses }) {
  function mapExpenses() {
    return expenses.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          key={expense.id}
          id={expense.id}
          date={expense.date}
        />
      );
    });
  }
  return <div className="expenses">{mapExpenses()}</div>;
}
export default Expenses;
