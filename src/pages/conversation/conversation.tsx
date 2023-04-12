import React from "react";
import "./conversation.css"

const Conversation = (props:any): JSX.Element => {
    return (
        <>
            <div className="conversation">
                <img src="https://www.shutterstock.com/image-vector/cute-kid-teen-boy-show-600w-1509139481.jpg" alt="" className="conversationImg" />
                <span className="conversationName">
                    {props.conversation.name}
                </span>

            </div>    
        </>   
    )
}

export default Conversation;