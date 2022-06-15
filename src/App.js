import React, { Component } from "react";
import { hot } from "react-hot-loader";
import './sass/app.scss';

const App = () => {
    return (
        <div className="App">
            <h1>Hello From React</h1>
        </div>
    );
}

export default hot(module)(App);