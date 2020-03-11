import React from 'react';


function Stage(props) {
    return (
        props.users.map(user => {
            return (
                <div key={user.id} className="stage">
                    <h2>{user.name}</h2>
                    <img src={user.avatar} />
                </div>
            )
        })
    )
}

export default Stage;