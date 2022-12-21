import React from 'react';
import UserBar from "../UserBar/UserBar";
import UserList from "../UserList/UserList";
import classes from './Users.module.css'
const Users = ({users, limit}) => {
    return (
        <div className={classes.users}>
            <UserBar/>
            <UserList users={users}/>
        </div>
    );
};

export default Users;