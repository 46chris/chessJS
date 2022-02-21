import styled from "styled-components";
import pawnSrc from "../assets/wPawn.png"; 



export default function Pawn(props){ 

    //This sets the position of the piece on the grid 
    const Div = styled.div`
        grid-column: ${props.c}; 
        grid-row: ${props.r}; 
    `;
    return (
        <Div><img style={{display:'block', width:'100%', boxSizing:'border-box'}}src={pawnSrc}></img></Div>
    )
}