import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path={'/'} element={<App />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
