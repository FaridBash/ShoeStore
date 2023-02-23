import { Link, Outlet } from 'react-router-dom'
import './Header.css'


export default function Header(){



    return <>
    <div id="header">
        <h5>MyStore</h5>
        <ul id='myMenu'>
            <Link className='link'>Catagories</Link>
            <Link className='link'>Branches </Link>
            <Link className='link'>About us</Link>
        </ul>
    </div>
    <div id='outlet'>
    <Outlet/>
    </div>
    </>
}