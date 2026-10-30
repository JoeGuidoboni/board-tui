import React from 'react';
import { render, Text, Box } from 'ink';

function EvalSidebar() {
  return(<Box
    borderStyle={'round'}
    height={'100%'}
    width={'40'}
    flexDirection={'column'}
    paddingLeft={4}
    paddingRight={4}
  >
    <Text>Eval Sidebar Here</Text>
  </Box>
  );
}

export default EvalSidebar;