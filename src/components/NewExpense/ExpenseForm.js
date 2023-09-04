import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [form, setForm] = useState({
    title: "",
    amount: 0,
    date: "",
  });
  const [formOpened, setFormOpened] = useState(false);
  function inputHandler(event) {
    let { value, name } = event.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function submitHandler(event) {
    // console.log(event, form);
    event.preventDefault();
    form["date"] = new Date(form["date"]);
    form["amount"] = +form["amount"];
    props.onSaveExpenseData(form);
    setForm({
      title: "",
      amount: 0,
      date: "",
    });
    setFormOpened(false);
  }
  const cancelHandler = (event) => {
    setFormOpened(false);
  };
  const openHandler = (event) => {
    setFormOpened(true);
  };
  if (!formOpened) {
    return <button onClick={openHandler}>Add New Expense</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div
        className="
      new-expense__controls"
      >
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            onChange={inputHandler}
            value={form.title}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={inputHandler}
            value={form.amount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={inputHandler}
            value={form.date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
