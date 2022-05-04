import wPawnSrc from "../assets/wPawn.png"; 
import bPawnSrc from "../assets/bPawn.png"; 
import { useDrag } from "react-dnd"; 
import { useContext } from "react";
import { boardContext } from "./game";

export default function Pawn(props){ 

    const { board, updateBoard } = useContext(boardContext);
    console.log(board); 
     
    let src = wPawnSrc;  
    if (props.color === 'black'){ 
        src = bPawnSrc; 
    }

    const handleEnd = (monitor) => { 
        if (monitor.didDrop()){
            props.setSquare(null);
        }
    }

    const [{ isDragging }, drag] = useDrag(()=>({ 
        type: 'Pawn', 
        item: { 
            name : props.name, 
            color: props.color, 
            pos: props.pos
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(), 
        }),
        options: {
            dropEffect: 'move'
        }, 
        end: (item, monitor) => handleEnd(monitor),
    }))



    return (
        <img ref={drag} alt='chessPiece' src={src} style={imgStyle}></img>
    )
}

const imgStyle = {
    display: 'block', 
    width: '100%', 
    boxSizing:'border-box', 
    transform: 'translate(0,0)'
}