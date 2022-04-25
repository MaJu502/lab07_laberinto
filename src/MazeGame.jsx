/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    MazeGame.jsx
*/
import React from "react";
import BarraTop from "../components/bar.jsx";
import TheMap from "../components/map.jsx";
import "./styles/map.css";

const TheMazeGame = (maze) => {

	const [estado, setEstado] = React.useState(false)
	const gameState = estado ? "game-winned" : "in-game"

    return (
        <div className = "content">
			<BarraTop 
				title= "8bit Driver Maze"
			/>
			<div className={"game" + gameState}>
				{estado 
					? <div className="gameover"><a href="">Restart</a></div>
					: "" /* si el jugador gana se muestra el mensaje pero de lo contrario sale mensaje en blanco */
				}
				{maze.length 
					? <TheMap estado={setEstado} initMap={maze}/> 
					: ""
				}
			</div> 
		</div>
    )
}

export default TheMazeGame