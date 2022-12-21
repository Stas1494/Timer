import React, {useState} from 'react';
import './style/App.css'
import Title from "./components/UI/Title/Title";
import TimerBody from "./components/TimerBody/TimerBody";
import Annotation from "./components/UI/Annotation/Annotation";
import Users from "./components/Users/Users";

const App = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'user_1'},
        {id: 2, name: 'user_2'},
        {id: 3, name: 'user_3'},
    ]);

    return (
        <div className={'App'}>
            <Title>Торги</Title>
            <hr/>
            <Annotation>
                Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в таблице:
            </Annotation>
            <TimerBody users={users} limit={users.length}/>
            <Users users={users}/>
        </div>
    );
};

export default App;