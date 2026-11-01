import React from 'react';
import { render, Text, Box, useStdout } from 'ink';
import pieces from '../assets/pieces.json'
import { Frame, Pane } from '@oliveryasuna/ink-frame';
import { grid } from '@oliveryasuna/ink-frame-layout';

export default function Board() {
    // boardState is a 2D array
    // where array[0][0] is A1 and [7][7] is H8

    const boardState = [
        [ pieces.white.rook.symbol, pieces.white.knight.symbol, pieces.white.bishop.symbol, pieces.white.queen.symbol, pieces.white.king.symbol, pieces.white.bishop.symbol, pieces.white.knight.symbol, pieces.white.rook.symbol ],
        [ pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol, pieces.white.pawn.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol, pieces.no_piece.symbol ],
        [ pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol, pieces.black.pawn.symbol ],
        [ pieces.black.rook.symbol, pieces.black.knight.symbol, pieces.black.bishop.symbol, pieces.black.queen.symbol, pieces.black.king.symbol, pieces.black.bishop.symbol, pieces.black.knight.symbol, pieces.black.rook.symbol ]
      ]
    return (
    <div>
      { boardState.map((row, rowIndex) => (
        <div key={rowIndex}>
          {
            row.map((piece, index) => (
              <Square key={`${rowIndex}-${index}`} pieceChar={piece} index={rowIndex * 8 + index}/>
            ))
          }
        </div>
        
      ))}
    </div>
    );
}

function Square({ pieceChar, index }: { pieceChar: string; index: number }) {
  return (
    <Box 
      width={4}
      aspectRatio={1}
      alignItems='center'
      justifyContent='center'
      backgroundColor={ index % 2 == 0 ? 'white' : 'black'}
      >
      <Text>{pieceChar}</Text>
    </Box>
  );
}