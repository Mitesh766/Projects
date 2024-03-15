import React, { useEffect, useState } from "react";
import {RouterProvider, createBrowserRouter} from "react-router-dom" 
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About"
import Contact from "./Components/Contact";
import Error from "./Components/Error";

const App = () => {
  return (
    <div className="main-app-container">
      <Header />
      <Body />
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path :"/",
    
    element:<App/>,  // if / is path call app component

    errorElement:<Error/>, // if there is any error loading the element(component) or if the route is not present  load this error component.
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter}/>);
