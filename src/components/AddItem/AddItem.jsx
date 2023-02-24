import { useEffect, useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import './AddItem.css'
import { url } from '../HomePage/Home';

export default function AddItemForm(){
    const navigate=useNavigate();
    const [newItemObj, setNewItemObj]=useState({});

    useEffect(()=>{
        setTimeout(() => {
            newItemObj && fetchAdd(newItemObj);
            navigate(-1);
        }, 1000);
    },[newItemObj])
    const inputProductName=useRef(null);
    const inputProductPrice=useRef(null);
    const inputProductId=useRef(null);
    const inputProductAvatar=useRef(null);

    async function fetchAdd(obj){

        const requestOptions = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        };

        try {
        const response = await fetch(`${url}`, requestOptions);
        const data = await response.json();
            console.log("data:-- ", data);
            console.log("FETCHHHHHEEDDDDD");
        } catch (error) {
            
        }
        }


    function submitButtonHandler(name, id, price, avatar){
        const myObj={}
        myObj.name=name.current.value;
        myObj.id=id.current.value;
        myObj.price=price.current.value;
        myObj.avatar=avatar.current.value;
        setNewItemObj(myObj);


    }

    return <div id='add-item-container'>
        <h2>Add Item</h2>
        <input type="text" className='input-form' placeholder='Item Name' ref={inputProductName} />
        <div id='num-input-container'>
        <input type="number" className='input-num' placeholder='Price' ref={inputProductPrice} />
        <input type="number" className='input-num' placeholder='ID' ref={inputProductId}/>
        </div>
        <input type="text" className='input-Desc' placeholder='Item Img Link' ref={inputProductAvatar} />
        <button onClick={()=>{
            submitButtonHandler(inputProductName, inputProductId, inputProductPrice, inputProductAvatar);
            
        }
            }>Submit Item</button>
    </div>
}