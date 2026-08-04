import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./components/ui/AppLayout";
import SearchBus from "./pages/SearchBus";
import BusBooking from "./pages/BusBooking";
import Bookings from "./pages/Bookings";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search_bus" element={<SearchBus />} />
            <Route path="search_bus/:id" element={<BusBooking />} />
          </Route>

          <Route path="settings" element={<Settings />}>
            <Route index element={<Navigate replace to="profile" />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
