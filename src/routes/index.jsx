import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Detail from "../pages/DetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:country",
    element: <Detail />,
  },
]);
