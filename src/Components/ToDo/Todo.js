import styles from './todo.module.sass';
import React, {useState} from "react";
import HeaderLogo from './HeaderLogo';
import TodoForm from "./TodoForm";
import TodoCard from "./TodoCard";

const Todo = () => {
    return (
        <div className={styles.container}>
            <HeaderLogo/>
            <TodoForm/>
            <TodoCard/>
        </div>
    )
}
export default Todo;