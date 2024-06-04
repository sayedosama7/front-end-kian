import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Courses from "./Components/Pages/Courses";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/courses",
    element: <Courses />
  },
  {
    path: "/coursesDetails",
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
    element: <Assignments />
  },
  {
    path: "/enroll",
    element: <Enroll />
  }
]);

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
