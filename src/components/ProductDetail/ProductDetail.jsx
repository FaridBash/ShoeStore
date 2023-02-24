import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


export default function ProductDetail(){
    const params=useParams();
    const location = useLocation();
    const state = location.state;
    console.log(state);
    return <div id='detail-container'>
                <h1>Product Detail</h1>
            <div id='del-edit-btns'>
                <button>Remove Item</button>
                <button>Edit Item</button>
            </div>
            <h2>{state.name}</h2>
            <img src={state.avatar} alt="" id='detail-img'/>
            <p>Item Store Id: {params.id} - Price: <span>&#8362;</span> {state.price} </p>
            <p id='desc'><b>Item Description: -</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente ratione est eveniet ipsa blanditiis harum aliquam voluptatum mollitia? Exercitationem nisi unde dolor recusandae. Neque, aliquid itaque! Quibusdam, optio repellendus hic blanditiis modi, odit eius ea, cupiditate dolor itaque impedit neque minima praesentium a adipisci necessitatibus debitis eligendi nam quisquam.</p>
        </div>
} 