import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Comon/Footer";
import Header from "./Comon/Header";
import AuthProvider from "./pages/Login/AuthProvider";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          {routes.map((data, index) => (
            <Route path={data.path} element={data.element} key={index} />
          ))}
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
