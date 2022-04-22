/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    car.jsx
    componente del carro que el jugador
    mueve e interactuara con el teclado
*/

import React from "react";
import player from "../imagepool/sprite_car.gif";
import "../styles/car.css";

const car = ({status, maze, setMaze}) => {
    const [elmapa, setElmapa] = React.useState(map)
    const [moving, setMoving] = React.useState(false)
    const [complete, setComplete] = React.useState(false)
    const [direction, setDirection] = React.useState('left') //starts looking left because of gif's direction

    React.useEffect(() => {
        if(!winnerwinner_chickendinner(elmapa)) return
        setMap(ganado(map))
        setComplete(true)
        status(true)

        if (!moving) return //mientras no se mueva
        const pinloc = usr_keys(elmapa, direction)
        const NMaze = cargoes_broom(pinloc[0], pinloc[1], map)
        setElmapa(NMaze)
        setMoving(false)

        
    }, [moving])

    useArrows = (event) => {
        const instruction = changeLoc(event.key)
        if (instruction === 0) return //si no choca con algo entonces
        setMoving = True //se activa su estatus de movimiento
        setDirection(instruction) //se le da la nueva direccion de la instruccion del usuario
    }

    const gps = win ? [
        elmapa.length - 2,
        elmapa[0].length - 2
    ]: get_userloc(elmapa, 'p')


    const caminaX = 70 * (gps[1] - 1)
    const caminaY = 70 * (gps[0] - 1)
    const isDone = win ? ' status' : ''

    return (
        <div
            style={{
                top:  `${caminaY}px`,
                left: `${caminaX}px`,
            }} 
            className='wall player'
        >
            <img className={direction + isDone} src={player} alt="player" />
        </div>
    )
}

//---------------------------- Funcionamiento del carro-----------------------------
const cargoes_broom = (actual, newLocation, maze) => {
    const temp_arr = []
    temp_arr.push(...maze)
    temp_arr[actual[0]][actual[1]] = ' '
    temp_arr[newLocation[0]][newLocation[1]] = 'p'
    return temp_arr
}

const changeLoc = (key) => {
    if (['ArrowDown' , 's'].includes(key)) return 'down'
    if (['ArrowUp'   , 'w'].includes(key)) return 'up'
    if (['ArrowLeft' , 'a'].includes(key)) return 'left'
    if (['ArrowRight', 'd'].includes(key)) return 'right'
    
    return 0
}

const isvalid_loc = (maze, loc) => {
    //mientras este en espacio en blanco o en punto de ganar 
    //es una posicion valida (no esta en una pared)
    if ([' ', 'g'].includes(maze[loc[0]][loc[1]])) return true
    return false
}

const newPinLoc = (pinloc, instruction) => {
    if (instruction == 'up')    return [pinloc[0] - 1, pinloc[1]]
    if (instruction == 'down')  return [pinloc[0] + 1, pinloc[1]]
    if (instruction == 'right') return [pinloc[0], pinloc[1] + 1]
    if (instruction == 'left')  return [pinloc[0], pinloc[1] - 1]
    
}

const winnerwinner_chickendinner = (map) => {
    const a = get_userloc(map, 'g')
    if (get_userloc(map, 'g') === false) return true
    return false
}

const usr_keys = (map, direction) => {
    const location = get_userloc(map, 'p')
    const newLocation = newPinLoc(location, direction)

    if (!isvalid_loc(map, newLocation)) return [location, location]
    return [location, newLocation]
}

const get_userloc = (gameMaze, char) => {
    const row = gameMaze.filter(row => row.includes(char)) //linea del laberinto

    if (row.length == 0) return false
    const index_a = gameMaze.indexOf(row[0])
    const index_b = row[0].indexOf(char)

    return [index_a, index_b]   
}

const ganado = (map) => {
    const temp_map = []

    temp_map.push(...map)
    temp_map[temp_map.length - 2][temp_map[0].length - 2]  = ' '  
    temp_map[1][1]  = 'p'  

    return temp_map
}

let useArrows

window.addEventListener("keydown", (event) => {
    //listens for user arrowkey press actions
    useArrows(event)
})

export default car