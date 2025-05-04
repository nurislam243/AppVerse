import { createBrowserRouter } from "react-router";
import NotFound from "../pages/Error/NotFound";
import Root from "../Layouts/Root";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import AppsPage from "../pages/Apps/AppsPage";
import Profile from "../pages/Profile/Profile";

 export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: "/",
            Component: AppsPage
        },
        {
          path: '/myProfile',
          Component: Profile
        },
        
        {
            path: '/login',
            Component: Login
        },
        {
            path: '/signup',
            Component: SignUp
        },
        
      ]
    },
  ]);