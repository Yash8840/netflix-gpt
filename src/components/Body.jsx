import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import LoginPage from "./LoginPage";

const Body = () => {

  return (
    <div>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={appRouter}
      />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

export default Body;
