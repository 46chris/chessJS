import wBishop from "../assets/wBishop.png"; 
import bBishop from "../assets/bBishop.png"; 

export default function Bishop(props){ 
    let src = wBishop;  
    if (props.color == 'black'){ 
        src = bBishop; 
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