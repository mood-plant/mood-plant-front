import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./style/theme";
import { StyledEngineProvider } from "@mui/styled-engine";
import Main from "./pages/MainPage";
import SelectItem from "./pages/SelectItem";
import CheckResult from "./pages/CheckResult";
import Complete from "./pages/Complete";
import Credit from "./pages/Credit";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route path={"/selectItem"} element={<SelectItem />} />
            <Route path={"/"} element={<Main />} />
            <Route path={"/checkResult"} element={<CheckResult />} />
            <Route path={"/complete"} element={<Complete />} />
            <Route path={"/credit"} element={<Credit />} />
          </Routes>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
