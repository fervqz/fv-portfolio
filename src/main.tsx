import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import lightTheme from './styles/lightTheme.ts';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import darkTheme from './styles/darkTheme.ts';


const theme = true ? lightTheme : darkTheme;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
