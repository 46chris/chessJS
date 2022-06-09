function canDropPawn(item, toPos) {
  const diffY = toPos[0] - item.pos[0];
  const isSameCol = item.pos[1] === toPos[1];

  if (item.color === 'black') {
    // At the beginning pos so can move two up
    if (item.pos[0] === 1) {
      return (isSameCol) && (diffY === 2 || diffY === 1);
    }
    // Standard move forward one

    return (isSameCol) && (diffY === 1);
  }
  // Case piece color is white

  if (item.pos[0] === 6) {
    return (isSameCol) && (diffY === -2 || diffY === -1);
  }

  return (isSameCol) && (diffY === -1);
}
/**
 * Calculates all possible movements for all pieces. Which is then set as the canDrop for
 * the square useDrop hook
 */
export default function canDropPiece(item, toPos, piece) {
  console.log(`The item we're moving ${item}The piece in the square ${piece()}`);

  // If the square is occupied by another piece
  if (piece() != null) {
    return false;
  }

  switch (item.name) {
    case 'PAWN':
      return canDropPawn(item, toPos);
    default:
      return null;
  }
}
