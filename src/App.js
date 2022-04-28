import Board from "./components/board"
import Square from "./components/square";
import { DndProvider } from 'react-dnd'; 
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App(props) { 
    return (
        <DndProvider backend={HTML5Backend}>
            <div>
                <Board></Board>
            </div>
        </DndProvider>
    )
}