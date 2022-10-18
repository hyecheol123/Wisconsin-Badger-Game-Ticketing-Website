/**
 * Entry point of the application
 *
 * @author Hyecheol (Jerry) Jang <hyecheol123@gmail.com>
 */

// React
import React from 'react';
import { createRoot } from 'react-dom/client';
// Material UI
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { blue, red } from '@mui/material/colors';
// Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Font
import '@fontsource/ibm-plex-sans-kr/300.css';
import '@fontsource/ibm-plex-sans-kr/400.css';
import '@fontsource/ibm-plex-sans-kr/500.css';
// Components
import LandingPage from './LandingPage';

// MUI Theme (Setup Font family)
const theme = createTheme({
  typography: {
    fontFamily: '"IBM Plex Sans KR", sans-serif',
    h5: {
      fontWeight: 500,
    },
  },
  palette: {
    primary: red,
    secondary: blue,
  },
});

/**
 * React functional component to render the application content
 *
 * @return {React.ReactElement} The content of the application
 */
function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

/**
 * React functional component to render the application's entry point
 *
 * @return {React.ReactElement} The entry point of the application
 */
function AppWrapper(): React.ReactElement {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<AppWrapper />);
