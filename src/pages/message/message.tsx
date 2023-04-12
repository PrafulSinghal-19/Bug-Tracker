import React from "react";
import {format} from 'timeago.js';
import "./message.css";

const Message = (props: any): JSX.Element => {
    const own = props.message.senderId == props.user?._id ? true : false;
    return (
        <>
            <div className={own ? "message own":"message"}>
                <div className="messageTop">
                    <img src="https://www.shutterstock.com/image-vector/cute-kid-teen-boy-show-600w-1509139481.jpg" alt="" className="messageImg" />
                    <p className="messageText">{props.message.text}</p>
                </div>
                <div className="messageBottom">{format(props.message.createdAt)}
                </div>
            </div>
        </>
    )
}

export default Message;