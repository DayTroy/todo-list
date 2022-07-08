import React from 'react';
import styles from "./todo.module.sass";
import TodoListItem from "./TodoListItem";
const TodoList = () => {
    return (
        <ul className={styles.todo__list}>
            <TodoListItem/>
        </ul>
    );
}

export default TodoList;