import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./home/Home.jsx";
import SignIn from "./auth/SignIn.jsx";

import MainLayout from "./layouts/MainLayout.jsx";
import SignUp from "./auth/SignUp.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>} />
        <Route path="signIn" element={<SignIn></SignIn>} />
        <Route path="signUp" element={<SignUp></SignUp>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
