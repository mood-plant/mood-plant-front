import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './style/theme';
import { StyledEngineProvider } from '@mui/styled-engine';
import Main from './pages/Main';
import SelectItem from './pages/SelectItem';
import CheckResult from './pages/CheckResult';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Routes>
            <Route path={'/selectItem'} element={<SelectItem />} />
            <Route path={'/'} element={<Main />} />
            <Route path={'/checkResult'} element={<CheckResult />} />
          </Routes>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
