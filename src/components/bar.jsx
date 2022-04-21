/*  Universidad del Valle de Guatemala
    Marco Jurado 20308

    header_bar.jsx 
    header que aparece en todo el juego
*/
import React from "react";
import "../styles/bar.css";
import carritologo from "../imagepool/sprite_car_celebration.gif";

const bar = () => {    
    return (
        <header>
            <img src={carritologo} alt="logo pac-man"/>
            <h1> Esto no es temple run, juega </h1>
        </header>
    )
}

export default bar