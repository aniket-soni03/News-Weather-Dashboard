import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import News from "./pages/News";
import Weather from "./pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <News /> },
      { path: "weather", element: <Weather /> },
    ],
  },
]);

export default router;
