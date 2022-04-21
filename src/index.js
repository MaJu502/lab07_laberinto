import React from "react";
import ReactDOM from "react-dom";

const generadorLaberinto = (a,b) => {
    const callResponse = await fetch(
        "https://maze.juanelcaballo.club/?type=json&w=$%7Bw%7D&h=$%7Bh%7D"
        .then((callResponse) => callResponse.json())
        .then((info) => info);
    return callResponse.json();
}

const App = () => {
    return <h1>Esto no es temple run, adelante</h1>
}


ReactDOM.render(<App/>, document.getElementById('root'))