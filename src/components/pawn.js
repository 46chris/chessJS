import styled from "styled-components";
import wPawnSrc from "../assets/wPawn.png"; 
import bPawnSrc from "../assets/bPawn.png"; 



export default function Pawn(props){ 
    let src = wPawnSrc;  
    if (props.color == 'black'){ 
        src = bPawnSrc; 
    }
    //This sets the position of the piece on the grid 
    const gridPlace = { 
        gridColumn: props.c, 
        gridRow: props.r, 
        padding: "0.4vh"
    }; 

    return (
        <div style={gridPlace}><img style={{display:'block', width:'100%', boxSizing:'border-box'}}src={src}></img></div>
    )
}