import styled from 'styled-components'; 
import Square from './square';
import { useState } from 'react'; 

function renderSquare(){ 
    const squares=[]; 
    for (let i = 0; i < 64; i++){
        const row = Math.floor(i/8); 
        const col = i % 8; 
        const color = (i + row) % 2; 
        squares.push(<Square pos={[row, col]} black={color}></Square>)
    }
    return squares;  
}

export default function Board(props){


    const [boardState, setboardState] = useState({
        FEN: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1', 
        alg: null, 
    })
    const squares = renderSquare(); 
    return (   
        <Div>
            {squares}
        </Div>
    )
}

const Div = styled.div`
    width: min(100vw, 100vh);
    height: min(100vw,100vh);
    margin:auto;
    padding: 5vh;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
`;  

