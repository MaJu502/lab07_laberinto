/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    map.jsx
*/
import React from "react";
import Wall from "./Wall.jsx";
import "../styles/map.css";

const appMaze = ({estado, map}) => {
    //recibe el mapa para construir y el estado ganador del player
    const [maze, setMaze] = React.useState(map)
    return( <div className="maze"> 
        {maze.map((linea, index) => 
                <div className="lineas" key={index}>
                    {linea.map((char, index) => 
                        <Wall 
                            estado={estado}
                            type={char} 
                            key={index}
                            setMaze={setMaze}
                            maze={map}
                        /> 
                    )}
                </div>
        )}
    </div>)

}

export default appMaze
