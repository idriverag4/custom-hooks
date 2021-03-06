import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        dispatch({
            type: "[TODO] Add Todo",
            payload: todo,
        });
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "[TODO] Remove Todo",
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    }

    const todosCount = todos.length;
    const PendingTodosCount = todos.filter(todo => !todo.done).length;

    return {
        todos,
        todosCount,
        PendingTodosCount,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}
