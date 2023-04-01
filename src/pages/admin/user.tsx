import React from "react";
import { useParams } from "react-router-dom";

const User = (): JSX.Element => {
    let { id } = useParams();
    console.log(id);
    return (
        <>
            User specific Page
        </>
    )
}

export default User;