import React from 'react'
import styles from './todo.module.sass'
import TodoList from './TodoList'
import CardHeader from './CardHeader'

const TodoCard = () => {
    return (
        <div className={styles.todo__card}>
            <CardHeader/>
            <TodoList/>
        </div>
    )
}

export default TodoCard
