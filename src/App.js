import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import Main from "./pages/Main";
import SelectItem from "./pages/SelectItem";
import Credit from "./pages/Credit";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path={"/"} element={<Main />} />
          </Routes>
          <Routes>
            <Route path={"/selectItem"} element={<SelectItem />} />
          </Routes>
          <Routes>
            <Route path={"/credit"} element={<Credit />} />
          </Routes>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
