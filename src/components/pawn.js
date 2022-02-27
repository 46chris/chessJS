import styled from "styled-components";
import pawnSrc from "../assets/wPawn.png"; 



export default function Pawn(props){ 

    //This sets the position of the piece on the grid 
    const gridPlace = { 
        gridColumn: props.c, 
        gridRow: props.r, 
        padding: "0.4vh"
    }; 

    return (
        <div style={gridPlace}><img style={{display:'block', width:'100%', boxSizing:'border-box'}}src={pawnSrc}></img></div>
    )
}