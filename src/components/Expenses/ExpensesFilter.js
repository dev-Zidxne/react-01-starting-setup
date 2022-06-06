import React, { useState } from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const [selectedDate, setDate] = useState("");

  const selectedYear = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectHandler}>
          <option value={selectedYear}>2022</option>
          <option value={selectedYear}>2021</option>
          <option value={selectedYear}>2020</option>
          <option value={selectedYear}>2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpensesFilter;
