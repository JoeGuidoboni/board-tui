#!/usr/bin/env bun
import React from 'react';
import {render} from 'ink';
import { withFullScreen } from "fullscreen-ink";
import App from './App.tsx';
withFullScreen(<App />).start();