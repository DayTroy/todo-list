import styles from "./todo.module.sass";
import React from "react";
import './Todo';
import { v4 as uuidv4 } from 'uuid';

const initialList = [];

const TodoForm = () => {
    const [list, setList] = React.useState(initialList);
    const [name, setName] = React.useState('');

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleAdd() {
        const newList = list.concat({ name, id: uuidv4() });
        setList(newList);
        setName('');
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAdd();
        }
    };

    return (
        <div>
            <form className={styles.todo__form}>
                <input className={styles.todo__form__input} placeholder={"Enter your task"} type={"text"} value={name} onChange={handleChange} onKeyDown={handleKeyDown}/>
            </form>
        </div>
    );
}

export default TodoForm;