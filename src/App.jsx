import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
import ProductsPage from "./components/Products/Products";
import "./App.css";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
      {
        path:"Shoes",
        element: <ProductsPage/>
      }
      // {
      //   path: "Products",
      //   element: <Products />,
      // },
      // {
      //   path: "/Products/:id",
      //   element: <ProductDetail />,
      // },
    ],
  },
  {
    path:'/home1',
    element: <Home/>
  }
]);

function App() {
  
  return (
    <div className="App">
      <RouterProvider router={route}/>
      {/* <button onClick={fetchItemsHandler}>Btn</button> */}
    </div>
  );
}

export default App;
