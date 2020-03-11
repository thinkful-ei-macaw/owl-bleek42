import React from 'react';
import Users from './Users';

class Sidebar extends React.Component {

    render() {
        return(
        <div className="users-in">
            <h3>{Users.name}</h3>
            <img src={Users.avatar}/>
            <p>{Users.inSession}</p>
        </div>
    )
        }

}

export default Sidebar;