import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // if (props.items.length === 0) {
  //   return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  // }

  return (
    <li>
      <Card className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
      {props.items.length === 0 && (
        <h2 className="expenses-list__fallback">Found no expenses.</h2>
      )}
    </li>
  );
};

export default ExpensesList;
