import { createHashRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";

function App() {
  const routes = createHashRouter([
    {
      path: "/",
      element: <Root />,
      children: [],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;