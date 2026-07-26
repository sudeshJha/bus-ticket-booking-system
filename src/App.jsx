import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./components/ui/AppLayout";
import SearchBus from "./pages/SearchBus";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="search_bus" element={<SearchBus />} />
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
