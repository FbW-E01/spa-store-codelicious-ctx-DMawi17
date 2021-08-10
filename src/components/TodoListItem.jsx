import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ThemeContext from "../contexts/ThemeContext";

function TodoListItem({ todo, deleteTodo }) {
    const { user, setUser } = useContext(UserContext);

    const mine = todo.user === user.id;

    const { theme } = useContext(ThemeContext);
    return (
        <li className={(mine ? "my-todo " : "") + theme}>
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine && <button onClick={() => deleteTodo(todo)}>delete</button>}
        </li>
    );
}

export default TodoListItem;
