/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    Wall.jsx
    recibe del api generador de laberintos y 
    traduce a react
*/
import React from "react";
import car from "./car.jsx";
import flag from "./flag.jsx";

/* generar */
const boundaries = ({ type, setMaze, maze, estado }) => {

    const stringType = translate(type)

    if (stringType == 'flag') return <flag/>
    if (stringType == 'car') return (
        <car 
            winned={estado}
            setMaze={setMaze}
            maze={maze}
        />
    )

    return <div className={'Wall ' + stringType}></div> 
}

/* traducir */
const translate = (maze_comp) => {
    if (maze_comp === '+') return 'corner'
    if (maze_comp === 'p') return 'car'
    if (maze_comp === 'g') return 'flag'
    if (maze_comp === ' ') return 'empty'
    if (maze_comp === '|') return 'vertical'
    if (maze_comp === '-') return 'horizontal'  
}

export default Wall