import wRook from "../assets/wRook.png"; 
import bRook from "../assets/bRook.png"; 

export default function Rook(props){ 
    let src = wRook;  
    if (props.color == 'black'){ 
        src = bRook; 
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