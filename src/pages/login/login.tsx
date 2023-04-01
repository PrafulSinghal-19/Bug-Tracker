import * as React from "react";
import Form from "./form";
import "./login.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function FormPropsTextFields() {
  return (
    <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <h2 className="login-heading">Login Page</h2>
      <Form />
    </GoogleOAuthProvider>
  );
}


