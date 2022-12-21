import React from 'react';
import classes from'./UserCard.module.css'
const UserCard = ({user}) => {
    return (
        <div className={classes.userItem}>
            <div  className={classes.userItem__title}>{user.id}. {user.name}</div>
        </div>
    );
};

export default UserCard;