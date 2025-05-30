import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store/index";
import { useEffect } from "react";
import { loadTasks } from "./store/tasks/actions";

import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Main from "./components/main/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import Upcoming from "./pages/upcoming/Upcoming";
import { BigCalendar } from "./pages/calendar/BigCalendar";
// import { TaskProvider } from "./context/TaskContext";

const App = () => {
  // useEffect(() => {
  //   dispatch(loadTasks());
  // }, [dispatch]);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
