import React from 'react';
import classes from './UserBar.module.css'
const UserBar = () => {
    return (
        <div className={classes.userBar}>
            <div className={classes.userBar__title}>Параметры</div>
            <ul className={classes.userBar__body}>
                <li>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</li>
                <li>Сроки изготовления лота, дней</li>
                <li>Гарантийные обязательства, мес</li>
                <li>Условия опллаты</li>
                <li>Стоимость изготовления лота, руб (без НДС)</li>
            </ul>
        </div>
    );
};

export default UserBar;