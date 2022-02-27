import boardSrc from '../assets/chesboard.png';
import styled from 'styled-components'; 
import Pawn from './pawn'; 

//Testing out Javascript style object
// const myStyle = { 
//     width: '100%', 
//     maxWidth: '90vh',
//     display:'block', 
//     margin: 'auto'
// }

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

export default function Board(props){
    //Testing out styled components  
 

    return (
        <Div>
            {/* White */}
            {
                [1,2,3,4,5,6,7,8].map((index)=>{
                    return <Pawn c={index} r={7}></Pawn>
                })
            }

            {/*Black*/}
            {
                [1,2,3,4,5,6,7,8].map((index)=>{
                    return <Pawn c={index} r={2}></Pawn>
                })
            }
        </Div>    
    )
}