import { Link } from 'react-router-dom'

import './ProductCard.css'


export default function ProductCard(props){



    return <div id="product-container">
    <img src={props.image} alt="" id='product-img'/>
    <p>{props.title}</p>
    <p><span>&#8362;</span> {props.price}</p>
    <Link to={(`/${props.detailPage}`) } state={props.pass} >Manage Items</Link>
</div>
}