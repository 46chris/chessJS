import Game from "./components/game";
import { DndProvider } from 'react-dnd'; 
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App(props) { 
    return (
        <DndProvider backend={HTML5Backend}>
                <Game></Game>
        </DndProvider>
    )
}