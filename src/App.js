import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme';
import { StyledEngineProvider } from '@mui/styled-engine';
import Main from './pages/Main';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Routes>
            <Route path={'/'} element={<Main />} />
          </Routes>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
