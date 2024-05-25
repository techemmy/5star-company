import Auth from "./components/Auth";
import AuthSignup from "./components/AuthSignup"
import AuthLogin from "./components/AuthLogin"
import ErrorPage from "./components/ErrorPage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<ErrorPage />} element={<Auth />}>
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
  return <RouterProvider router={router} />
}

export default App
