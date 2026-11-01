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
    <Text>White King: {chessPieces.white.king.symbol}</Text>
    <Text>White Queen: {chessPieces.white.queen.symbol}</Text>
    <Text>White Rook: {chessPieces.white.rook.symbol}</Text>
    <Text>White Bishop: {chessPieces.white.bishop.symbol}</Text>
    <Text>White Knight: {chessPieces.white.knight.symbol}</Text>
    <Text>White Pawn: {chessPieces.white.pawn.symbol}</Text>
    <Text>Black King: {chessPieces.black.king.symbol}</Text>
    <Text>Black Queen: {chessPieces.black.queen.symbol}</Text>
    <Text>Black Rook: {chessPieces.black.rook.symbol}</Text>
    <Text>Black Bishop: {chessPieces.black.bishop.symbol}</Text>
    <Text>Black Knight: {chessPieces.black.knight.symbol}</Text>
    <Text>Black Pawn: {chessPieces.black.pawn.symbol}</Text>
  </Box>
  );
}

export default MainPanel;