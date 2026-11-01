import React from 'react';
import { render, Text, Box } from 'ink';
import chessPieces from '../defs';
import Board from './Board';

function MainPanel() {
  return(<Box
    borderStyle={'round'}
    height={'100%'}
    width={'100%'}
    paddingLeft={4}
    paddingRight={4}
  >
    <Board />
  </Box>
  );
}

export default MainPanel;