import React, { useState } from 'react'; 
import Pawn from './pawn';
import { useDrop } from "react-dnd"; 

export default function Square({black, children}){

    //Each square's state holds the piece (or null) within the square atm  
    const [piece, setPiece] = useState(children);

    //Set the color 
    const color = black ? "#d28c45" : "#ffcf9f";

    //func to move the piece to dropped square on drop. Does so by using the state setter 
    const movePiece = (item) => { 
        if (item.name == "PAWN"){ 
            setPiece(<Pawn name="PAWN" color={item.color}></Pawn>)
        }
 
    }
    const [dropped, drop] = useDrop(()=> ({ 
        accept: 'Pawn', 
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }), 
        drop: (item) => movePiece(item)
    })
    ) 

    return (
        <div
            style={{
                backgroundColor: color, 
                width: '12.5%', 
                height: '12.5%'
            }}
            ref={drop}>
                {piece}
        </div>
    )
}