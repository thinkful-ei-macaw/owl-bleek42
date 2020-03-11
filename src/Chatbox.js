import React from 'react';

export default function Chatbox(props){
    return(
        props.chatEvents.map(chat => {
            let message = chat.message;
            const user = props.users.find(user => user.id == chat.participantId)
            if(chat.type == 'thumbs-up') {
                message = `${user.name} gave a thumbs up`
            }
            return(
            <div className="chat">
                <p>{message}</p>
                <p>{chat.type}</p>
            </div>
            )
        })
    )
}