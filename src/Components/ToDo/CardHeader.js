import React from 'react';
import styles from "./todo.module.sass";
import listIcon from "../../images/icons/list-icon.svg";
const CardHeader = () => {
    return (
        <div className={styles.card__header}>
            <img src={listIcon} alt={"paper"} className={styles.card__header__icon}/>
            <p className={styles.card__header__title}>List of upcoming tasks</p>
            <img src={listIcon} alt={"paper"} className={styles.card__header__icon}/>
        </div>
    );
}

export default CardHeader;