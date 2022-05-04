/**
 * Calculates all possible movements for all pieces. Which is then set as the canDrop for
 * the square useDrop hook
 * @param {array} pos Contains the x,y coord of the square the dragging piece is being dragged to
 * Note that the board's coordinate system starts at (0,0) at the top left black rook 
 */
 export default function canDropPiece(item, toPos, piece){
    console.log(piece())

    //If the square is occupied by another piece
    if (piece() != null){ 
        return false; 
    }

    switch(item.name){
        case 'PAWN':
            return canDropPawn(item, toPos);
        default: 
            return null;
    }
}

function canDropPawn(item, toPos){ 

    const diffY = toPos[0] - item.pos[0]; 
    const isSameCol = item.pos[1] === toPos[1]; 

    if (item.color === 'black'){ 
        //At the beginning pos so can move two up
        if (item.pos[0] === 1){  
            return (isSameCol) && (diffY === 2 || diffY === 1); 
        }
        //Standard move forward one
        else { 
            return (isSameCol) && (diffY === 1);  
        }
    }
    //Case piece color is white
    else{ 
        if (item.pos[0] === 6){ 
            return (isSameCol) && (diffY === -2 || diffY === -1); 
        }
        else { 
            return (isSameCol) && (diffY === -1); 
        }
    }
}   