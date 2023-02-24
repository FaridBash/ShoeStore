import './Products.css'
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';

export default function ProductsPage(props){
    const location = useLocation();
    const state = location.state;
    console.log("PRODUCT data: ",state);


    return <div id='products-page'>
        <h1>Products</h1>
        <div id='show-items'>

        {state.map((e)=>{
            return <ProductCard key={e.id} image={e.avatar} title={e.name} price={e.price}    />
        })}
        </div>
        </div>
}