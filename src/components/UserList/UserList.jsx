import React from 'react';
import classes from'./UserList.module.css'
import UserCard from "../UserCard/UserCard";
const UserList = ({users}) => {
    return (
        <div className={classes.userList}>
            {users.map((user)=>
               <UserCard key={user.id} user={user}/>
            )}
        </div>
    );
};

export default UserList;