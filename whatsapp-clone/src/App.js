import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import React, { useEffect } from 'react';
import Pusher from 'pusher-js';

function App() {
  //Security Warning. Got to figure it out.
  useEffect(() => {
    const pusher = new Pusher('d7b5fb7d55c650625560', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });

  }, [])

  return (
    <div className="app">
      <div className="app__body">

        <Sidebar />

        <Chat />
      </div>
    </div>
  );
}

export default App;
