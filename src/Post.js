import React from 'react';
import './Post.css'
import InputOption from './InputOption';

import { Avatar } from '@material-ui/core';
import { ThumbUpAltOutlined } from '@material-ui/icons';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function Post({ name, description, message, photoUrl }) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar />
                <div className="post__info">
                    <h2>bin batas</h2>
                    <p>Description</p>
                </div>
            </div>

            <div className="post__body">
                <p>Message goes here</p>
            </div>

            <div className="post__buttons">
                <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
                <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
            </div>
        </div>
    )
}

export default Post
