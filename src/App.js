import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Homepage />, },
    { path: '/login', element: <Loginpage /> },
    { path: '/signup', element: <Signuppage /> },
  ]);
  return <RouterProvider router={router} />
}

export default App;
