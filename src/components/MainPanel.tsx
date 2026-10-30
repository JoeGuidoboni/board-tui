import React from 'react';
import { render, Text, Box } from 'ink';

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
  </Box>
  );
}

export default MainPanel;