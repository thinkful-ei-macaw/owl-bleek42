import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import chatEvents from './Chatevents';
import users from './Users';

ReactDOM.render(<App users={users} chatEvents={chatEvents} />, document.getElementById('root'));