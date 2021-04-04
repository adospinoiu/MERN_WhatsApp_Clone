import React from 'react';
import './Sidebar.css';
import IconButton from '@material-ui/core/IconButton';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Sidebar() {
    return (
        <div className="sidebar">
            <h5>This is the Sidebar</h5>
            <div className="sidebar__header">
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
