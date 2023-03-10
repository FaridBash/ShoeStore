import './Products.css'
import {useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import AddItemForm from '../AddItem/AddItem';


const url = "https://63f749eae40e087c958b57f1.mockapi.io/shoestore";

export default function ProductsPage(props){
    const [shoesitemsFromDb, setShoesItemsFromDb] = useState([]);
    const [isLoading, setIsLoadind]=useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state;
    console.log("PRODUCT data: ",shoesitemsFromDb);
    console.log("STATE", state);


    useEffect(() => {
        // console.log(shoesitemsFromDb);
        // fetchItemsHandler();
      }, [shoesitemsFromDb]);
      useEffect(() => {
        setTimeout(fetchItemsHandler,(1000))  
      // console.log('items:',items);
    }, []);
  
    async function fetchItemsHandler() {
      setIsLoadind(true);
      try {
        fetch(url)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setShoesItemsFromDb(data);
            console.log(data);
            setIsLoadind(false);
          });
      } catch (error) {console.log("Couldn't fetch");}
    }





    return <div id='products-page'>
        <div id='products-header'>
          
            <h1>{state} Products</h1>
        </div>
            <div id='add-btn' >
              <button onClick={()=>{navigate('/shoes/AddItem')}} >Add Item</button>
              </div>
        <div id='show-items'>

        {!isLoading && shoesitemsFromDb.map((e)=>{
            return <ProductCard key={e.id} image={e.avatar} title={e.name} price={e.price} detailPage={`./Shoes/${e.id}`} pass={e}   id={e.id}  />
        })}

        {isLoading && <div id='spinner'> <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> </div>}
        </div>
        </div>
}