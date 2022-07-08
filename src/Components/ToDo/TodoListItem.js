import React from 'react';
import styles from "./todo.module.sass";

const TodoListItem = () => {
    return (
        <li className={styles.todo__item}>
            <div className={styles.todo__item__icon}></div>
            <p className={styles.todo__item__title}>Call brother</p>
        </li>
    );
}

export default TodoListItem;