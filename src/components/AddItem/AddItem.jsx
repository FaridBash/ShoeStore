import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './AddItem.css'
import { url } from '../HomePage/Home';

export default function AddItemForm(){
    const navigate=useNavigate();
    const location = useLocation();
    const state = location.state;
    console.log("STATE FROM ADD ITEM",state);

    const [newItemObj, setNewItemObj]=useState(null);
    const [editedObj, setEditedObj]=useState(null);
    useEffect(()=>{
        if(!state){
            setTimeout(() => {
                fetchAdd(newItemObj);
            }, 1000);
        }
    },[newItemObj])

    useEffect(()=>{
        if(state){
            setTimeout(() => {
                updateHandler(editedObj.id, editedObj);
                navigate(-1);
            }, 1000);
        }
    },[editedObj])

    let inputProductName=useRef(null);
    let inputProductPrice=useRef(null);
    let inputProductId=useRef(null);
    let inputProductAvatar=useRef(null);
    
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
    
    async function updateHandler(itemId, obj){
        try {
            fetch(`${url}/${itemId}`, {
            method: 'PUT',
            body: JSON.stringify({
                
                name: obj.name,
                price: obj.price,
                avatar: obj.avatar,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
        .then(res => res.json())
        .then(data => console.log("res",data))
        // console.log("EDIT obj:", data);
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
        inputProductName=null;
        inputProductId=null;
        inputProductPrice=null;
        inputProductAvatar=null;
        navigate(-1);
        
        
    }
    function editButtonHandler(name, id, price, avatar){
        const myObj={}
        myObj.name=name.current.value;
        myObj.price=price.current.value;
        myObj.id=id.current.value;
        myObj.avatar=avatar.current.value;
        setEditedObj(myObj);
        inputProductName=null;
        inputProductPrice=null;
        inputProductAvatar=null;
       
        
        
    }
    
    if(!state){

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
    if(state){

        // inputProductName.current.value=state.name;
        // inputProductId.current.value=state.id;
        // inputProductPrice.current.value=state.price;
        // inputProductAvatar.current.value=state.avatar;


    return <div id='add-item-container'>
        
        <h2>Edit Item <p>Item ID: {state.id}</p></h2>
        <input type="text" className='input-form' placeholder='Item Name' ref={inputProductName} />
        <div id='num-input-container'>
        <input type="number" className='input-num' placeholder='Price' ref={inputProductPrice} />
        </div>
        <input type="text" className='input-Desc' placeholder='Item Img Link' ref={inputProductAvatar} />
        <button onClick={()=>{
            // updateHandler(state.id, inputProductName.current.value, inputProductPrice.current.value, inputProductAvatar.current.value);
            editButtonHandler(inputProductName, inputProductId ,inputProductPrice, inputProductAvatar)
            
        }
            }>Submit Edit</button>
    </div>
    }

}