/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    car.jsx
    componente del carro que el jugador
    mueve e interactuara con el teclado
*/

import React from "react";
import player from "../imagepool/sprite_car.gif"
import "../styles/car.css"

const car = ({status, maze, setMaze}) => {
    const [vmap, setVmap] = React.useState(map)
    const [moving, setMoving] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [direction, setDirection] = React.useState('left') //starts looking left because of gif's direction

    React.useEffect(() => {
        if (!moving) return //mientras no se mueva
        const pinloc = handleMoves(vmap, direction)
        const NMaze = movePLayer(pinloc[0], pinloc[1], map)
        setVmap(NMaze)
        setMoving(false)

        if(!checkWin(vmap)) return
        setMap(winnedMap(map))
        setComplete(true)
        winned(true)
    }, [moving])

    useArrows = () => {
        const instruction = changeLoc(event.key)
        if (instruction === 0) return //si no choca con algo entonces
        setMoving = True //se activa su estatus de movimiento
        setDirection(instruction) //se le da la nueva direccion de la instruccion del usuario
    }

    const gps = win ? [
        vmap.length - 2,
        vmap[0].length - 2
    ]: getLocation(vmap, 'p')
    const offsetX = 64.8 * (gps[1] - 1)
    const offsetY = 64.8 * (gps[0] - 1)
    const isDone = win ? ' done' : ''

    return (
        <div
            style={{
                top:  `${offsetY}px`,
                left: `${offsetX}px`,
            }} 
            className='wall player'
        >
            <img className={direction + isDone} src={player} alt="player" />
        </div>
    )
}