import React, { useState } from 'react'; 
import Pawn from './pawn';
import Bishop from './bishop'; 
import King from './king'; 
import Knight from './knight'; 
import Queen from './queen'; 
import Rook from './rook'; 
import canDropPiece from './pieceMovement';
import { useDrop } from "react-dnd"; 

function setBoard(row, col){ 
    let color = "black"; 
    if (row > 1){ 
        color="white"; 
    }
    //Black piece 
    if (row === 0 || row === 7) { 
        switch(col){ 
            case 0:
            case 7:  
                return <Rook color={color}></Rook>
            case 1: 
            case 6: 
                return <Knight color={color}></Knight>
            case 2: 
            case 5: 
                return <Bishop color={color}></Bishop>
            case 3: 
                return <Queen color={color}></Queen>
            case 4: 
                return <King color={color}></King>
            default: 
                return null 
        }
    }
    //Black pawns 
    if (row === 1){ 
        return <Pawn pos={[row,col]} name="PAWN" color={color}></Pawn>

    }
    //White pawns 
    if (row === 6){ 
        return <Pawn pos={[row,col]} name="PAWN" color={color}></Pawn>

    }
}

export default function Square({black, pos}){

    //Each square's state holds the piece (or null) within the square atm  
    const [piece, setPiece] = useState(setBoard(pos[0], pos[1]));

    //Set the color 
    const color = black ? "#d28c45" : "#ffcf9f";

    //Used to delete the piece on the square that the piece successfully moved from 
    const setSquare = () => { 
        setPiece(null)
    }

    //func to move the piece to dropped square on drop. Does so by using the state setter 
    const movePiece = (item) => { 
        if (item.name === "PAWN"){ 
            console.log('moved piece')
            setPiece(<Pawn name={item.name} pos={[pos[0],pos[1]]} color={item.color} setSquare={setSquare}></Pawn>)
        }
 
    }
    
    const [dropped, drop] = useDrop(()=> ({ 
        accept: 'Pawn', 
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }), 
        drop: (item) => movePiece(item), 
        canDrop: (item) => canDropPiece(item, pos, checkState)
    })) 

    const handleCanDrop = (item, pos) => { 
        console.log(piece)
        console.log(pos)
        return canDropPiece(item,pos,piece)
    }

    //Debugging function 
    const checkState = () => { 
        console.log(piece)
        console.log(pos)
        return piece;
    }

    return (
        <div onClick={checkState}
            style={{
                backgroundColor: color, 
                width: '12.5%', 
                height: '12.5%'
            }}
            ref={drop}>
                {piece == null ? null : <piece.type {...piece.props} setSquare={setSquare}></piece.type>}
        </div>
    )
}