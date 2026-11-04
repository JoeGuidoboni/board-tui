import React from 'react';
import { render, Text, Box, useStdout } from 'ink';
import pieces from '../assets/pieces.json'
import { Frame, Pane } from '@oliveryasuna/ink-frame';
import { grid } from '@oliveryasuna/ink-frame-layout';
import { color } from 'bun';

export default function Board() {
    // const boardArea = grid({
    //     rows: 8,
    //     columns: 8,
    //     rowGap: 0,
    //     columnGap: 0
    // });

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
      ];


    const sqDims: Rect = {
      left: 0,
      top: 0,
      width: 8,
      height: 4,
    };
    return (
    <Frame
      width={8 * 8}
      height={8 * 4}
    >
      <Pane
        rect={sqDims}
        alignItems='center'
        justifyContent='center'
        backgroundColor='black'
      >
      <Text>{boardState[0][0]}</Text>
      </Pane>
    </Frame>
    );
}

function Square({ pieceChar, index }: { pieceChar: string; index: number }) {
  const sqDims: Rect = {
    left: 0,
    top: 0,
    width: 4,
    height: 4,
  };

  return (
    <Pane 
      rect={sqDims}
      aspectRatio={1}
      alignItems='center'
      justifyContent='center'
      backgroundColor={ index % 2 == 0 ? 'white' : 'black'}
      >
      <Text></Text>
    </Pane>
  );
}