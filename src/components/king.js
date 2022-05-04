import wKing from "../assets/wKing.png"; 
import bKing from "../assets/bKing.png"; 

export default function King(props){ 
    let src = wKing;  
    if (props.color === 'black'){ 
        src = bKing; 
    }

    //This sets the position of the piece on the grid 
    const gridPlace = { 
        gridColumn: props.c, 
        gridRow: props.r, 
        padding: "0.4vh"
    }; 

    return (
        <div style={gridPlace}><img alt='king' style={{display:'block', width:'100%', boxSizing:'border-box'}}src={src}></img></div>
    )
}