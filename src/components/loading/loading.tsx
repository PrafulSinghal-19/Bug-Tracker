import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./loading.css";

const LoadingPage = () => {
    return (
        <div className="loadingPage">
            <Spinner animation="border" />
            <h4 className="loadingText">Please wait while you are being authenticated....</h4>
        </div>
    )
}

export default LoadingPage;