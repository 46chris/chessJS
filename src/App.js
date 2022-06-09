import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Game from './components/game';

export default function App(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Game />
    </DndProvider>
  );
}
