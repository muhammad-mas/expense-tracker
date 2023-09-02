import "./ExpenseDate.css";
function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <p className="expense-date__month">{month}</p>
      <p className="expense-date__year">{year}</p>
      <p className="expense-date__day">{day}</p>
    </div>
  );
}
export default ExpenseDate;
