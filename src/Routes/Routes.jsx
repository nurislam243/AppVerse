import { createBrowserRouter } from "react-router";
import NotFound from "../pages/Error/NotFound";
import Root from "../Layouts/Root";
import Login from "../pages/Auth/Login";
import AppsPage from "../pages/Apps/AppsPage";
import AppDetails from "../pages/Apps/AppDetails";
import LatestApps from "../pages/LatestApps/LatestApps";
import Registration from "../pages/Auth/Registration";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import LoadingSpinner from "../components/ui/LoadingSpinner";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: "/",
            loader: () => fetch('/apps.json'),
            HydrateFallback: LoadingSpinner,
            Component: AppsPage
        },
        {
          path: '/myProfile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: '/latest',
          loader: () => fetch('/apps.json'),
          HydrateFallback: LoadingSpinner,
          Component: LatestApps
        },
        {
          path: '/appDetails/:appId',
          loader: () => fetch('/apps.json'),
          HydrateFallback: LoadingSpinner,
          element: <PrivateRoute><AppDetails></AppDetails></PrivateRoute>
        },
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/registration',
            Component: Registration
        },
        
      ]
    },
  ]);