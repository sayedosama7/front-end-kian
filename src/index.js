import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Categories from "./Components/Pages/Categories";
import Instructors from "./Components/Pages/Instructors";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import SignUp from "./Components/SignAndLog/SignUp";
import LogIn from "./Components/SignAndLog/LogIn";
import Profile from "./Components/SignAndLog/Profile";
import ForgetPass from "./Components/SignAndLog/ForgetPass";
import Gallery from "./Components/Pages/Gallery";
import CourseDetails from "./Components/Pages/CourseDetails";
import InstructorForm from "./Components/Pages/InstructorForm";
import Assignments from "./Components/Pages/Assignments";
import ThemeProvider from "./ThemeContext";
import Enroll from "./Components/Pages/Enroll";
import ProtectedRoute from "./Components/ProtectedRoute";
import Courses from "./Components/Pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/categories",
    element: <Categories />
  },
  {
    path: "/courses",
    element: <Courses />
  },
  {
    path: "/courseDetails",
    element: <CourseDetails />

  },
  {
    path: "/instructors",
    element: <Instructors />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <LogIn />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/forget",
    element: <ForgetPass />
  },
  {
    path: "/gallery",
    element: <Gallery />
  },
  {
    path: "/instructor-form",
    element: <InstructorForm />
  },
  {
    path: "/assignments",
    element: <ProtectedRoute element={Assignments} />
  },
  {
    path: "/enroll",
    element: <ProtectedRoute element={Enroll} />
  }
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
