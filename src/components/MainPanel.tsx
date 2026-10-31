import React from 'react';
import { render, Text, Box } from 'ink';
import chessPieces from '../defs';

function MainPanel() {
  return(<Box
    borderStyle={'round'}
    height={'100%'}
    width={'100%'}
    flexDirection={'column'}
    paddingLeft={4}
    paddingRight={4}
  >
    <Text>Chess Board Here</Text>
    <Text>White King: {chessPieces.white.king.escape}</Text>
    <Text>White Queen: {chessPieces.white.queen.escape}</Text>
    <Text>White Rook: {chessPieces.white.rook.escape}</Text>
    <Text>White Bishop: {chessPieces.white.bishop.escape}</Text>
    <Text>White Knight: {chessPieces.white.knight.escape}</Text>
    <Text>White Pawn: {chessPieces.white.pawn.escape}</Text>
    <Text>Black King: {chessPieces.black.king.escape}</Text>
    <Text>Black Queen: {chessPieces.black.queen.escape}</Text>
    <Text>Black Rook: {chessPieces.black.rook.escape}</Text>
    <Text>Black Bishop: {chessPieces.black.bishop.escape}</Text>
    <Text>Black Knight: {chessPieces.black.knight.escape}</Text>
    <Text>Black Pawn: {chessPieces.black.pawn.escape}</Text>
  </Box>
  );
}

export default MainPanel;