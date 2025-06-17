import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./components/shared/theme";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./components/main/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import Upcoming from "./pages/upcoming/Upcoming";
import { BigCalendar } from "./pages/calendar/BigCalendar";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/">
              <Route index element={<Main />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/upcoming" element={<Upcoming />} />
              <Route path="/calendar" element={<BigCalendar />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
