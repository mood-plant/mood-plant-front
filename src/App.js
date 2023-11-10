import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme';
import { StyledEngineProvider } from '@mui/styled-engine';
import Main from './pages/Main';
import Header from './components/Common/Header';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <Routes>
            <Route path={'/'} element={<Main />} />
          </Routes>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
