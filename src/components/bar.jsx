/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    header_bar.jsx 
    header que aparece en todo el juego
*/
import React from "react";
import "../styles/bar.css";
import carritologo from "../imagepool/sprite_car_celebration.gif";

const bar = (texto) => {    
    return (
        <header>
            <img src={carritologo} alt=""/>
            <h1> {texto} </h1>
        </header>
    )
}

export default bar