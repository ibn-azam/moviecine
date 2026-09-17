import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Movies from "./pages/Movies";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import MainLayout from "./layouts/MainLayout";

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/watchlist",
          element: <Watchlist />,
        },
      ]
    },

  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
