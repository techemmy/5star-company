import Auth from "./components/Auth";
import React from "react";
import AuthSignup from "./components/AuthSignup"
import AuthLogin from "./components/AuthLogin"
import ErrorPage from "./components/ErrorPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Auth />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<AuthSignup />}>
        </Route>
        <Route path="/login" element={<AuthLogin />}>
        </Route>
        <Route path="/signup" element={<AuthSignup />}>
        </Route>
      </Route>
    </Route>
  )
)

function App() {
  React.useEffect(() => {
    const showPasswordBtn = document.getElementById('show-password');
    if (showPasswordBtn == null) return;

    showPasswordBtn.addEventListener('click', (event) => {
      const passwordField = event.target.previousElementSibling;
      if (passwordField.type == "password") {
        passwordField.type = "text";
        event.target.innerText = 'HIDE';
      } else {
        passwordField.type = "password";
        event.target.innerText = 'SHOW';
      }
    })
  }, [])
  return <RouterProvider router={router} />
}

export default App
