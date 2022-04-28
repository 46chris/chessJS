import wPawnSrc from "../assets/wPawn.png"; 
import bPawnSrc from "../assets/bPawn.png"; 
import { useDrag } from "react-dnd"; 



export default function Pawn(props){ 
    let src = wPawnSrc;  
    if (props.color == 'black'){ 
        src = bPawnSrc; 
    }
    const [{ isDragging }, drag] = useDrag(()=>({ 
        type: 'Pawn', 
        item: { 
            name : props.name, 
            color: props.color
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(), 
        }),
    }))

    return (
            <img ref={drag} style={{
                display:'block', 
                width:'100%', 
                boxSizing:'border-box', 
                transform: 'translate(0,0)',
                opacity: isDragging ? 0: 1, 
            }}src={src}></img>
    )
}