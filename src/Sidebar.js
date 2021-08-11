import React from 'react';
import "./Sidebar.css";

import {Avatar} from '@material-ui/core';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span><p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1627534640676-fbcac1e4bac8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=508&q=80" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Binaya Batas</h2>
                <h4>binayabatas640@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("programming")}
                {recentItem('programming')}
                {recentItem('software engineering')}
                {recentItem('reactjs')}
            </div>
        </div>
    )
}

export default Sidebar
