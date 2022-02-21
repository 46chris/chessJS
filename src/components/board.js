import boardSrc from '../assets/chesboard.png';
import styled from 'styled-components'; 
import Pawn from './pawn'; 

//Testing out Javascript style object
const myStyle = { 
    width: '100%', 
    maxWidth: '90vh',
    display:'block', 
    margin: 'auto'
}

export default function Board(props){
    //Testing out styled components  
    const Div = styled.div`
        width: min(100vw, 100vh); 
        height: min(100vw,100vh); 
        margin:auto; 
        padding: 5vh; 
        box-sizing: border-box; 
 
        background-image:url(${boardSrc}); 
        background-repeat:no-repeat; 
        background-origin: content-box; 
        background-size: min(100%, 90vh); 

        display: grid; 
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);  
    `;   

    return (
        <Div>
            <Pawn c={1} r={2}></Pawn>
        </Div>    
    )
}