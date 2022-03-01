import wQueen from "../assets/wQueen.png"; 
import bQueen from "../assets/bQueen.png"; 

export default function Queen(props){ 
    let src = wQueen;  
    if (props.color == 'black'){ 
        src = bQueen; 
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