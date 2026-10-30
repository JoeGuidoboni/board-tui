import React from 'react';
import { render, Text, Box } from 'ink';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import SideBar from './components/SideBar.tsx';
import MainPanel from './components/MainPanel.tsx';
import EvalSidebar from './components/EvalSidebar.tsx';

function MainLayout({children}: PropsWithChildren) {
  return <Box>{children}</Box>;
}

export default function App() {
  return (
    <MainLayout>
      <SideBar />
      <MainPanel />
      <EvalSidebar />
    </MainLayout>
  );
}