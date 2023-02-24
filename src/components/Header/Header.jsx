import { Link, Outlet } from 'react-router-dom'
import './Header.css'


export default function Header(){



    return <>
    <div id="header">
        <h2><span>My</span>Store</h2>
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