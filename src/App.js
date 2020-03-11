import React from 'react';
import Stage from './Stage';
import Sidebar from './Sidebar';
import './App.css';
import Chatbox from './Chatbox';

function App(props) {
  return (
    <div className="App">
      <Sidebar />
      <Stage users={props.users} />
      <Chatbox chatEvents={props.chatEvents} users={props.users} />
    </div>
  );
}

export default App;
