import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./components/ui/AppLayout";
import SearchBuspage from "./pages/SearchBusPage";
import BusBookingPage from "./pages/BusBookingPage";
import OperatorLayout from "./components/ui/operator/OperatorLayout";
import PassengerLayout from "./components/ui/passenger/PassengerLayout";
import Logo from "./components/ui/navbar/Logo";
import Footer from "./components/ui/home/footer/Footer";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookingsPage from "./pages/BookingsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import OperatorSignupPage from "./pages/OperatorSignupPage";
import SearchBusPage from "./pages/SearchBusPage";
import RoutesPage from "./pages/RoutesPage";

const queryClient = new QueryClient({
  defaultOptions: {
    // queries: { staleTime: 60 * 1000 },
    queries: {
      // the time in which the date in the cache will say relevant
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 6000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-background)",
            },
          }}
        />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<IndexPage />} />

              <Route element={<PassengerLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/search_bus" element={<SearchBusPage />} />
                <Route path="/search_bus/:id" element={<BusBookingPage />} />
              </Route>

              <Route element={<OperatorLayout />}>
                <Route path="dashboard" element={<Logo />} />
                <Route path="my_company" element={<Footer />} />
                <Route path="routes" element={<RoutesPage />} />
                {/* other links for operator */}
              </Route>
            </Route>

            <Route path="/settings" element={<SettingsPage />}>
              <Route index element={<Navigate replace to="profile" />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="bookings" element={<BookingsPage />} />
            </Route>

            <Route path="/operator/signup" element={<OperatorSignupPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
