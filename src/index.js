/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    index.js
*/
import React from "react";
import ReactDOM from "react-dom";
import MazeGame from './MazeGame.jsx'
import './styles/master.css'

const App = () => {
    const [maze, setMaze] = React.useState({})
    return ( <MazeGame maze={maze}/>)    
}

ReactDOM.render(<App/>, document.getElementById('root'))