import React from 'react';
import './Sidebar.css';

import { Avatar, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';




function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src='https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg' />

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

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new Chat"></input>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
