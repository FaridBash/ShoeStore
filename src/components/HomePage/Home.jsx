import Catagory from './Catagory'
import './Home.css'


export default function Home(){

    return <div id='home-page'>
        <h1>HOME PAGE</h1>
        <div id='home-container'>
        <Catagory/>
        <Catagory/>
        <Catagory/>
        <Catagory/>
        </div>
    </div>
}