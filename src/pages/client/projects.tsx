import React from "react";

const Project = (props:any): JSX.Element => {
    return (
        <div>
            <h3>The name of project is {props.name}</h3>
            <h4>The content of Project is { props.content}</h4>
        </div>
    )
}

export default Project;