import { UseReducerCounter } from "./hooks/UseReducer/UseReducerCounter";
import { UseReducerTodo } from "./hooks/UseReducer/UseReducerTodo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UseReducerCounter />
      <UseReducerTodo />
    </div>
  );
}
