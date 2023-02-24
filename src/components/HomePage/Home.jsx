import Catagory from './Catagory'
import './Home.css'
import catagoriesList from '../../data/catagories'
import { useState, useEffect } from 'react';
import items1 from '../../data/items';


export const url = "https://63f749eae40e087c958b57f1.mockapi.io/shoestore";

export default function Home(){

  // const [shoesitemsFromDb, setShoesItemsFromDb] = useState([]);
  // const [isLoading, setIsLoadind]=useState(false);
    const [items, setItems]=useState(items1);
  // useEffect(() => {
  //     // console.log(shoesitemsFromDb);
  //   }, [shoesitemsFromDb]);
  //   useEffect(() => {
        
  //   fetchItemsHandler();
  //   // console.log('items:',items);
  // }, []);

  // async function fetchItemsHandler() {
  //   setIsLoadind(true);
  //   try {
  //     fetch(url)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setShoesItemsFromDb(data);
  //         console.log(data);
  //         setIsLoadind(false);
  //       });

  //     // const fetched= await fetch(url);
  //     // const data= await fetched.json();
  //     // setShoesItemsFromDb(data);
  //     // console.log(shoesitemsFromDb);
  //   } catch (error) {console.log("Couldn't fetch");}
  // }


    return <div id='home-page'>
        <h1 id='h1-home'><span>W</span>elcome To</h1>
        <h2 id='h2-home'><span id='my'>My</span>Store</h2>
        <div id='home-container'>

        {catagoriesList.map((i)=>{ 
          return <Catagory key={i.id} title={i.title} url={i.img} pass={i.title}/>})}


        </div>
    </div>
}

