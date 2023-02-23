import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Header from "./components/Header/Header";
import Home from "./components/HomePage/Home";
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
  const url = "https://63f749eae40e087c958b57f1.mockapi.io/shoestore";
  const [itemsFromDb, setItemsFromDb] = useState([]);

  useEffect(() => {
    // console.log(itemsFromDb);
  }, [itemsFromDb]);
  async function fetchItemsHandler() {
    try {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setItemsFromDb(data);
          console.log(data);
        });

      // const fetched= await fetch(url);
      // const data= await fetched.json();
      // setItemsFromDb(data);
      // console.log(itemsFromDb);
    } catch (error) {}
  }

  return (
    <div className="App">
      <RouterProvider router={route}/>
      {/* <button onClick={fetchItemsHandler}>Btn</button> */}
    </div>
  );
}

export default App;
