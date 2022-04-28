import boardSrc from '../assets/chesboard.png';
import styled from 'styled-components'; 
import Pawn from './pawn'; 
import Bishop from './bishop'; 
import King from './king'; 
import Knight from './knight'; 
import Queen from './queen'; 
import Rook from './rook'; 
import Square from './square';
import { Pieces } from './Pieces';

const Div = styled.div`
    width: min(100vw, 100vh);
    height: min(100vw,100vh);
    margin:auto;
    padding: 5vh;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`;  

function setBoard(row, col){ 
    let color = "black"; 
    if (row > 1){ 
        color="white"; 
    }
    //Black piece 
    if (row == 0 || row == 7) { 
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
        }
    }
    //Black pawns 
    if (row == 1){ 
        return <Pawn name="PAWN" color={color}></Pawn>

    }
    //White pawns 
    if (row == 6){ 
        return <Pawn name="PAWN" color={color}></Pawn>

    }
}

function renderSquare(){ 
    const squares=[]; 
    for (let i = 0; i < 64; i++){
        const row = Math.floor(i/8); 
        const col = i % 8; 
        const color = (i + row) % 2; 
        squares.push(<Square black={color}>{setBoard(row, col)}</Square>)
    }
    return squares;  
}

export default function Board(props){
    const squares = renderSquare(); 
    return (   
        <Div>
            {squares}
        </Div>
        
    )
}

