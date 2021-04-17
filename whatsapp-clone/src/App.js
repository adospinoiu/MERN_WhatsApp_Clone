import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {
  const [ messages, setMessages ] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  }, [])

  //Security Warning. Got to figure it out.
  useEffect(() => {
    const pusher = new Pusher('d7b5fb7d55c650625560', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">

        <Sidebar />

        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
