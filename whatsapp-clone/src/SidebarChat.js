import React from 'react';
import './Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>This is the last message of the room</p>
            </div>
        </div>
    )
}

export default SidebarChat
