import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { url } from '../HomePage/Home';
import { useNavigate } from "react-router-dom";
export default function ProductDetail(){
    const params=useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const stateEditedObj = location.editedObj;
    console.log("state---",state);
    console.log("PARAMS: ", params.id);

    async function deleteHandler(itemId){
        try {
            fetch(`${url}/${itemId}`, {
            method: 'DELETE',
            })
        .then(res => res.json()) // or res.json()
        .then(res => console.log("res",res))
    
            console.log("delete clicked");
            console.log("state after delete:", state );
            // navigate(-1);
        } catch (error) {
            
        }
        }



    return <div id='detail-container'>
                <h1>Product Detail</h1>
            <div id='del-edit-btns'>
                <button onClick={()=>{deleteHandler(params.id); navigate(-1)}}>Remove Item</button>
                <button onClick={()=>{navigate('/shoes/AddItem', {state})}}>Edit Item</button>
            </div>
            <h2>{state.name}</h2>
            <img src={state.avatar} alt="" id='detail-img'/>
            <p>Item Store Id: {params.id} -- Price:  <span>&#8362;</span>{state.price} </p>
            <p id='desc'><b>Item Description: -</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente ratione est eveniet ipsa blanditiis harum aliquam voluptatum mollitia? Exercitationem nisi unde dolor recusandae. Neque, aliquid itaque! Quibusdam, optio repellendus hic blanditiis modi, odit eius ea, cupiditate dolor itaque impedit neque minima praesentium a adipisci necessitatibus debitis eligendi nam quisquam.</p>
        </div>
} 