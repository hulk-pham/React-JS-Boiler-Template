import SuspenceLoading from "components/atoms/suspence-loading.comp";
import { redirectIfUserMiddleware, requireLoginMiddleware } from "middlewares";
import Login from "pages/auth/login.page";
import ErrorPage from "pages/error.page";
import Home from "pages/home/index.page";
import RootPage from "pages/root.page";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LazyDashboardPage = React.lazy(
  () => import("pages/dashboard/index.page")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: redirectIfUserMiddleware,
      },
      {
        path: "login",
        element: <Login />,
        loader: redirectIfUserMiddleware,
      },
      {
        path: "logout",
        // action: logoutUser,
      },
      {
        path: "/404",
        element: <ErrorPage />,
      },
      {
        path: "dashboard",
        element: <LazyDashboardPage />,
        loader: requireLoginMiddleware,
      },
    ],
  },
]);

function AppRouter() {
  return (
    <React.Suspense fallback={<SuspenceLoading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
}

export default AppRouter;
