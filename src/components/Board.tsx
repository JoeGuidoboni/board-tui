import React from 'react';
import { render, Text, Box } from 'ink';
import chessPieces from '../defs';

export default function Board() {
    // boardState is a 2D array
    // where array[0][0] is A1 and [7][7] is H8
    const boardState = [
        [
            color: 
        ]
    ]

}

function Square({ color, piece }: { color: string; piece: string }) {
  return (
    <Box
      
    >
      <Text>{piece}</Text>
    </Box>
  );
}