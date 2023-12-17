import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
//Pages
import { Login, Register, HomeLayout, LendingPage } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
// Loader and Action
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashBoardLoader } from "./pages/DashLayout";
import { action as addBookAction } from "./pages/AddBook.jsx";
import { loader as allBookLoader } from "./pages/AllBooks.jsx";
import { loader as editBookLoader } from "./pages/EditBook.jsx";
import { action as editBookAction } from "./pages/EditBook.jsx";
import { action as deleteBookAction } from "./pages/DeleteBook.jsx";

import DashLayout from "./pages/DashLayout";
import ProfilePage from "./pages/ProfilePage";
import Stats from "./pages/Stats.jsx";
import AllBooks from "./pages/AllBooks";
import MyProfile from "./pages/MyProfile";
import AddBook from "./pages/AddBook";
import MyDetails from "./pages/MyDetails.jsx";
import Admin from "./pages/Admin.jsx";
import EditBook from "./pages/EditBook.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <LendingPage />,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "dashboard",
        element: <DashLayout />,
        loader: dashBoardLoader,
        children: [
          {
            index: true,
            element: <ProfilePage />,
          },
          {
            path: "myProfile",
            element: <MyProfile />,
            loader: dashBoardLoader,
            children: [
              {
                index: true,
                element: <AddBook />,
                action: addBookAction,
              },
              {
                path: "all-books",
                element: <AllBooks />,
                loader: allBookLoader,
              },
              {
                path: "stats",
                element: <Stats />,
                // loader:bookListLoader,
              },
              {
                path: "profile",
                element: <MyDetails />,
              },
              {
                path: "admin",
                element: <Admin />,
              },
              {
                path: "edit-book/:id",
                element: <EditBook />,
                loader: editBookLoader,
                action: editBookAction,
              },
              {
                path: "delete-book/:id",
                action: deleteBookAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
