import React from 'react';
import { render, Text, Box } from 'ink';

function SideBar() {
  return (
    <Box borderStyle={'round'} width={40}>
      <Text>I'm a sidebar</Text>
    </Box>
  );
}

export default SideBar;