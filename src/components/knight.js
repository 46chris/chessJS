import wKnight from "../assets/wKnight.png"; 
import bKnight from "../assets/bKnight.png"; 

export default function Knight(props){ 
    let src = wKnight;  
    if (props.color === 'black'){ 
        src = bKnight; 
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