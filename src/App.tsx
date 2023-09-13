import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import Offer from "./components/Offer";
import Error from "./components/Error";
import Account from "./components/Account";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Welcome />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="offer" element={<Offer />} />
      <Route path="account" element={<Account />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
