import React from 'react'
import styles from './todo.module.sass'
import logo from '../../images/icons/to-do-list-logo.svg'

const HeaderLogo = () => {
    return (
        <div className={styles.todo__header}>
            <img src={logo} alt={'logotype'} className={styles.todo__header__logo}/>
            <p className={styles.todo__header__title}>ToDoList</p>
        </div>
    )
}

export default HeaderLogo
