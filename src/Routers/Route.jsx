import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import App from "../App";
import SignUp from "../Pages/SIgnUP/SignUp";
import SignIn from "../Pages/SIgnIn/SignIn";
import Destination from "../Pages/Destination/Destination";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SearchResult from "../Pages/SearchResult/SearchResult";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import Dashboard from "../Layout/Dashboard";
import Users from "../Components/Dashboard/Users";
import Packages from "../Components/Dashboard/Packages";
import News from "../Components/Dashboard/News";
import Blogs from "../Components/Dashboard/Blogs";
import Booked from "../Components/Dashboard/Booked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:id",
        element: <SearchResult />,
      },
      {
        path: "/package/:id",
        element: <PackageDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/packages",
        element: <Packages />,
      },
      {
        path: "/dashboard/news",
        element: <News />,
      },
      {
        path: "/dashboard/blogs",
        element: <Blogs />,
      },
      {
        path: "/dashboard/booked",
        element: <Booked />,
      },
    ],
  },
]);

export default router;
