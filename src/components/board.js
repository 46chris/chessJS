import boardSrc from '../assets/chesboard.png';
import styled from 'styled-components'; 
import Pawn from './pawn'; 
import Bishop from './bishop'; 
import King from './king'; 
import Knight from './knight'; 
import Queen from './queen'; 
import Rook from './rook'; 

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

//https://www.semicolonworld.com/question/72710/react-0-13-this-getdomnode-equivalent-to-react-finddomnode

export default function Board(props){
    return (
        <Div>
            {/* White */}
            {
                [1,2,3,4,5,6,7,8].map((index)=>{
                    return <Pawn c={index} r={7} color="white"></Pawn>
                })
            }
            <Rook c={1} r={8} color="white"></Rook>
            <Knight c={2} r={8} color="white"></Knight>
            <Bishop c={3} r={8} color="white"></Bishop>
            <Queen c={4} r={8} color="white"></Queen>
            <King c={5} r={8} color="white"></King>
            <Bishop c={6} r={8} color="white"></Bishop>
            <Knight c={7} r={8} color="white"></Knight>
            <Rook c={8} r={8} color="white"></Rook>

            {/*Black*/}
            {
                [1,2,3,4,5,6,7,8].map((index)=>{
                    return <Pawn c={index} r={2} color="black"></Pawn>
                })
            }
            <Rook c={1} r={1} color="black"></Rook>
            <Knight c={2} r={1} color="black"></Knight>
            <Bishop c={3} r={1} color="black"></Bishop>
            <Queen c={4} r={1} color="black"></Queen>
            <King c={5} r={1} color="black"></King>
            <Bishop c={6} r={1} color="black"></Bishop>
            <Knight c={7} r={1} color="black"></Knight>
            <Rook c={8} r={1} color="black"></Rook>
        </Div>    
    )
}