/**
 * Provides the logic behind the game and stores the gamestate as well
 */

import { createContext } from 'react';
import Board from './board';

export default function Game(children) {
  const board = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'k', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['r', 'n', 'b', 'q', 'k', 'b', 'k', 'r'],
  ];

  const updateBoard = (fromR, fromC, toRow, toCol, newPiece) => {
    board[toRow][toCol] = newPiece;
    board[fromR][fromC] = null;
  };

  return (
    <boardContext.Provider value={{ board, updateBoard }}>
      <Board />
    </boardContext.Provider>
  );
}
export const boardContext = createContext({
  board: [],
  updateBoard: (fromR, fromC, toRow, toCol, newPiece) => {},
});
