import React from "react";
import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Button from "react-bootstrap/Button";

function App({ signOut }) {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>We now have Auth!</h1>
                <Button onClick={signOut} variant="outline-info" size="lg">
                    Sign out
                </Button>
            </header>
        </div>
    );
}

export default withAuthenticator(App);
