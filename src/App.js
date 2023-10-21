import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Upload from "./pages/Upload";
import Rootlayout from "./layouts/Rootlayout";
import Import, { loader } from "./components/Import";
import Protectedroutes from "./components/Protectedroutes";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Protectedroutes>
        <Rootlayout />
      </Protectedroutes>,
      children: [
        { index: true, element: <Homepage /> },
        { path: 'upload', element: <Upload /> },
        { path: 'import', element: <Import />, loader: loader }
      ]
    },
    { path: '/login', element: <Loginpage /> },
    { path: '/signup', element: <Signuppage /> },
  ]);
  return <RouterProvider router={router} />
}

export default App;
