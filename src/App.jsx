import { useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import { UserContext } from "./contexts/UserContext";
import ThemeContext from "./contexts/ThemeContext";

function App() {
    // Here we are definining where the "user" state actually exists
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState("#aaa");

    // Here we are defining what is the value provided by our context
    // We are "Providing" this value so that descendent elements can "Consume" it from the context
    const contextValue = { user, setUser };
    const themeValue = { theme, setTheme };
    return (
        <ThemeContext.Provider value={themeValue}>
            <UserContext.Provider value={contextValue}>
                <div className="App" style={{ background: theme }}>
                    <h1>Codelicious TODO</h1>

                    {user && <Heading />}
                    {user && <TodoList />}
                    {!user && <Login />}
                </div>
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
