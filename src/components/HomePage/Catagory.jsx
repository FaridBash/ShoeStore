
import { Link, useNavigate  } from 'react-router-dom'
import './Catagory.css'

export default function Catagory(props){
    const navigate=useNavigate();

    return <div id="catagory-container">
        <img src={props.url} alt="" id='cata-img'/>
        <p>{props.title}</p>
        <Link to={(`/${props.title}`)} state={props.pass} >Manage Items</Link>
    </div>
}