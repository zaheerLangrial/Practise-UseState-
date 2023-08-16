import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Dashbord from './Table-UseHook';
import UseStateExample from "./Table-UseHook/useStateExample";
import W3SchoolHooksExample from "./Table-UseHook/W3SchoolHooks";
import UseStateHookPractise from "./Table-UseHook/UseStatePractise";
import Car from "./Table-UseHook/UseStateExample2";
import Car2 from "./UseStateExample3";
import TailwindCssPractise from "./E-ComeracePractise";
import Dashbord1 from "./TablePractise";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbord/>
  },
  {
    path: "/dashbord1",
    element: <Dashbord1/>,
  },
  {
    path: "/useStateExample",
    element: <UseStateExample/>,
  },
  {
    path: "/w3SchoolHooksExample",
    element: <W3SchoolHooksExample/>,
  },
  {
    path: "/useStateHookPractise",
    element: <UseStateHookPractise/>,
  },
  {
    path: "/car",
    element: <Car/>,
  },
  {
    path: "/car2",
    element: <Car2/>,
  },
  {
    path: "/tailwindCssPractise",
    element: <TailwindCssPractise/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
