const chessPieces = {
  // White Pieces
  white: {
    king:   { symbol: '♔', escape: '\u2654', codePoint: 0x2654 },
    queen:  { symbol: '♕', escape: '\u2655', codePoint: 0x2655 },
    rook:   { symbol: '♖', escape: '\u2656', codePoint: 0x2656 },
    bishop: { symbol: '♗', escape: '\u2657', codePoint: 0x2657 },
    knight: { symbol: '♘', escape: '\u2658', codePoint: 0x2658 },
    pawn:   { symbol: '♙', escape: '\u2659', codePoint: 0x2659 }
  },
  // Black Pieces
  black: {
    king:   { symbol: '♚', escape: '\u265A', codePoint: 0x265A },
    queen:  { symbol: '♛', escape: '\u265B', codePoint: 0x265B },
    rook:   { symbol: '♜', escape: '\u265C', codePoint: 0x265C },
    bishop: { symbol: '♝', escape: '\u265D', codePoint: 0x265D },
    knight: { symbol: '♞', escape: '\u265E', codePoint: 0x265E },
    pawn:   { symbol: '♟', escape: '\u265F', codePoint: 0x265F }
  }
};

export default chessPieces;
